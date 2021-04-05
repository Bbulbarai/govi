function ProductCard({data}) {
    return (
        <div class="col-md-3 col-sm-3 col-6" style={{ paddingBottom: '20px' }}>
        <div style={{ position: 'relative' }}>
            {
                data.label ? <span class="prod-label">{data.label}</span> : null
            }
          
        <img src={data.img} class="w-100 prod-image"/>
        <span class="prod-like">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
        </span>
        </div>
        
        <span class="prod-title">{data.title}</span>
        
        <div class="prod-radio-container">
        {
            data.colors ? 
            data.colors.map((item, i) => (
                <div class="prod-radio" style={{ backgroundColor: item.code }}/>
            )) : null
        }
        {
            data.colors.length !== 0 && data.colorCount ? <span>{`+${data.colorCount}`}</span> : null
        }
        </div>
        {
            data.colors.length === 0 ? <span class="prod-color">{`+${data.colorCount} colors`}</span> : null
        }
        {
            data.price ? <div class="price-container">
            <s>{`$ ${data.price}`}</s>
            <span>{`$ ${data.discountPrice}`}</span>
          </div> : null
        }
      </div>
    );
  }
  
  export default ProductCard;
  