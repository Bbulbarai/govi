import Facebook from "../../img/facebook.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import youtube from "../../img/youtube.png";

function Footer() {
  return (
    <footer>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10 big-footer">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <ul>
                        <span>ABOUT US</span>
                        <li>
                          Our History
                        </li>
                        <li>
                          Product Care
                        </li>
                        <li>
                          Store Location
                        </li>
                        <li>
                          Sustainability
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <ul>
                        <span>POLICY</span>
                        <li>
                          Shipping & Return Policy
                        </li>
                        <li>
                          Privacy Policy
                        </li>
                        <li>
                          Impressum
                        </li>
                        <li>
                          Return Portal
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <ul>
                        <span>CUSTOMER SERVICE</span>
                        <li>
                          General Terms and Conditions
                        </li>
                        <li>
                          Contact Us
                        </li>
                        <li>
                          News
                        </li>
                        <li>
                          FAQ
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <ul>
                        <span>CUSTOMER SERVICE</span>
                        <li>
                          General Terms and Conditions
                        </li>
                        <li>
                          Contact Us
                        </li>
                        <li>
                          News
                        </li>
                        <li>
                          FAQ
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                  <ul>
                    <span>FOLLOW US</span>
                    <li>
                      <img src={Facebook} />
                    </li>
                    <li>
                      <img src={Instagram} />
                    </li>
                    <li>
                      <img src={Twitter} />
                    </li>
                    <li>
                      <img src={youtube} />
                    </li>
                  </ul>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 small-footer">
                  <span>All content Copyright © 2020 GOBI Cashmere</span>
                </div>
              </div>
            </div>
          </footer>
  );
}

export default Footer;
