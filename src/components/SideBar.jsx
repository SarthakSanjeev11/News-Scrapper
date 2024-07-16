import React, { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthor,
  setUrl,
  sideBg,
  cateCheck,
  setCateCheck,
} from "../redux/fetchSlice";
import { Link } from "react-router-dom";
function SideBar({ filterLanguage, sideColor, sideLang }) {
  const category = [
    {
      titleEng: "trending",
      titleHi: "चर्चा में",
      titleKa: "ಚರ್ಚೆ",
      titleTa: "ట్రెండింగ్",
      titleBn: "চলতি",
      urlEng: "https://www.thehindu.com/news/national/feeder/default.rss",
      urlHi: "https://hindi.oneindia.com/rss/feeds/oneindia-hindi-fb.xml",
      Author: "The Hindu",
      urlKa: "https://kannada.oneindia.com/rss/feeds/kannada-news-fb.xml",
    },
    {
      titleEng: "science",
      titleHi: "विज्ञान",
      titleKa: "ವಿಜ್ಞಾನ",
      titleTa: "సైన్స్",
      titleBn: "বিজ্ঞান",
      urlEng: "https://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms",
      urlHi: "https://www.prabhasakshi.com/rss/technologyarticles",
      Author: "Times Of India",
      urlKa: "https://rss.app/feeds/9iJPu7wuMiAJxALK.xml",
    },
    {
      titleEng: "technology",
      titleHi: "तकनीकी",
      titleKa: "ತಂತ್ರಜ್ಞಾನ",
      titleTa: "సాంకేతికత",
      titleBn: "প্রযুক্তি",
      urlEng: "https://timesofindia.indiatimes.com/rssfeeds/66949542.cms",
      urlHi: "https://www.bhaskar.com/rss-v1--category-5707.xml",
      Author: "Times Of India",
      urlKa: "https://kannada.news18.com/commonfeeds/v1/kan/rss/tech-trend.xml",
    },
    {
      titleEng: "cricket",
      titleHi: "क्रिकेट",
      titleKa: "ಕ್ರಿಕೆಟ್",
      titleTa: "క్రికెట్",
      titleBn: "ক্রিকেট",
      urlEng: "https://timesofindia.indiatimes.com/rssfeeds/54829575.cms",
      urlHi: "https://www.prabhasakshi.com/rss/cricket",
      Author: "Times Of India",
      urlKa: "https://kannada.hindustantimes.com/rss/cricket",
    },
    {
      titleEng: "education",
      titleHi: "शिक्षा",
      titleKa: "ಶಿಕ್ಷಣ",
      titleTa: "విద్య",
      titleBn: "শিক্ষা",
      urlEng: "https://timesofindia.indiatimes.com/rssfeeds/913168846.cms",
      urlHi: "https://www.bhaskar.com/rss-v1--category-11945.xml",
      Author: "Times Of India",
      urlKa:
        "https://kannada.news18.com/commonfeeds/v1/kan/rss/jobs/education.xml",
    },
    {
      titleEng: "environment",
      titleHi: "प्राकृतिक",
      titleKa: "ಪರಿಸರ",
      titleTa: "పర్యావరణం",
      titleBn: "পরিবেশ",
      urlEng: "https://timesofindia.indiatimes.com/rssfeeds/2647163.cms",
      urlHi: "https://www.prabhasakshi.com/rss/health",
      Author: "Times Of India",
      urlKa: "https://kannada.hindustantimes.com/rss/lifestyle",
    },
    {
      titleEng: "business",
      titleHi: "व्यापार",
      titleKa: "ವ್ಯಾಪಾರ",
      titleTa: "వ్యాపారం",
      titleBn: "ব্যবসা",
      urlEng: "https://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
      urlHi: "https://www.bhaskar.com/rss-v1--category-1051.xml",
      Author: "Times Of India",
      urlKa: "https://kannada.news18.com/commonfeeds/v1/kan/rss/business.xml",
    },
    {
      titleEng: "other sports",
      titleHi: "अन्य खेल",
      titleKa: "ಇತರ ಕ್ರೀಡೆಗಳು",
      titleTa: "ఇతర క్రీడలు",
      titleBn: "অন্যান্য খেলাধুলা",
      urlEng: "https://www.dunkest.com/en/rss/news/nba",
      urlHi:
        "https://hindi.news18.com/commonfeeds/v1/hin/rss/sports/others.xml",
      Author: "NBA Live",
      urlKa: "https://rss.app/feeds/XW59voeH2ltjlSnX.xml",
    },
  ];
  const dispatch = useDispatch();

  const sideBg = useSelector((store) => store.fetch.sideBg);
  const cateCheck = useSelector((store) => store.fetch.cateCheck);

  const author = (cate) => {
    urll(cate);
    dispatch(setAuthor(cate.Author));
  };

  const [open, setOpen] = useState(false);

  const urll = (cate) => {
    if (filterLanguage === "hi") {
      dispatch(setUrl(cate.urlHi));
    } else if (filterLanguage === "en") {
      dispatch(setUrl(cate.urlEng));
    } else if (filterLanguage === "kn") {
      dispatch(setUrl(cate.urlKa));
    }
  };
  return (
    <>
      <div
        className={`lg:block fixed flex h-full w-full max-w-[20rem] flex-col bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 mt-3 ${
          open
            ? `translate-x-0 md:block absolute z-10`
            : `translate-x-0 md-hidden hidden`
        }`}
      >
        <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div class="relative block w-full">
            <div
              role="button"
              class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            ></div>
            <div class="overflow-hidden">
              <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-gray-700">
                  {category.map((cate, j) => (
                    <Link
                      to={`/${cate.titleEng}`}
                      key={j}
                      role="button"
                      className={` capitalize flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-slate-600 hover:bg-opacity-80 hover:text-white focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${
                        cate.titleEng === cateCheck ? sideBg : "bg-white"
                      }`}
                      onClick={() => {
                        author(cate);
                        dispatch(setCateCheck(cate.titleEng));
                      }}
                    >
                      <div class="grid mr-4 place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="3"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-5 h-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </div>
                      {cate[sideLang] ? cate[sideLang] : cate["titleEng"]}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`lg:hidden absolute top-[15%] ${sideColor} rounded-r-full  pr-1 pt-1 pb-1 z-20 ${
          open ? "left-[57%]" : `left-0`
        }`}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <MdOutlineKeyboardDoubleArrowRight
            className="lg:hidden text-white"
            fontSize={35}
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowLeft
            className="lg:hidden text-white"
            fontSize={35}
          />
        )}
      </div>
    </>
  );
}

export default SideBar;
