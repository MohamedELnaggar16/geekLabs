import React, { useEffect } from 'react'
import $ from 'jquery'

export default function Dashboard() {


        
    useEffect(() => {
        
      let x=0;

          $('#tableToggle').click(function(){
            if (x===0){
            $('#hiddenParag').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag').slideUp(500)
              x=0;
            }
              });

          $('#tableToggle2').click(function(){
            if (x===0){
            $('#hiddenParag2').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag2').slideUp(500)
              x=0;
            }
              });
              
          $('#tableToggle3').click(function(){
            if (x===0){
            $('#hiddenParag3').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag3').slideUp(500)
              x=0;
            }
              });
              
          $('#tableToggle4').click(function(){
            if (x===0){
            $('#hiddenParag4').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag4').slideUp(500)
              x=0;
            }
              });
              
          $('#tableToggle5').click(function(){
            if (x===0){
            $('#hiddenParag5').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag5').slideUp(500)
              x=0;
            }
              });
              
          $('#tableToggle6').click(function(){
            if (x===0){
            $('#hiddenParag6').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag6').slideUp(500)
              x=0;
            }
              });
              
          $('#tableToggle7').click(function(){
            if (x===0){
            $('#hiddenParag7').slideDown(500)
          x=1;
        }
            else if (x===1){
              $('#hiddenParag7').slideUp(500)
              x=0;
            }
              });
    


    }, [])
    

  return (
    <>
    
      <div className="container-fluid pt-3 p-5 ">
          <div className="row pb-5 ">
              <div className="col-md-7 ms-auto">
                <div className='d-flex justify-content-start align-items-center'>
                  <h1 className='pe-5 brdr headingFont'>ALERTS</h1>
                    <input type="text" placeholder='Search By...' className='form-control'/> 
                    
                    <div className='position-relative'>
                        <i className="fa-solid fa-bell fs-3 mx-3 alertColor"></i>
                        <div className='alertNotification position-absolute text-center d-flex justify-content-center align-items-center top-0 start-50'>
                          <div>6</div>
                        </div>
                    </div>
                  
                </div>
                <div className='alertFont'>

                <div id='tableToggle' className="row table mt-5 ">
                        <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>AMZN</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='lowRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>Low Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag'>
                    <h6 >$AMZIN just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                  <div id='tableToggle2' className="row table">
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>TSLA</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='highRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>High Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag2'>
                    <h6 >$TSLA just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                  <div id='tableToggle3' className="row table">
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>ABQQ</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='highRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>High Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag3'>
                    <h6 >$ABBQ just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                  <div id='tableToggle4' className="row table">
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>MSFT</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='lowRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>Low Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag4'>
                    <h6 >$MSFT just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                  <div id='tableToggle5' className="row table">
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>PYPL</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='lowRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>Low Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag5'>
                    <h6 >$PYPL just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                  <div id='tableToggle6' className="row table">
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>ABQQ</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='highRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>High Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag6'>
                    <h6 >$ABBQ just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                  <div id='tableToggle7' className="row table">
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2">
                    <i className="fa-solid fa-money-check-dollar fs-1"></i> <div className='text-white brdr2'>ABQQ</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-folder-open fs-1"></i> <div className='text-white brdr2'>200</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-arrow-trend-up fs-1"></i> <div className='highRisk brdr2'>-0.25%</div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-around align-items-center p-2 ">
                    <i className="fa-solid fa-money-bill fs-1"></i> <div className='text-white'>High Risk</div>
                    </div>

                  </div>
                  <div id='hiddenParag7'>
                    <h6 >$ABBQ just announced an aquistion of $NFLS at $200 B.</h6>
                    <p>This is an <a href="geeklabs.com">arbitrage opportunity</a>, with the max gain being X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is% and therefore the recommended play is <a href="geeklabs.com">long/short</a>  $ABC</p>
                  </div>
                </div>
              
          
              </div>

              <div className="col-md-4 filterBG pt-3 filterFont">
                    <h4 className='text-center headingFont'>Filters</h4>
                    <div className='d-flex justify-content-between '>
                      <div className='fs-6 text-muted fw-bold'>Filters Applied</div>
                      <div className='fs-6'> Clear All</div>

                    </div>
                    <input type="text" placeholder='' className='form-control'/> 
                    <div className='greyBG mt-3 p-3'>
                        <h5 className='headingFont'>Stock</h5>
                        <input type="text" placeholder='Ticker' className='form-control'/> 
                        <h5 className='ps-3'><i className="fa-solid fa-caret-down"></i> Industry</h5>
                    <div className='d-flex justify-content-between '>
                          <div>
                            <ul>
                              <li  className='brdrLeft'> <i className="fa-solid fa-heart-pulse"></i> Health care</li>
                              <li  className='brdrLeft'> <i className="fa-solid fa-recycle"></i> Materials</li>
                              <li  className='brdrLeft'> <i className="fa-solid fa-bolt-lightning"></i> Energy</li>
                              <li  className='brdrLeft'><i className="fa-regular fa-credit-card"></i> Consumer Discretionary</li>
                              <li  className='brdrLeft'><i className="fa-solid fa-cart-shopping"></i> Consumer Staples</li>
                              <li  className='brdrLeft'><i className="fa-solid fa-house"></i> Real Estate</li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                            <li className='brdrLeft'> <i className="fa-solid fa-wrench"></i> IT</li>
                            <li className='brdrLeft'><i className="fa-solid fa-comments pe-1"></i>Communication</li>
                            <li className='brdrLeft'> <i className="fa-solid fa-screwdriver-wrench"></i> Utilities</li>
                            <li className='brdrLeft'><i className="fa-solid fa-sack-dollar"></i> Financials</li>

                            </ul>
                          </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div>
                          <h6> <i className="fa-solid fa-caret-down"></i> Market Cap</h6>
                          <ul>
                            <li className='fSize'> <input type="radio" name="" id="" /> Micro</li>
                            <li className='fSize'> <input type="radio" name="" id="" /> Small</li>
                            <li className='fSize'> <input type="radio" name="" id="" /> Large</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className='ps-3'> <i className="fa-solid fa-caret-down"></i> Risk Level</h6>
                          <ul>
                          <li className='fSize'> <input type="radio" name="" id="" /> Low Risk</li>
                          <li className='fSize'> <input type="radio" name="" id="" /> Mid Risk</li>
                          <li className='fSize'> <input type="radio" name="" id="" /> Low Risk</li>
                          </ul>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                      <div>
                      
                          <h6 className='text-center'>Strategy</h6>
                          <select name="" id="" multiple>
                            <option value="Big Option Buys">Big Option Buys</option>
                            <option value="Merger Arbitrage">Merger Arbitrage</option>
                            <option value="Short Reports">Short Reports</option>
                          </select>
                      
                      </div>
                      <div>
                      
                      <h6 className='text-center'>Asset</h6>
                      <select name="" id="" multiple >
                        <option value="Stock">Stock</option>
                        <option value="Options">Options</option>
                        <option value="Futures">Futures</option>
                      </select> 
                  
                  </div>
                    </div>
                  
                    </div>
                    <div className='py-2 text-center'>   <button className='btn btn-primary btnEdit '> Apply</button></div>
                  
              </div>
          </div>

      </div>
    
    </>
  )
}
