import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer-section main-section bg-color">
        <div class="container">
          <div class="row mb-5">
            <div class="footer-links-container col-lg-9 col-12 row">
              <div class="col-md-4 col-sm-6 col-12 links-container text-center text-sm-start">
                <p class="title">STP</p>
                <ul class="list-unstyled">
                  <li>
                    <a href="index.html">About</a>
                  </li>
                  <li>
                    <a href="CRM-hybrid.html">Home</a>
                  </li>
                  <li>
                    <a href="equote.html">Servieces</a>
                  </li>
                  <li>
                    <a href="aboutus.html">Blog</a>
                  </li>
                  <li>
                    <a href="https://osmoserp.com/login" target="_blank">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-6 col-12 pt-sm-0 pt-3 links-container text-center text-sm-start">
                <p class="title">Resources</p>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://help.osmoscloud.com/" target="_blank">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/osmoscloud"
                      target="_blank"
                    >
                      Video Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="https://workshops.osmoscloud.com/" target="_blank">
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a href="https://quiz.osmoscloud.com/" target="_blank">
                      Quiz
                    </a>
                  </li>
                  <li>
                    <a href="demo.html" target="_blank">
                      Demos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.callbacktracker.com/p/72b"
                      target="_blank"
                    >
                      Sales
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-6 pt-md-0 pt-3 col-12 links-container text-center text-sm-start">
                <p class="title">SERVICES</p>
                <ul class="list-unstyled">
                  <li>
                    <a href="Supply-Chain.html">- Software Solutions</a>
                  </li>
                  <li>
                    <a href="Distributors.html">
                      {" "}
                      - ICT Training & Skill Enhancements
                    </a>
                  </li>
                  <li>
                    <a href="Service-Providers.html"> - Network Solutions</a>
                  </li>
                  <li>
                    <a href="Rentals.html">
                      {" "}
                      - Business Process Re-Engineering
                    </a>
                  </li>
                  <li>
                    <a href="Contractors.html">
                      {" "}
                      - Company Process Automation - Website Design &
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="Contractors.html">
                      - Website Design & Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-form-container pt-lg-0 pt-3 col-lg-3 col-12 text-center text-sm-start">
              <p class="title">Contact Info</p>
              <div class id="subscribemessage"></div>

              <form
                action="https://www.osmoscloud.com/post"
                id="subscriptionform"
              >
                <p class="note">Subscribe to our Newsletter</p>
                <div class="row mb-3"></div>
                <div class="row mb-2">
                  <div class="col-12">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <input type="submit" class="btn w-100" value="SUBSCRIBE" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="d-flex btm-links justify-content-center text-center mb-4">
            <a href="privacyPolicy.html">PRIVACY POLICY</a>
            <a href="termsOfService.html">TERMS OF SERVICE</a>
            <a href="disclosures.html">DISCLOSURES</a>
          </div>
          <div class="d-flex flex-lg-nowrap justify-content-center flex-wrap social align-items-center">
            <div class="col-lg-4 col-md-6 col-12 order-3 order-md-1 pt-4 pt-md-0">
              <p class="mb-0 copyrights text-md-start text-center">
                ©COPYRIGHT{" "}
                <script type="3d02a40b6e660374c0e2fc5d-text/javascript">
                  document.write(new Date().getFullYear())
                </script>{" "}
                Suretechpoint
              </p>
            </div>

            <div class="col-lg-4 col-md-6 col-12 d-flex social-links justify-content-lg-end justify-content-center order-2 order-md-3">
              <a
                target="_blank"
                class="d-flex justify-content-center align-items-center"
                href="https://twitter.com/osmoscloud"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                class="d-flex justify-content-center align-items-center"
                href="https://www.facebook.com/osmoscloud"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                class="d-flex justify-content-center align-items-center"
                href="https://www.linkedin.com/company/osmoscloud/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                class="d-flex justify-content-center align-items-center"
                href="https://www.youtube.com/osmoscloud"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
