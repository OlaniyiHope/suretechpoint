import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <header class="header-section single-pic d-flex align-items-center text-md-start text-center position-relative bg-color2">
        <div class="container">
          <div class="row align-items-center pt-lg-5 pt-4">
            <div class="col-lg-5 col-12 mb-lg-4 mb-3">
              <div class="inner-content text-content text-lg-start text-center">
                <div class="heading ms-lg-0 mx-auto mb-md-0 mb-3">
                  <h1>WHO ARE WE?</h1>
                </div>
                <div class="description mb-3">
                  <p>
                    Osmos CRM specializes in creating sales automation tools. We
                    have solutions for cloud quote generation and hybrid CRM. We
                    have created a set of solutions for sales automation and
                    business management. With the Osmos quoting system you can
                    automate your quoting and quotation process, create
                    invoices, and track prospects and customers.
                  </p>
                  <p>
                    The hybrid CRM allows you to manage leads and quotes at the
                    same time and is considered by our customers as the best CRM
                    for quoting.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-12">
              <div class="inner-content mb-lg-0 mb-5 pb-lg-0 pb-2">
                <div class="pic mx-auto pt-lg-4 pt-0">
                  <img
                    src="img/boxi.html"
                    class="img-fluid"
                    width="636"
                    height="578"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="main-section pb-section">
        <div class="container pt-4 pt-sm-0">
          <div class="row justify-content-center text-center pb-md-4 pb-3">
            <div class="heading mb-4 mx-auto mx-width">
              <h2>
                <span class="highlight">Trusted by REAL businesses</span> like
                yours!
              </h2>
            </div>
          </div>
          <div class="row partners-container justify-content-center align-items-center">
            <div class="col-xl-3 col-md-4 col-sm-6 col-12">
              <div class="pic mx-auto text-center mb-4">
                <img
                  src="img/partygames.html"
                  class="img-fluid"
                  width="250"
                  height="53"
                />
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-12">
              <div class="pic mx-auto text-center mb-4">
                <img
                  src="img/pizarro.html"
                  class="img-fluid"
                  width="250"
                  height="79"
                />
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-12">
              <div class="pic mx-auto text-center mb-4">
                <img
                  src="img/download.html"
                  class="img-fluid"
                  width="250"
                  height="77"
                />
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-12">
              <div class="pic mx-auto text-center mb-4">
                <img
                  src="img/dimotic-png-194.html"
                  class="img-fluid"
                  width="250"
                  height="57"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
