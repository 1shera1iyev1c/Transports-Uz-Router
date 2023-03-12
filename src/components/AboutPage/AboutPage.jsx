import React from "react";
import rasm from "../../assets/images/a-truck.jpg";
import rasm2 from "../../assets/images/white-next.png";
import './AboutPage.css'

export const AboutPage = () => {
  return (
    <>
      <section class="about_section layout_padding2-bottom">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="heading_style">About Us</h2>
              <p>
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="about_img-box">
                <img src={rasm} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-6 about_detail-container">
              <div class="about_detail-box">
                <h3>Company and Transport</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna as
                </p>
                <div class="d-flex  justify-content-end">
                  <a href="" class="quote-btn about-btn">
                    <img src={rasm2} alt="" />
                    <span>About More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
