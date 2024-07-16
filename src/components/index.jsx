import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import{ Toaster } from 'react-hot-toast';

const MainPage = () => {
  const [input, setInput] = useState("");
  const [dataFilter, setDataFilter] = useState("");
  const [langFilter, setLangFilter] = useState("");
  const [check, setCheck] = useState(0);
  const [url, setUrl] = useState(
    "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
  );

  const [filterLanguage, setFilterLanguage] = useState("en");
  const [sideColor, setSideColor] = useState("bg-red-400");
  const [sideLang, setSideLang] = useState("cate.titlEng");
  return (
    <div>
            <Toaster />

      <Header
        setSideLang={setSideLang}
        sideColor={sideColor}
        setSideColor={setSideColor}
        setDataFilter={setDataFilter}
        setLangFilter={setLangFilter}
        setCheck={setCheck}
        setUrl={setUrl}
        setFilterLanguage={setFilterLanguage}
      />
      <div className="flex">
        <div className="w-[20%]">
          {" "}
          <SideBar
            sideLang={sideLang}
            sideColor={sideColor}
            filterLanguage={filterLanguage}
            textInput={input}
            setInput={setInput}
            dataFilter={dataFilter}
            setCheck={setCheck}
            setDataFilter={setDataFilter}
            url={url}
            setUrl={setUrl}
          />
        </div>{" "}
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
