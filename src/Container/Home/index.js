
import {Banner, BigProductSection, BigCardSection, ProductCard} from "../../Component"
import { BigData, ManData, Womendata, ProductData} from "./data";
import card6 from "../../img/card6.png"

function Home() {
  return (
    <div >
      <Banner />
      <div className="">
      <BigProductSection data={BigData}/>
      <BigCardSection name="Woman" data={Womendata}/>
      <BigCardSection name="Man" data={ManData}/>
      <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="card-title">
              <h1 style={{ fontWeight: 900 }}>TO GET and TO GIFT</h1>
            </div>
            <div class="row pd-tb-2 prod-card-section">
              {
                ProductData.map((item, i) => (
                  <ProductCard data={item}/>
                ))
              }
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
