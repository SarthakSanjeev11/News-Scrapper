import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import Tgn from "../assets/TGN.png";
import { useDispatch, useSelector } from "react-redux";
import { account } from "../appwrite/config";

import {
  setUrl,
  setType,
  setSideBg,
  setCateCheck,
  logIn,
  setLogIn,
  setLogOutMode,
  setLogOutModel,
  logOutModel,
  setLoggedInUser
} from "../redux/fetchSlice";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import LogOutModel from "./LogOutModel";

const Header = ({ setCheck, setFilterLanguage, setSideColor, setSideLang }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);
  const languageDropdownTimer = useRef(null);
  const [lang, setlang] = useState(null);
  const dispatch = useDispatch();
  const navData = [{ title: "News" }];
  const newsSubmenu = ["Latest News", "Trending", "Politics"];
  const [translateColor, setTranslateColor] = useState("text-red-400");
  const navigate = useNavigate();
  const {logIn,loggedInUser} = useSelector((store) => store.fetch);
  const logOutModel = useSelector((store) => store.fetch.logOutModel);

  const [isHovered, setIsHovered] = useState(false);
   const [loading, setLoading] = useState(true);
  const lan = [
    {
      Title: "hi",
      Lang: "हिंदी",
      color: "hover:bg-indigo-400",
      color2: "bg-indigo-400",
      border: "border-indigo-400",
      textColor: "group-hover:text-indigo-700",
      Language: "hindi",
      url: "https://feed.livehindustan.com/rss/3116",
      TranslateColor: "text-indigo-400",
      sideBar: "titleHi",
      profile: "hover:text-indigo-700",
    },
    {
      Title: "kn",
      Lang: "ಕನ್ನಡ",
      color: "hover:bg-green-400",
      color2: "bg-green-400",
      border: "border-green-400",
      textColor: "group-hover:text-green-700",
      Language: "kannada",
      url: "https://kannada.hindustantimes.com/rss/nation-and-world",
      TranslateColor: "text-green-400",
      sideBar: "titleKa",
      profile: "hover:text-green-700",
    },
    {
      Title: "en",
      Lang: "Eng",
      color: "hover:bg-red-400",
      color2: "bg-red-400",
      border: "border-red-400",
      textColor: "group-hover:text-red-700",
      Language: "english",
      url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      TranslateColor: "text-red-400",
      sideBar: "titleEng",
      profile: "hover:text-red-700",
    },
    {
      Title: "ta",
      Lang: "తెలుగు",
      color: "hover:bg-yellow-400",
      color2: "bg-yellow-400",
      border: "border-yellow-400",
      textColor: "group-hover:text-yellow-400",
      Language: "telugu",
      url: "https://telugu.hindustantimes.com/rss/national-international",
      TranslateColor: "text-yellow-400",
      sideBar: "titleTa",
      profile: "hover:text-yellow-400",
    },
    {
      Title: "bn",
      Lang: "বাংলা",
      color: "hover:bg-purple-400",
      color2: "bg-purple-400",
      border: "border-purple-400",
      textColor: "group-hover:text-purple-700",
      Language: "bengali",
      url: "https://bengali.abplive.com/home/feed",
      TranslateColor: "text-purple-400",
      sideBar: "titleBn",
      profile: "hover:text-purple-700",
    },
  ];
  const handleMouseEnter = (setter, ref) => {
    clearTimeout(ref.current);
    setter(true);
  };

  const handleMouseLeave = (setter, ref) => {
    ref.current = setTimeout(() => {
      setter(false);
    }, 300);
  };
  console.log(logOutModel)
  const toggleModal = () => {
    dispatch(setLogOutModel(true));
  };


  const [hoverLogIn, setHoverLogIn] = useState("hover:text-red-400");

  useEffect(() => {
    return () => {
      clearTimeout(dropdownTimer.current);
      clearTimeout(languageDropdownTimer.current);
    };
  }, []);

  const handlelanguage = (lang) => {
    setlang(lang);
    dispatch(setType("language"));
  };

  const dropdownRef = useRef(null);

  const handleProfileDropDown = () => {
    setIsHovered(!isHovered);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Check if user is logged in on component mount
    account.get()
        .then(currentUser => {
            dispatch(setLoggedInUser(currentUser));
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        })
        .finally(() => {
            setLoading(false);
        });
}, []); //

  return (
    <>
      <header className="fixed w-full bg-gray-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/">
              <img src={Tgn} alt="card-image" className="object-cover w-52" />
            </Link>
            <div
              className="relative"
              onMouseEnter={() =>
                handleMouseEnter(setLanguageDropdownOpen, languageDropdownTimer)
              }
              onMouseLeave={() =>
                handleMouseLeave(setLanguageDropdownOpen, languageDropdownTimer)
              }
            >
              <FontAwesomeIcon
                icon={faLanguage}
                className={`w-11 h-11 cursor-pointer hover:text-slate-700 ${translateColor}`}
              />
              <div
                className={`absolute -right-16 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-transform transform ${
                  isLanguageDropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                } duration-200 ease-out md:m-4 md:w-80 m-2`}
              >
                <div className="m-2">
                  <p className="text-center">Select Preferred Language</p>
                  <div className="grid grid-cols-2">
                    {lan.map((language, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          handlelanguage(language.Title);
                          setCheck(+1);
                          setSideColor(language.color2);
                          dispatch(setUrl(language.url));
                          setFilterLanguage(language.Title);
                          setTranslateColor(language.TranslateColor);
                          setSideLang(language.sideBar);
                          navigate("/");
                          dispatch(setSideBg(language.color2));
                          dispatch(setCateCheck("trending"));
                          setHoverLogIn(language.profile);
                        }}
                        className={`px-4 py-2 text-sm text-gray-700 flex items-center justify-start gap-5 rounded-full bg-white border ${language.border} ${language.color} md:text-lg text-sm m-2 group hover:text-white`}
                      >
                        <p
                          className={`rounded-full ${language.color2} ${language.border} group-hover:bg-white ${language.textColor} w-8 h-8 flex justify-center text-white items-center`}
                        >
                          {language.Title}
                        </p>
                        <p className="">{language.Lang}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {loggedInUser && loggedInUser.status ? (
                <>
                  <div ref={dropdownRef} className="relative">
                    <Link
                      to=""
                      type="button"
                      className={`flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ${hoverLogIn}`}
                      onClick={handleProfileDropDown}
                    >
                      <FaUserCircle className="relative w-8 h-8" />
                    </Link>
                    {isHovered && (
                      <div className="absolute w-40 bg-white rounded-lg shadow-lg ring-1 ring-gray-300 divide-y divide-gray-200">
                        <Link
                          to="/ProfilePage"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/Post"n
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                          Post
                        </Link>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={toggleModal}
                        >
                          Logout
                        </Link>
                       
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to="/SignIn"
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                >
                  Log In
                  <FaRegUserCircle className=" w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      {logOutModel && <LogOutModel />}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;
