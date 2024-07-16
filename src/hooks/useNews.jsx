import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { showLoading } from '../redux/fetchSlice';

const useNews = (dataFilter, langFilter) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { page } = useSelector((store) => store.fetch);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${dataFilter.toLowerCase() || "latest"}&language=${langFilter || "eng"}&page=${page}&pageSize=5&apiKey=b72afa1fdfc743ddacd474601c1f142d`);
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [page, dataFilter, langFilter]);

  return { newsData, loading };
};

export default useNews;
