import BannerImg from "../../img/banner.png";

function Banner() {
  return (
    <section className="banner-section">
    <img src={BannerImg} />
    <div className="centered">
      <span className="first-txt">SUMMER</span>
      <br />
      <span className='sub-txt'>Sale</span>
    </div>
   </section>
  );
}

export default Banner;

