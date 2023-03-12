import './Testimonial.css'
import rasm from '../../../../assets/images/client.png'

function Testimonial(){
    return(
    <>
    <section className="client_section layout_padding pt-5">
          <div className="d-flex justify-content-center">
            <h2 className="heading_style">
              Testimonial
            </h2>
          </div>
          <div id="carouselExampleIndicator" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicator" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicator" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicator" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicator" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_box c-b-1">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box c-b-2">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_box c-b-1">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box c-b-2">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_box c-b-1">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box c-b-2">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_box c-b-1">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box c-b-2">
                        <div className="client_img">
                          <img src={rasm} alt="" className="img-fluid"/>
                        </div>
                        <div className="client_detail">
                          <h5>
                            Rock lu
                          </h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical
                            Latin literature from 45 BC, making it over 2000 years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
        </>
    )
}

export default Testimonial