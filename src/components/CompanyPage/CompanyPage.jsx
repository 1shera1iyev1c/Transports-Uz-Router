import React from "react";
import rasm from "../../assets/images/company.jpg";
import './CompanyPage.css'

export const CompanyPage = () => {
  return (
    <>
      <div class=" layout_padding mt-5 ">
        <section class="company_section layout_padding2 p-5">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="d-flex align-items-center h-100">
                  <div class="company-detail">
                    <h3>Company</h3>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 yearsContrary
                      to popular belief, Lorem Ipsum is not simply random text.
                      It has roots in a piece of classical Latin literature from
                      45 BC, making it over 2000 years
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="company_img-box">
                  <img src={rasm} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyPage;
