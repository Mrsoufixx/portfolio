import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./leftSidebar.scss";
import Social from "../../components/reusable/Social";

const LeftSideBar = () => (
  <div className="left">
    <main className="left__main">
      <ul className="left__social">
        <Social link="https://api.whatsapp.com/send?phone=212602880383">
          <FaWhatsapp className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
        <Social link="https://github.com/Mrsoufixx">
          <FaGithub className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
        <Social link="https://www.instagram.com/soufianekor/">
          <FaInstagram className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
        <Social link="https://www.linkedin.com/in/soufiane-korchi/">
          <FaLinkedin className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
      </ul>
      <div className="left__line dark:bg-primary-light" />
    </main>
  </div>
);

export default LeftSideBar;
