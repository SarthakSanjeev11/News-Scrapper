import React, { useEffect, useState } from "react";
import xml2js from "xml2js";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setNewsData } from "../redux/fetchSlice";
const Body = ({ author }) => {
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const dispatch = useDispatch();
  const dataUrl = useSelector((store) => store.fetch.url);
  const id = useSelector((store) => store.fetch.id);

  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);
  const urls = [
    "https://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms",
    "https://www.thehindu.com/news/international/feeder/default.rss",
  ];
  const fetchRSSFeed = async (url) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(text);
      if (result.rss && result.rss.channel && result.rss.channel[0].item) {
        return result.rss.channel[0].item;
      } else {
        console.error("Invalid RSS feed structure", result);
        return [];
      }
    } catch (err) {
      console.error("Error fetching RSS feed", err);
      setError(err);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllFeeds = async () => {
      const allFeeds = [];
      for (const url of urls) {
        try {
          const feedItems = await fetchRSSFeed(url);
          console.log("feeditems", feedItems);
          if (Array.isArray(feedItems)) {
            allFeeds.push(...feedItems);
          } else {
            console.error("feedItems is not an array", feedItems);
          }
        } catch (error) {
          console.error("Error fetching feed:", error);
        }
      }
      const shuffledFeeds = shuffleArray(allFeeds);
      setFeed(shuffledFeeds);
      dispatch(setNewsData(shuffledFeeds));
    };

    fetchAllFeeds();
  }, []);
  useEffect(() => {
    const fetchAllFeeds = async () => {
      const feedItems = await fetchRSSFeed(dataUrl);
      setFeed(feedItems);
      dispatch(setNewsData(feedItems));
    };

    fetchAllFeeds();
  }, [dataUrl]);

  console.log(feed, id);

  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col items-center gap-10">
        <div className="w-full grid gap-4">
          {feed &&
            feed.length > 0 &&
            feed.map((data, index) => (
              <Card data={data} key={index} author={author} index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Body;
