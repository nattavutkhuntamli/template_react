
function Slider() {
    return(
        <>
         <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="detail-box">
                <h1>
                  We Build <br />
                  The Things Architects <br />
                  Dream Up
                </h1>
                <div className="btn-box">
                  <a href="" className="btn1">
                    Read More
                  </a>
                  <a href="" className="btn2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="detail-box">
                <h1>
                  We Build <br />
                  The Things Architects <br />
                  Dream Up
                </h1>
                <div className="btn-box">
                  <a href="" className="btn1">
                    Read More
                  </a>
                  <a href="" className="btn2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="detail-box">
                <h1>
                  We Build <br />
                  The Things Architects <br />
                  Dream Up
                </h1>
                <div className="btn-box">
                  <a href="" className="btn1">
                    Read More
                  </a>
                  <a href="" className="btn2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
        </>
    )
}

export default Slider