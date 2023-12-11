import React, { useEffect } from "react";
import "./DesignServices.scss";
import CommonHead from "../../Components/CommonHead/CommonHead";
import { useMyContext } from "../../context/MyContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const DesignServices = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  useEffect(() => {
    AOS.init();
  }, []);
  const data =
    lang === "ar"
      ? [
          {
            arTitle: "أولاً: التصميم و الفيديوهات",
            enTitle: "First: design and videos",
            p: [
              "هوية بصريـة",
              "تصميم لوغـو",
              "تصميم أي بوست لمنصات السوشيال ميديا",
              "تصميم كارت شخصي / بزنـس",
              "تصميم ورقة A4",
              "تصميم دفتر فواتير",
              "تصمیم( دفتر - قلم - تيشرت الموظفين - كارت للموظفين - أكياس ورقية - تصميم طاقية أو كاب - تصميم ختم )",
              "فيديو سلايد شو 30 ثانية فويس اوفر من اختيـارك",
              "فيديو سلايد شو 60 ثانية فويس اوفر من اختيـارك",
              "فيديو موشن جرافيك ( ترويجي ) 30 ثانية شامل الفويس والإسكربت",
              "فيديو موشن جرافيك ( ترويجي ) 60 ثانية شامل الفويس والإسكربت",
            ],link:'/design-and-videos'
          },
          {
            arTitle: "ثانياً: إدارة وسائل التواصل الإجتماعي",
            enTitle: "Second: Social media management",
            p: [
              "تنفيذ خطة تسويقية واستراتيجية كاملة للمشروع.",
              "تنفيذ خطة محتوى إعلاني شهرية بواقع 30 بوست شهريا.",
              "إدارة منصات التواصل الاجتماعي والإعلانات.",
            ],link:'/social-media-management'
          },
          {
            arTitle: "ثالثاً: المواقع الإلكترونية ",
            enTitle: "Third: Websites",
            p: [
              "تصميم خاص لواجهة الموقع",
              "حجز نطـاق",
              "توافق الموقع مع جميع الأجهزة اللوحية والجوالات",
              "اضافة محتوى الموقع",
              "الموقع باللغتين العربية والإنجليزية",
              "تحسين محركات البحث SEO",
              "انشاء تطبيق متوافق لأجهزة اندرويد / آبــل للموقع",
            ],link:'/websites'
            
          },
          {
            arTitle: "رابعاً: تطبيقات أجهزة آبـل & أندرويد",
            enTitle: "Fourth: Applications for Apple & Android devices",
            p: ["إنشاء تطبيق لأجهزة آبــل", "إنشاء تطبيق لأجهزة أندرويد"],link:'/applications-for-apple-android-devices'
          },
          {
            arTitle: "خامساً: إنشاء متجر إلكتروني",
            enTitle: "Fifth: Create an online store",
            p: ["إنشاء متجر إلكتروني متوافق لجميع الأجهزة"],link:'/create-an-online-store'
          },
        ]
      : [
          {
            arTitle: "أولاً: التصميم و الفيديوهات",
            enTitle: "First: design and videos",
            p: [
              "Visual identity",
              "Logo design",
              "Design of any posts for social media platforms",
              "Design of business card",
              "Design of A4 paper",
              "Design of invoice book",
              "Design (notebook - pen - employee T-shirt - employee card - paper bags - cap or hat design - stamp design)",
              "30-second voice-over slideshow video of your choice",
              "60-second voice-over slideshow video of your choice",
              "30-second promotional motion graphics video with voice and script",
              "60-second promotional motion graphics video with voice and script",
            ],link:'/design-and-videos'
          },
          {
            arTitle: "ثانياً: إدارة وسائل التواصل الإجتماعي",
            enTitle: "Second: Social media management",
            p: [
              "Implementation of a comprehensive marketing and project strategy.",
              "Execution of a monthly advertising content plan with 30 posts per month.",
              "Management of social media platforms and advertisements.",
            ],link:'/social-media-management'
          },
          {
            arTitle: "ثالثاً: المواقع الإلكترونية ",
            enTitle: "Third: Websites",
            p: [
              "Special design for the website interface",
              "Domain reservation",
              "Website compatibility with all tablets and mobile devices",
              "Adding website content",
              "Website in both Arabic and English languages",
              "Search Engine Optimization (SEO)",
              "Create a compatible application for Android / Apple devices for the website",
            ],link:'/websites'
          },
          {
            arTitle: "رابعاً: تطبيقات أجهزة آبـل & أندرويد",
            enTitle: "Fourth: Applications for Apple & Android devices",
            p: [
              "Create an application for Apple devices",
              "Create an application for Android devices",
            ],link:'/applications-for-apple-android-devices'
          },
          {
            arTitle: "خامساً: إنشاء متجر إلكتروني",
            enTitle: "Fifth: Create an online store",
            p: ["Create an online store compatible with all devices"],link:'/create-an-online-store'
          },
        ];

  return (
    <>
      <CommonHead title={t("package3.h1")} path={t("package3.path")} />
      <div
        className="DesignServices"
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="300"
        style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="container">
          <h1>{t("package3.h2")}</h1>
          <p>{t("package3.p")}</p>
          <h2 className="section-title3 text-center my-5">
            {t("package3.h3")}
          </h2>
          <div className="packs">
            {data.map((item, i) => {
              return (
                <div className="pack" key={i}>
                  <div className="title">
                    <h1>{item.arTitle}</h1>
                    <h1>{item.enTitle}</h1>
                  <ul>
                    {item.p.map((item, i) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                  </div>
                  {/* <p>{item.p}</p> */}
                  <Link to={`/ask-for-aservice${item.link}`}>
                    <span>{t("subsc.h1")}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="pt-5">{t("package3.p2")}</p>
        </div>
      </div>
    </>
  );
};

export default DesignServices;
