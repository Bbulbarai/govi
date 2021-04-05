function BigCardSection({data, name}) {
    return (
        <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="big-cards-title" >
          <h1 style={{ fontWeight: 900 }}>{name}</h1>
        </div>
        <div class="row pd-tb-2 big-card-section">
            {
                data.map((item, i) => (
                    <div class="col-md-4 col-sm-6 col-6">
                    {
                        i==1 ?  <div class="big-cardb-title">
                        <h1>{name}</h1>
                      </div> : null
                    }
                    <img src={item.img} class="w-100"/>
                  </div>
                ))
            }
        </div>
      </div>
    );
  }
  
  export default BigCardSection;
  