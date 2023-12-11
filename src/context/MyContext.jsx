import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next";
const MyContext = createContext({});

const MyContextProvidor = ({ children }) => {
  //Start language Setting
  let localLang = localStorage.getItem("lang");
  const [lang, setlang] = useState(localLang?localLang: "ar");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang);
  }, [lang]);
  //End language Setting


  return (
    <MyContext.Provider
      value={{
        lang,
        setlang,
        t,
        i18n,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvidor;

export const useMyContext = () => {
  return useContext(MyContext);
};