import React from "react";
import map from '../../assets/images/map.png'
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <>
      <section className="contact_section layout_padding pt-5">
          <div className="d-flex justify-content-center">
            <h2 className="heading_style">
              Contact us
            </h2>
          </div>
          <div className="container layout_padding2-top">
            <div className="row">
              <div className="col-md-6">
                <div id="map" className="h-100 w-100">
                    <img src={map} alt=""  width={585} height={492}/>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact_form-container">
                  <form action="">
                    <div>
                      <input type="text" placeholder="Your Name"/>
                    </div>
                    <div>
                      <input type="email" placeholder="Your Email"/>
                    </div>
                    <div>
                      <input type="text" placeholder="Your Phone"/>
                    </div>

                    <div>
                      <input type="text" className="message_input" placeholder="Message"/>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit " className="">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default ContactPage;
