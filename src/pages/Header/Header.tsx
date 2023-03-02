import React, { useState, useEffect } from "react";
// import "./Header.css";
// import campfire from "../images/campfire.png";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${scrollPosition > 100 ? "header_overlay" : ""}`}
    >
      <div className="header__container">
        <div className="header__item">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="header__image"
          >
            Logo
          </a>
          <a className="header__locations">
            <span className="header__location"></span>
            <p className="header__city">Moscow</p>
          </a>
        </div>

        <div className="header__navigations">
          <a className="header__navigation">Our therapists</a>
          <a className="header__navigation header__navigation_active">
            Information for therapists
          </a>
          <a className="header__navigation">Contacts</a>
        </div>
        <div className="header__additional">
          <span className="header__loop"></span>
          <select name="language" id="language" className="header__languages">
            <option value="ru" className="header__language">
              {/* <img className="header__flag header__flag_ru" alt="Ru" /> */}
              Ru
            </option>
            <option value="en" className="header__language">
              En
            </option>
            <option value="es" className="header__language">
              Es
            </option>
            <option value="ger" className="header__language">
              Ger
            </option>
          </select>
          <button className="header__button">Личный кабинет</button>
        </div>
      </div>
    </header>
  );
}
