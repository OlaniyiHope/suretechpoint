import React from "react";
import Footer from "../Footer";
import sch from "./sch.png";
import econ from "./econ.png";
import crm from "./crm.png";
const Home = () => {
  const divStyle = {
    background: "url(img/kk.png)",
    backgroundSize: "cover",

    backgroundPosition: "center center",
    height: "800px",
  };
  return (
    <>
      <header
        class="d-flex align-items-center text-md-start text-center text-white position-relative"
        style={divStyle}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12 pt-xl-5 pt-lg-3">
              <div class="inner-content text-content pt-lg-5 text-lg-start text-center mb-md-0 mb-0">
                <div class="heading ms-lg-0 mx-auto mb-md-0 mb-3">
                  <h1
                    class=" col-sm-12 text-white"
                    style={{ textAlign: "center" }}
                  >
                    We Provide The Best ICT Services
                  </h1>
                </div>
                <div class="description mb-3">
                  <p class="title" style={{ textAlign: "center" }}>
                    Sure Tech Point is a Technology Software Solutions that uses
                    technology to solve problems in the society. We provide the
                    best ICT services
                  </p>
                </div>
                <div class="btn-container d-flex flex-sm-wrap flex-wrap justify-content-center ">
                  <a class="btn" href="/about" style={{ color: "black" }}>
                    About Us
                  </a>
                  <div class="play-btn popup-iframe-btn">
                    <button class="btn rounded-circle">
                      <span class="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-play"></i>
                      </span>
                    </button>
                    <span class="txt" href="/contact">
                      {" "}
                      Contact Us
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="main-section">
        <div class="container">
          <div class="row text-center mb-5 pb-3">
            <div class="heading col-12 mb-2">
              <h2>
                Get Quotes Out Faster,{" "}
                <span class="highlight"> Close Deals Quicker</span>
              </h2>
            </div>
            <div class="description center-description mx-width mx-auto col-12">
              <p>
                Professionalism is our watchword. You’ll be happy working and
                collaborating with our highly skilled developers, designers and
                managers.Working with PhreeTech means major cost savings. Now,
                you won’t have to break the bank to get your project done.We are
                a pioneering Information Technology Company dedicated to
                providing cutting-edge solutions in the ever-evolving landscape
                of technology. As IT Consultants, System Developers, and System
                Integrators, we take pride in delivering exceptional IT services
                to a diverse clientele, spanning both public and private
                sectors, including esteemed entities like the Nigerian
                government and various business communities.
              </p>
            </div>
          </div>
          <div class="row mx-auto mx-width1 justify-content-center text-center">
            <div class="card-container col-lg-4 col-md-6 col-12">
              <div class="inner-card shadow h-100">
                <div class="icon d-flex shadow justify-content-center align-items-center mx-auto">
                  <img
                    src="img/camara.html"
                    alt="quoting reports, quoting reports"
                    class="img-fluid"
                    loading="lazy"
                    width="45"
                    height="45"
                  />
                </div>
                <h5>Our Misson</h5>
                <p>
                  Sure Tech Point is is technology solution company that helps
                  you solve your needs with technology, at sure tech point we
                  bring your ideas to live, we have professionals engineers and
                  developers that helps with your ideo
                </p>
              </div>
            </div>

            <div class="card-container col-lg-4 col-md-6 col-12">
              <div class="inner-card shadow h-100">
                <div class="icon shadow d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/mensaje.html"
                    alt="communication with clients, communication with clients "
                    class="img-fluid"
                    loading="lazy"
                    width="45"
                    height="45"
                  />
                </div>
                <h5>Our Value - Customer Focused</h5>
                <p>
                  Sure Tech Point gives you the best user experience and
                  solutions to your everyday challenged, We give top notch
                  creative and dynamic solutions to our customers making thier
                  product useable and beautiful
                </p>
              </div>
            </div>

            <div class="card-container col-lg-4 col-md-6 col-12">
              <div class="inner-card shadow h-100">
                <div class="icon shadow d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/computer.html"
                    alt="sales quoting templates, sales quoting templates "
                    class="img-fluid"
                    loading="lazy"
                    width="45"
                    height="45"
                  />
                </div>
                <h5>Our Value - Integrity</h5>
                <p>
                  As a result of our years of experience in technology, we value
                  integrity and fulfil all our customers needs with total
                  deliverie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section top-card">
        <div class="container">
          <div class="row align-items-center">
            <div class="pic-content col-lg-7 col-12 order-lg-1 order-2 text-lg-start text-center">
              <div class="pic svg2 pe-lg-3 pe-0">
                <img src={sch} />
              </div>
            </div>
            <div class="text-content col-lg-5 col-12 pb-4 order-lg-2 order-1 text-lg-start text-center">
              <div class="heading mb-3">
                <h2>
                  Development Unique, custom solutions
                  <span class="highlight">
                    that are tailored to your needs.
                  </span>
                </h2>
              </div>
              <div class="description">
                <p>Design your own quote templates within minutes</p>
              </div>
              <div class="features text-start">
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center dott">
                    <span></span>
                  </div>
                  <div class="txt">Add your logo</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center dott">
                    <span></span>
                  </div>
                  <div class="txt">Choose your colors</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center dott">
                    <span></span>
                  </div>
                  <div class="txt">Display client and business information</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center dott">
                    <span></span>
                  </div>
                  <div class="txt">Add images and text</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center dott">
                    <span></span>
                  </div>
                  <div class="txt">Customize the product table</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row text-center pt-section pb-section">
            <div class="heading">
              <h3>
                Choose from a wide selection of templates
                <br />
                or design your own with the help of our editor.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section bg-color">
        <div class="container">
          <div class="row align-items-center">
            <div class="text-content col-lg-5 col-12 pb-4 text-lg-start text-center">
              <div class="heading mb-3">
                <h2>E-Commerce</h2>
              </div>
              <div class="description">
                <p>
                  Strategic solutions that put your e-commerce site to work for
                  you.
                </p>
              </div>
              <div class="features text-start">
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/tracking.html"
                      class="img-fluid"
                      width="25"
                      height="30"
                    />
                  </div>
                  <div class="txt">Track activity such as open and views</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/exchange.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Keep tabs when a client goes from viewing the proposal to
                    converting, and automate follow-up{" "}
                  </div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/dashboard.html"
                      class="img-fluid"
                      alt="automated quoting solution, automated quoting solution"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Review your sales pipeline and remove bottlenecks
                  </div>
                </div>
              </div>
            </div>
            <div class="pic-content col-lg-7 col-12 text-lg-start text-center">
              <div class="pic svg3 ps-lg-3 ps-0">
                <img src={econ} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="main-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="pic-content col-lg-7 col-12 order-lg-1 order-2 text-lg-start text-center">
              <div class="pic svg4 pe-lg-3 pe-0">
                <img src={crm} />
              </div>
            </div>
            <div class="text-content col-lg-5 col-12 pb-4 order-lg-2 order-1 text-lg-start text-center">
              <div class="heading mb-3">
                <h2>
                  <span class="highlight">Manage products</span> and create
                  sales quotes in one place
                </h2>
              </div>
              <div class="description">
                <p>
                  Get started by setting up your product catalog. Add single
                  products and services or upload your full catalogo via
                  spreadsheet. Keep track of your items, taxes, inventory, and
                  send professional quotes in seconds.
                </p>
              </div>
              <div class="features text-start">
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/exchange.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Add items, images, description, prices, taxes, units,
                    currency, and more
                  </div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/boxes.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Turn inventory (multi-warehouse) tracking on or off
                  </div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/administration.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Manage multiple prices, discounts, and taxes
                  </div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/exchange.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Add sub-items, create bundles, and variants
                  </div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/boxes.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">Measure profit margin</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/visibility.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">Show prices in different currencies</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/shoppingbag.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">Create sales orders</div>
                </div>
                <div class="feature d-flex align-items-start">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <img
                      src="img/setting.html"
                      class="img-fluid"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div class="txt">
                    Create invoices or connect Osmos to your accounting software
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section pb-sm-5 pb-3">
        <div class="container">
          <div class="row justify-content-center text-center pb-5">
            <div class="heading mb-2">
              <h2>
                Elevate Quotes <span class="highlight"> to Sales Hub</span>
              </h2>
            </div>
            <div class="description mx-width2 mx-auto">
              <p>
                {" "}
                Make Osmos the central element of your sales cycle by handling
                leads, quotes, tasks, and other sales activities.
              </p>
            </div>
          </div>
          <div class="row mx-auto mx-width1 justify-content-center">
            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma1.html"
                    class="img-fluid"
                    loading="lazy"
                    width="60"
                    height="60"
                  />
                </div>
                <p>Innovatos</p>
              </div>
            </div>

            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma2.html"
                    loading="lazy"
                    class="img-fluid"
                    width="60"
                    height="59"
                  />
                </div>
                <p>Skilled profesionals</p>
              </div>
            </div>

            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma3.html"
                    loading="lazy"
                    class="img-fluid"
                    width="60"
                    height="60"
                  />
                </div>
                <p>Create tasks, to-dos, goals, and reminders</p>
              </div>
            </div>

            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma4.html"
                    loading="lazy"
                    class="img-fluid"
                    width="60"
                    height="66"
                  />
                </div>
                <p>Result Oriented</p>
              </div>
            </div>

            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma5.html"
                    loading="lazy"
                    class="img-fluid"
                    width="60"
                    height="54"
                  />
                </div>
                <p>Client Centered</p>
              </div>
            </div>

            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma6.html"
                    loading="lazy"
                    class="img-fluid"
                    width="60"
                    height="59"
                  />
                </div>
                <p>Dynamic and sustainability</p>
              </div>
            </div>

            <div class="card-feature col-xl-3 col-lg-4 col-md-6 col-12">
              <div class="inner-card text-center mx-auto">
                <div class="icon shadow mb-4 d-flex justify-content-center align-items-center mx-auto">
                  <img
                    src="img/forma7.html"
                    loading="lazy"
                    class="img-fluid"
                    width="60"
                    height="58"
                  />
                </div>
                <p>Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section bg-color bg-color2 mob-sm-pb">
        <div class="container">
          <div class="row text-center">
            <div class="heading mb-2 mx-auto mx-width">
              <h2>What do our customers say about us?</h2>
            </div>
          </div>
          <div class="row">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner pt-md-4 pt-3">
                <div class="carousel-item active">
                  <div class="inner-content row mx-auto">
                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              I really like the way Osmos creates quotes for me.
                              It helps me keep a standard and neat presentation
                              toward my clients.
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Jose Masri</p>
                              <p>CFO</p>
                            </div>
                            <a
                              href="error404.html"
                              class="link"
                              target="_blank"
                            >
                              www.pizarro.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              Osmos has helped me with the quoting process. Long
                              gone are the times of creating quotes using Excel
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Gabriel Alcantara</p>
                              <p>Sales Manager</p>
                            </div>
                            <a
                              href="error404.html"
                              class="link"
                              target="_blank"
                            >
                              partygames.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              What I like about Osmos is that it combines the
                              CRM with the quotes in a seamless manner
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Rodrigo Conde</p>
                              <p>CEO</p>
                            </div>
                            <a
                              href="https://dimotic.com.mx/"
                              class="link"
                              target="_blank"
                            >
                              https://dimotic.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="inner-content row mx-auto">
                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              With Osmos I could solve what no other CRM could,
                              create quotes as fast as clients request them
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Lina</p>
                              <p>Sales Manager</p>
                            </div>
                            <a
                              href="error404.html"
                              class="link"
                              target="_blank"
                            >
                              bioservicios.co
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              Osmos has helped me with the quoting process. Long
                              gone are the times of creating quotes using Excel
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Gabriel Alcantara</p>
                              <p>Sales Manager</p>
                            </div>
                            <a
                              href="error404.html"
                              class="link"
                              target="_blank"
                            >
                              partygames.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              What I like about Osmos is that it combines the
                              CRM with the quotes in a seamless manner
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Rodrigo Conde</p>
                              <p>CEO</p>
                            </div>
                            <a
                              href="https://dimotic.com.mx/"
                              class="link"
                              target="_blank"
                            >
                              https://dimotic.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="inner-content row mx-auto">
                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              With Osmos I could solve what no other CRM could,
                              create quotes as fast as clients request them
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Lina</p>
                              <p>Sales Manager</p>
                            </div>
                            <a
                              href="error404.html"
                              class="link"
                              target="_blank"
                            >
                              bioservicios.co
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              Osmos has helped me with the quoting process. Long
                              gone are the times of creating quotes using Excel
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Gabriel Alcantara</p>
                              <p>Sales Manager</p>
                            </div>
                            <a
                              href="error404.html"
                              class="link"
                              target="_blank"
                            >
                              partygames.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="say-container col-xl-4 col-lg-6 col-12">
                      <div class="say-content position-relative">
                        <div class="icon position-absolute">
                          <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div class="txt-container d-flex flex-wrap flex-column justify-content-between h-100">
                          <div class="txt mb-3">
                            <p>
                              What I like about Osmos is that it combines the
                              CRM with the quotes in a seamless manner
                            </p>
                          </div>
                          <div class="details">
                            <div class="author mb-1">
                              <p>Rodrigo Conde</p>
                              <p>CEO</p>
                            </div>
                            <a
                              href="https://dimotic.com.mx/"
                              class="link"
                              target="_blank"
                            >
                              https://dimotic.com.mx
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section faq-section2">
        <div class="container">
          <div class="row">
            <div class="col-12 heading text-center">
              <h2>FAQ</h2>
            </div>
            <div class="col-md-6 col-12 text-content">
              <div class="faq-item active">
                <button class="btn btn-faq text-start w-100 position-relative">
                  What are the benefits of using{" "}
                  <span class="highlight">quoting</span> software?
                  <span class="faq-icon d-inline-block position-absolute top-50">
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle w-100"></span>
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle h-100"></span>
                  </span>
                </button>
                <div class="collapse show faq-content">
                  <div class="inner-faq-content">
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">1.</span>
                      <span class="txt">
                        This type of software can help you save time by
                        automating the quoting process. It is similar to a
                        proposal software.{" "}
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">2.</span>
                      <span class="txt">
                        It can help you create more accurate quotes and
                        proposals, by providing access to up-to-date pricing
                        information and product data.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">3.</span>
                      <span class="txt">
                        It can help you win more business, by making it easier
                        to create professional looking proposals.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="faq-item">
                <button class="btn btn-faq text-start w-100 position-relative">
                  How <span class="highlight">Osmos</span> software works ?
                  <span class="faq-icon d-inline-block position-absolute top-50">
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle w-100"></span>
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle h-100"></span>
                  </span>
                </button>
                <div class="collapse faq-content">
                  <div class="inner-faq-content">
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">1.</span>
                      <span class="txt">
                        Upload the catalog of products and services into Osmos.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">2.</span>
                      <span class="txt">
                        Create a contact or lead profile in the CRM.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">3.</span>
                      <span class="txt">
                        Assign a quote or proposal to your contact or lead. Add
                        and select the items, clauses and any other information
                        to the quote.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">4.</span>
                      <span class="txt">
                        Select your preferred quote template and click send. The
                        proposal is automatically generated and sent to the
                        contact.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="num">5.</span>
                      <span class="txt">
                        Automated follow-up emails and reminders are scheduled.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="faq-item">
                <button class="btn btn-faq text-start w-100 position-relative">
                  How does <span class="highlight">Osmos CRM</span> help?
                  <span class="faq-icon d-inline-block position-absolute top-50">
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle w-100"></span>
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle h-100"></span>
                  </span>
                </button>
                <div class="collapse faq-content">
                  <div class="inner-faq-content">
                    <p class="mb-0 pb-2">
                      Osmos CRM is a cloud-based customer relationship
                      management (CRM) software that helps teams track and
                      manage their customer relationships and quotes online.
                    </p>
                    <p class="mb-0 pb-2">
                      Osmos provides teams with a central database to store all
                      their proposals and customer information. The software
                      includes tools to help teams track their interactions with
                      customers, manage their pipeline of deals, and close more
                      sales.
                    </p>
                    <p class="mb-0 pb-2">
                      <strong>Contact management:</strong> Osmos provides users
                      with a central place to store and manage all their
                      customer and prospect contact information.
                    </p>
                    <p class="mb-0 pb-2">
                      <strong>Opportunity management:</strong> Osmos helps users
                      track and manage their sales opportunities, from initial
                      contact to closed deal.
                    </p>
                    <p class="mb-0 pb-2">
                      <strong>Pipeline management:</strong> Osmos CRM provides
                      users with a visual representation of their sales
                      pipeline, so they can see where each opportunity is at in
                      the sales process.
                    </p>
                  </div>
                </div>
              </div>

              <div class="faq-item">
                <button class="btn btn-faq text-start w-100 position-relative">
                  How does <span class="highlight">Osmos CRM</span> help sales
                  teams manage their pipeline?
                  <span class="faq-icon d-inline-block position-absolute top-50">
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle w-100"></span>
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle h-100"></span>
                  </span>
                </button>
                <div class="collapse faq-content">
                  <div class="inner-faq-content">
                    <p class="mb-0 pb-2">
                      Osmos CRM is a cloud-based customer relationship
                      management (CRM) solution that helps teams manage their
                      pipeline. The software includes features for contact
                      management, deal tracking, and opportunity management.
                      Osmos CRM also offers a mobile app* for iOS and Android
                      devices.
                    </p>
                  </div>
                </div>
              </div>

              <div class="faq-item">
                <button class="btn btn-faq text-start w-100 position-relative">
                  What are some of the integrations that{" "}
                  <span class="highlight">Osmos</span> offers?
                  <span class="faq-icon d-inline-block position-absolute top-50">
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle w-100"></span>
                    <span class="d-inline-block position-absolute top-50 start-50 translate-middle h-100"></span>
                  </span>
                </button>
                <div class="collapse faq-content">
                  <div class="inner-faq-content">
                    <p class="mb-0 pb-2">
                      Osmos offers a number of integrations that can be
                      extremely beneficial for businesses.{" "}
                      <strong>These integrations include:</strong>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="dott"></span>
                      <span class="txt">
                        <strong>Salesforce:</strong> This integration allows
                        businesses to sync their Osmos CRM account with their
                        Salesforce account. This can be extremely beneficial as
                        it allows businesses to manage their customer
                        relationships and quotes (CPQ) in one place.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="dott"></span>
                      <span class="txt">
                        <strong>QuickBooks:</strong> The QuickBooks integration
                        allows businesses to sync their financial data with
                        their Osmos CRM account, specifically their quotes and
                        proposals. This can be extremely helpful in keeping
                        track of income.
                      </span>
                    </p>
                    <p class="mb-0 pb-2 d-flex">
                      <span class="dott"></span>
                      <span class="txt">
                        <strong>Google Calendar:</strong> The Google Calendar
                        integration allows businesses to sync their calendar
                        with their Osmos. This can be extremely helpful in
                        keeping track of appointments and meetings.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 pic-content">
              <div class="pic mx-auto">
                <img
                  src="img/faq-pic.png"
                  alt="faq"
                  class="img-fluid"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section pb-section">
        <div class="container">
          <div class="row justify-content-center text-center pb-md-4 pb-3">
            <div class="heading mb-4 mx-auto mx-width">
              <h2>
                <span class="highlight">Trusted by REAL businesses </span>{" "}
                <br />
                like yours!
              </h2>
            </div>
          </div>
          <div class="row partners-container justify-content-center align-items-center">
            <div class="col-xl-3 col-md-4 col-sm-6 col-12">
              <div class="pic mx-auto text-center mb-4">
                <img
                  src="img/partygames.html"
                  loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
    </>
  );
};

export default Home;
