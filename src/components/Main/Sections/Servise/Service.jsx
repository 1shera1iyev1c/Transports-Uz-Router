import './Service.css'
import rasm from '../../../../assets/images/service-1.jpg'
import rasm2 from '../../../../assets/images/service-2.jpg'
import rasm3 from '../../../../assets/images/service-3.jpg'

function Service(){
    return(
    <>
        <section className="service_section layout_padding pt-5">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h2 className="heading_style">
                Our Services
              </h2>
            </div>
            <div className="row layout_padding2-top">
              <div className="col-md-4">
                <div className="service_img-box s-b-1">
                  <img src={rasm} alt=""/>
                  <div className="d-flex">
                    <h3>
                      CARGO

                    </h3>
                  </div>
                </div>
                <div className="service-detail">
                  <p>
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.Excepteur
                  </p>
                  <div className="d-flex justify-content-end">
                    <a href="" className="service-btn">
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service_img-box s-b-2">
                  <img src={rasm2} alt=""/>
                  <div className="d-flex">
                    <h3>
                      LOGISTIC SERVICE


                    </h3>
                  </div>
                </div>
                <div className="service-detail">
                  <p>
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.Excepteur
                  </p>
                  <div className="d-flex justify-content-end">
                    <a href="" className="service-btn">
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service_img-box s-b-3">
                  <img src={rasm3} alt=""/>
                  <div className="d-flex">
                    <h3>
                      STORAGE


                    </h3>
                  </div>
                </div>
                <div className="service-detail">
                  <p>
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.Excepteur
                  </p>
                  <div className="d-flex justify-content-end">
                    <a href="" className="service-btn">
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>

    )

}
export default Service