import React from "react";
import logo from "../../assets/images/logo.png";
import rasm from "../../assets/images/phone.png";
import rasm2 from "../../assets/images/mail.png";
import rasm3 from "../../assets/images/fb.png";
import rasm4 from "../../assets/images/twitter.png";
import rasm5 from "../../assets/images/g-plus.png";
import rasm6 from "../../assets/images/linkedin.png";
import "../Hero/Hero.css";
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container d-lg-none">
            <a className="navbar-brand" href="#">
              <div className="logo-box">
                <img src={logo} alt="" />
                <span>Transportz</span>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {" "}
                    About{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                  {" "}
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    {" "}
                    Shop{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/company">
                    {" "}
                    Company{" "}
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " to="/contact">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header_container ">
            <div className="logo-box">
              <img src={logo} alt="" />
              <span>Transportz</span>
            </div>
            <div>
              <div className="header_top">
                <div className="header_top-contact">
                  <a href="" className="ml-4">
                    <div>
                      <img src={rasm} alt="" />
                    </div>
                    <span>(+71) 258964785</span>
                  </a>
                  <a href="" className="ml-4">
                    <div>
                      <img src={rasm2} alt="" />
                    </div>
                    <span>transportz@gmail.com</span>
                  </a>
                </div>
                <div className="header_top-social">
                  <div>
                    <a href="">
                      <img src={rasm3} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={rasm4} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={rasm5} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={rasm6} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="header_btm">
                <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                      <ul className="navbar-nav  ">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/about">
                            {" "}
                            About{" "}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/service">
                            {" "}
                            Service
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/shop">
                            {" "}
                            Shop{" "}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/company">
                            {" "}
                            Company{" "}
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link className="nav-link pr-0" to="contact">
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
