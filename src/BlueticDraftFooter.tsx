import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
function BlueticDraftFooter() {
  return (
    <div>
      <footer style={{background:'#1A2421',width:'100%'}}>
        <div className='container' style={{background:'#1A2421',width:'100%',paddingRight:'15px',paddingLeft:'15px',marginRight:'auto',marginLeft:"auto",paddingTop:'50px',paddingBottom:'50px'}}>
          <div className='row'style={{width:'100%'}}>
              <div className='col-md-6 ' >
                <div>
                  <p style={{fontSize:'18px',color:'#fff',textAlign:'left'}} className='paraStyle'>
                    <ul className='ICASstyles' style={{ listStyleType: "none" }}>
                      <li><i className="bi bi-emoji-smile-fill"></i> Having a strong customer base in developed countries, we are poised for fast-paced growth through spreading to newer geographies and expanding client base in existing markets.</li>
                      <li><i className="bi bi-emoji-smile-fill"></i> With cutting-edge technologies, an experienced and dedicated team, and a passion for excellence.</li>
                      <li><i className="bi bi-emoji-smile-fill"></i> We deliver the best structural solutions even in the most challenging scenario. Customer satisfaction is our ultimate goal.</li>
                    </ul>
                 
                   
                  </p>
                </div>
              </div>
              <div className='col-md-6' >
                <div>
                <h3>
              <span style={{color:"#fff"}}>
              Contact
                </span>
                <span style={{color:"#f2c014"}}>
                &nbsp; US
                </span>
            </h3>
            <ul className='FooterLists'>
              <li>
                <div style={{display:'flex'}}>
                <i className="bi bi-geo-alt-fill"></i>
                  <p style={{marginLeft:'10px'}}>
                  Site No 1, 1st Floor, 1st C Basapura Main Road, Manjun Electronics City, Bangalore South, Bangalore, KA 560100, India, Karnataka, 560100.
                  </p>
                </div>
              </li>
              <li>
                <div style={{display:'flex'}}>
                <i className="bi bi-telephone-fill" style={{transform: 'scaleX(-1)'}}></i>
                  <p style={{marginLeft:'10px'}}>
                  +919988776655
                  </p>
                </div>
              </li>
              <li>
                <div style={{display:'flex'}}>
                <i className="bi bi-envelope-fill"></i>
                  <p style={{marginLeft:'10px'}}>
                    <a href='mailto:sales@draftscale.com' className='MailTo'> sales@draftscale.com</a>
                 
                  </p>
                </div>
              </li>
            </ul>
                </div>
              </div>
              {/* <div className='col-md-6 col-lg-4'>
              <div>
                <h3>
              <span style={{color:"#fff"}}>
              SUBSCRIBE
                </span>
                <span style={{color:"#f2c014"}}>
                &nbsp; US
                </span>
            </h3>
            <p style={{color:'#fff',textAlign:'left'}}>
            Stay updated with our latest news. We promise not to spam!
            </p>
            <form >
            <div>
            <input type="text" className="form-control" id="validationTooltip01" placeholder="Your email" />
            </div>
            </form>
                </div>
              </div> */}
          </div>

        </div>
      </footer>
      <div style={{background:'#000000',display:'flex',justifyContent:'space-evenly',padding:'10px'}}>
        <div style={{textAlign:'center',color:'#fff',fontSize:'12px',paddingTop:'6PX'}}>
        <i className="bi bi-c-circle" style={{marginRight:'5px'}}></i>
              Copyright <b>BLUETIC DRAFTSCALE ENGINEERING PRIVATE LIMITED</b>
          </div> 

          <div className='FooterIcon' style={{gap:'30px'}}>
            <div>    <i className="bi bi-facebook" ></i></div>
            <div><i className="bi bi-twitter-x" ></i></div>
            <div> <i className="bi bi-instagram" ></i></div>
            <div> <i className="bi bi-youtube" ></i></div> 
                </div>
      </div>
    </div>
  )
}

export default BlueticDraftFooter;
