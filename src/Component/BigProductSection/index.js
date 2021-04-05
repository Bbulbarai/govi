function BigProductSection({data}) {
  return (
    <div className="col-md-12 col-lg-12 ">
    <div className="row" style={{ padding: "3rem" }}>
      <div className="col-md-5 col-lg-5">
        <div className="flexbox">
        <h2>WINTER SPICE 2020</h2>
        <span>Infusion of summer pieces and cashmere silk blends.</span>
        <button>SHOP NOW</button>
        </div>
      </div>
      <div className="col-md-7 col-lg-7" >
        <div className="lightbox">
          <div className="row">
            <div className="col-8">
              <img
              className="w-100"
              src={data[0].img}
            />
            </div>
            <div className="col-4">
              <img
              className="w-100"
              src={data[1].img}
              />
            <img
            className="w-100"
            src={data[2].img}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BigProductSection;
