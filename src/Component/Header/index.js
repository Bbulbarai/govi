import Logo from "../../img/logo.png";
import Heart from "../../img/heart.png";
import Basket from "../../img/basket.png";
import Search from "../../img/search.png";

function Header() {
  return (
    <header>
          <div className="header">
            <div className="col-4">
              <ul>
                <li>
                  <a>
                    Women
                  </a>
                </li>
                <li>
                  <a>
                    Man
                  </a>
                </li>
                <li>
                  <a>
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    Accressories
                  </a>
                </li>
                <li>
                  <a>
                    Organic
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <div className="logo-container">
                <img className="logo" src={Logo} alt=""/>
              </div>
            </div>
            <div className="col-4">
              <div className="search-container">
                <li>
                  <img src={Search} alt=""/>
                </li>
                <li>
                  <input type="text" className="form-control search-input" />
                </li>
                <li>
                  <img src={Heart} alt="" />
                </li>
                <li>
                  <img src={Basket} alt="" />
                </li>
              </div>
            </div>
          </div>
        </header>
  );
}

export default Header;
