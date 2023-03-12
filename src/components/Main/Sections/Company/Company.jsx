import './Company.css'
import rasm from '../../../../assets/images/company.jpg'

function Company (){
    return(
        <>
        <section className="company_section layout_padding2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center h-100">
                  <div className="company-detail">
                    <h3>
                      Company
                    </h3>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 yearsContrary to popular belief, Lorem Ipsum is not
                      simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over
                      2000 years
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="company_img-box">
                  <img src={rasm} alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Company