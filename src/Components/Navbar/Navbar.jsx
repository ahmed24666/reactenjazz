import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useMyContext } from "../../context/MyContext";
import { IoIosArrowDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };
  const handleClose = () => setIsOpened(false);
  const handleShow = () => setIsOpened(true);
  const { lang, setlang, t, i18n } = useMyContext();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavStyle = () => {
    if (lang === "ar") {
      if (scrolled) {
        return { direction: "rtl", position: "fixed", background: "rgba(45, 25, 137, 0.60)",backdropFilter: 'blur(10px)' };
      } else {
        return { direction: "rtl", position: "absolute" };
      }
    } else {
      if (scrolled) {
        return { direction: "ltr", position: "fixed", background: "rgba(45, 25, 137, 0.60)",backdropFilter: 'blur(10px)' };
      } else {
        return { direction: "ltr", position: "absolute" };
      }
    }
  };
  return (
    <div
      className="Navbar pt-3"
      style={NavStyle()}
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-delay="300"
    >
      <div className="blured"></div>
      <div className="container">
        <div className="top d-flex justify-content-between align-items-end gap-5 pb-4">
          <div className="image">
            <Link to="/">
              <img loading="lazy" alt="Enjazz_image"  src="/images/logo.webp" />
            </Link>
          </div>
          <div className="end">
            <p
              className="mb-0"
              onClick={() => {
                setlang(lang === "ar" ? "en" : "ar");
                  i18n.changeLanguage(lang === "en" ? "ar" : "en");
              }}
            >
              {t("nav.lang")}
            </p>
            <div className="image">
              <img loading="lazy" alt="Enjazz_image" src="/images/لوجو المملكة 2030.svg" />
            </div>
          </div>
          {/* <div
            className="floatingBtn"
            style={lang === "ar" ? { left: "21%" } : { right: "21%" }}
          >
            <a href="https://enjaaz.sa/">
              <div className="sale">{t("nav.shop")}</div>
            </a>
            <NavLink to="/offers">
              <div className="sale1">{t("nav.offers")}</div>
            </NavLink>
          </div> */}
        </div>
        <div className="bottom">
          <ul className="links">
            <NavLink to="/">
              <li>{t("nav.home")}</li>
            </NavLink>
            <NavLink to="/about">
              <li>{t("nav.about")}</li>
            </NavLink>
            <NavLink to="/trymeservice">
              <li>{t("nav.tryMe")}</li>
            </NavLink>
            <NavLink to="/service-guide">
              <li>{t("nav.guide")}</li>
            </NavLink>
            <NavLink to="/callus">
              <li>{t("nav.call")}</li>
            </NavLink>
            <NavLink to="/packages">
              <li>{t("nav.packages")}</li>
            </NavLink>
            <li>
            {t("nav.more")} <IoIosArrowDown />
              <div className="dropdown" style={lang === "ar" ?{right: '50%'}:{right: '30%'}}>
                <ul>
                  <NavLink to="/questions">
                    <li>{t("nav.CQ")}</li>
                  </NavLink>
                  <NavLink to="/joinus">
                    <li>{t("nav.joinus")}</li>
                  </NavLink>
                  <NavLink to="/bank-accounts">
                    <li>{t("nav.bank")}</li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li>
              <a
              target="_blank"
                href="https://firebasestorage.googleapis.com/v0/b/aoe-24.appspot.com/o/Enjazz%20Portfolio.pdf?alt=media&token=8a95f4bc-37bf-4179-91ba-41188b1e0313"
                download="Enjazz Portfolio.pdf"
                className="sale1"
              >
                {t("nav.profile")}
              </a>
            </li>
            <a href="https://enjaaz.sa/">
              <div className="sale1">{t("nav.shop")}</div>
            </a>
            <NavLink to="/offers">
              <div className="sale">{t("nav.offers")}</div>
            </NavLink>
          </ul>
          <div className="dropdown" style={lang === "ar" ?{right: '50%'}:{right: '30%'}}>
                <ul>
                  <NavLink to="/questions">
                    <li>{t("nav.CQ")}</li>
                  </NavLink>
                  <NavLink to="/joinus">
                    <li>{t("nav.joinus")}</li>
                  </NavLink>
                  <NavLink to="/bank-accounts">
                    <li>{t("nav.bank")}</li>
                  </NavLink>
                </ul>
              </div>
          <div className="numbers">
            <div className="num">
              <div className="icon">
                <img loading="lazy" alt="Enjazz_image"  src="/images/phoneNav.webp" />
              </div>
              <a href="https://wa.me/966920013581">920013581</a>
            </div>
            <div className="num">
              <div className="icon">
                <img loading="lazy" alt="Enjazz_image"  src="/images/whatsappnav.webp" />
              </div>
              <a href="https://wa.me/966502144449">+966502144449</a>
            </div>
          </div>
          <button
            className={`menu ${isOpened ? "opened" : ""}`}
            onClick={toggleMenu}
            aria-expanded={isOpened}
            aria-label="Main Menu"
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
        <Offcanvas show={isOpened} onHide={handleClose} placement="end">
          <Offcanvas.Header>
            <div className="image">
              <img loading="lazy" alt="Enjazz_image"  src="/images/logo.webp" />
            </div>
            <div className="closeBtn">
              <button
                className={`menu ${isOpened ? "opened" : ""}`}
                onClick={toggleMenu}
                aria-expanded={isOpened}
                aria-label="Main Menu"
              >
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="sideLinks">
              <NavLink to="/">
                <li onClick={() => handleClose()}>{t("nav.home")}</li>
              </NavLink>
              <NavLink to="/about">
                <li onClick={() => handleClose()}>{t("nav.about")}</li>
              </NavLink>
              <NavLink to="/trymeservice">
                <li onClick={() => handleClose()}>{t("nav.tryMe")}</li>
              </NavLink>
              <NavLink to="/service-guide">
                <li onClick={() => handleClose()}>{t("nav.guide")}</li>
              </NavLink>
              <NavLink to="/callus">
                <li onClick={() => handleClose()}>{t("nav.call")}</li>
              </NavLink>
              <NavLink to="/packages">
                <li onClick={() => handleClose()}>{t("nav.packages")}</li>
              </NavLink>
              <NavLink to="/questions">
                <li onClick={() => handleClose()}>{t("nav.CQ")}</li>
              </NavLink>
              <NavLink to="/joinus">
                <li onClick={() => handleClose()}>{t("nav.joinus")}</li>
              </NavLink>
              <NavLink to="/offers">
                <li className="sale" onClick={() => handleClose()}>
                  {t("nav.offers")}
                </li>
              </NavLink>
              <a href="https://enjaaz.sa/">
                <li className="sale" onClick={() => handleClose()}>
                  {t("nav.shop")}
                </li>
              </a>

              <NavLink to="/bank-accounts">
                <li className="sale1" onClick={() => handleClose()}>
                  {t("nav.bank")}
                </li>
              </NavLink>

              <li className="sale" onClick={() => handleClose()}>
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/aoe-24.appspot.com/o/cv%2FAhmed_Osama_Resume.pdf?alt=media&amp;token=91dea169-f337-4844-b901-a6e17b8938ef"
                  download="Ahmed_Osama_Resume.pdf"
                >
                  {t("nav.profile")}
                </a>
              </li>
              <li
                className="sale"
                onClick={() => {
                  setlang(lang === "ar" ? "en" : "ar");
                    i18n.changeLanguage(lang === "en" ? "ar" : "en");
                  handleClose();
                }}
              >
                {t("nav.lang")}
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navbar;
