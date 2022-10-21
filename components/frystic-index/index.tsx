
 function CryptoPrice(){

      return (
        <>

        <div className="crypto-price-box">
        <div>
          <table>
            <thead>
              <tr>
                <th />
                <th>Coin</th>
                <th>Price</th>
                <th>24h</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="crypto-icon" id="btcLogo" />
                </td>
                <td>
                  <strong>Bitcoin</strong>
                </td>
                <td>
                  <span id="btcPrice">loading...</span>
                </td>
                <td>
                  <span id="btcChange">loading...</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="crypto-icon" id="ethLogo" />
                </td>
                <td>
                  <strong>Ethereum</strong>
                </td>
                <td>
                  <span id="ethPrice">loading...</span>
                </td>
                <td>
                  <span id="ethChange">loading...</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="crypto-icon" id="dogeLogo" />
                </td>
                <td>
                  <strong>Binance</strong>
                </td>
                <td>
                  <span id="dogePrice">loading...</span>
                </td>
                <td>
                  <span id="dogeChange">loading...</span>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <span className="crypto-icon" id="shibLogo" />
                </td>
                <td>
                  <strong>Polygon</strong>
                </td>
                <td>
                  <span id="shibPrice">loading...</span>
                </td>
                <td>
                  <span id="shibChange">loading...</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <p style="padding-top: 5px;">Updated: <span id="btcTime">...loading...</span></p>*/}
      </div>
      {/*crypto price ending*/}
        </>
      )
 };


export default function FRYSTIC_index(){
return (
    <>
  <div className="center-container">
    <div className="flex-top-box-container">


      <CryptoPrice />


      <div className="swiper main-slider">
        <div className="swiper-wrapper">
          {/* MAKE IT DYNAMIC */}
          <a href="" />
          <div className="swiper-slide">
            <img src="/topslider/1.png" alt="" />
          </div>
          <a href="" />
          <div className="swiper-slide">
            <img src="/topslider/2.png" alt="" />
          </div>
          <a href="" />
          <div className="swiper-slide">
            <img src="/topslider/3.png" alt="" />
          </div>
          <a href="" />
          <div className="swiper-slide">
            <img src="/topslider/4.png" alt="" />
          </div>
          <a href="" />
          <div className="swiper-slide">
            <img src="/topslider/5.png" alt="" />
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
    {/* flex top box div */}
    {/* 
  Hi dear developer!
  filters are working with JS and Class names :
  3rd class (.scr-wrp01) is the wrapper spesific ID to be find in page and the 4th (like .sport) is the product category!
  example : 
  <div class="swiper-slide card scr-wrp01 sport">         
*/}
    <div className="wrapper-title-filter-container">
      <p className="wrapper-title">Most viewed</p>
      <div id="BtnContainer01" className="btnContainer">
        <button className="btn01 active" onclick="filterSelection('all')">
          All
        </button>
        <button className="btn01" onclick="filterSelection('music')">
          Music
        </button>
        <button className="btn01" onclick="filterSelection('book')">
          Books &amp; Magazines
        </button>
        <button className="btn01" onclick="filterSelection('sport')">
          Sport
        </button>
        <button className="btn01" onclick="filterSelection('trade')">
          Trade
        </button>
        <button className="btn01" onclick="filterSelection('anime')">
          Anime &amp; Comics
        </button>
        <button className="btn01" onclick="filterSelection('game')">
          Game
        </button>
        <button className="btn01" onclick="filterSelection('stream')">
          Stream
        </button>
        <button className="btn01" onclick="filterSelection('meditation')">
          Education
        </button>
        <button className="btn01" onclick="filterSelection('meditation')">
          Meditation
        </button>
      </div>
    </div>
    <div id="scr01" className="swiper scrolling-wrapper">
      <div className="swiper-wrapper">
        {/* MAKE IT DYNAMIC */}
        <div className="swiper-slide card filter01 sport">
          <img className="product-img" src="product-img/8.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 game">
          <img className="product-img" src="product-img/9.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 trade">
          <img className="product-img" src="product-img/2.gif" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 education">
          <img className="product-img" src="product-img/2.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 music">
          <img className="product-img" src="product-img/3.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 education">
          <img className="product-img" src="product-img/4.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 meditation">
          <img className="product-img" src="product-img/5.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 game">
          <img className="product-img" src="product-img/10.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 trade">
          <img className="product-img" src="product-img/11.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 trade">
          <img className="product-img" src="product-img/12.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 meditation">
          <img className="product-img" src="product-img/6.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 trade">
          <img className="product-img" src="product-img/7.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 education">
          <img className="product-img" src="product-img/16.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter01 stream">
          <img className="product-img" src="product-img/1.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide" />
      </div>
    </div>
    <div className="wrapper-title-filter-container">
      <p className="wrapper-title">Featured products</p>
    </div>
    <div id="scr01" className="swiper scrolling-wrapper">
      <div className="swiper-wrapper">
        {/* MAKE IT DYNAMIC */}
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/11.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/12.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 meditation">
          <img className="product-img" src="product-img/6.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/7.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 education">
          <img className="product-img" src="product-img/16.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 stream">
          <img className="product-img" src="product-img/1.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 sport">
          <img className="product-img" src="product-img/8.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 game">
          <img className="product-img" src="product-img/9.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/2.gif" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 education">
          <img className="product-img" src="product-img/2.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide" />
      </div>
    </div>
    <div className="wrapper-title-filter-container">
      <a href="">
        <img className="custom-ad" src="topslider/zzz2.png" />
      </a>
    </div>
    <div className="wrapper-title-filter-container">
      <p className="wrapper-title">For you</p>
    </div>
    <div id="scr01" className="swiper scrolling-wrapper">
      <div className="swiper-wrapper">
        {/* MAKE IT DYNAMIC */}
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/11.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/12.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 meditation">
          <img className="product-img" src="product-img/6.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/7.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 education">
          <img className="product-img" src="product-img/16.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 stream">
          <img className="product-img" src="product-img/1.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 sport">
          <img className="product-img" src="product-img/8.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 game">
          <img className="product-img" src="product-img/9.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 trade">
          <img className="product-img" src="product-img/2.gif" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide card filter02 education">
          <img className="product-img" src="product-img/2.png" />
          <div className="product-info-container">
            <p className="product-slide-category">Sports</p>
            <p className="product-slide-title">The Product Title</p>
            <p className="product-slide-price">$30.4</p>
          </div>
        </div>
        <div className="swiper-slide" />
      </div>
    </div>
    <div className="wrapper-title-filter-container">
      <img style={{ marginRight: 20, width: "50%" }} src="topslider/zzz3.png" />
      <img style={{ marginRight: 20, width: "50%" }} src="topslider/zzz4.png" />
    </div>
  </div>
  {/* Center container ends */}
  
</>

)
}