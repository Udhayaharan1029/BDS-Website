import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCard1 from './BlueticDraftIMGS/AboutImg2.jpg';
import AboutCard2 from './BlueticDraftIMGS/AboutImg1.jpeg';
function About() {
  return (
    <div>
      
    <div className="container-fluid">
       <div className="row">
    
      <div className="col-md-6 AboutContainer">
    <div className="left">
    <img src={AboutCard1} alt='' style={{width:'100%'}}/>
    </div>
    <div className="right">
    <img src={AboutCard2} alt='' style={{width:'100%'}}/>
    </div>
      </div>
      <div className="col-md-6">
        <h3 style={{display:'inline-grid'}}>
          <span style={{color:"#2A363B",fontWeight:'800'}}>
            WELOCME TO
            </span>
            <span style={{color:"#f2c014",fontWeight:'800'}}>
            &nbsp; BLUETIC DRAFT SCALE
            </span>
        </h3>
        <p style={{marginTop:'21px',letterSpacing:'.7em',display:'grid'}}>ABOUT US
        <span style={{width:'12%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
        </p>
        <div style={{marginTop:'65px'}}></div>
        <p style={{textAlign:'left',marginBottom:'24px'}}>Welcome to Bluetic Draftscale Engineering Private Limited, a pioneering company founded by Ajay and Sindhuja in August 2023. Specializing in structural steel detailing, we merge precision craftsmanship with innovative solutions. Our dedicated team ensures exceptional quality, meeting and exceeding client expectations every step of the way. Join us as we shape the landscape of engineering excellence together.</p>
        <p style={{textAlign:'left',marginBottom:'24px'}}>
        The amalgamation of experience in engineering and customer service gives our company an edge of perfection. This advantage has ensured consistent growth for us and today we have clients in top international markets.
        </p>
        <div style={{marginTop:'60px'}}></div>
        {/* <h4>Our Moto</h4> */}
        <h4>
          <span style={{color:"#2A363B"}}>
          Our
            </span>
            <span style={{color:"#f2c014"}}>
            &nbsp;  Moto
            </span>
        </h4>
        <div style={{marginTop:'25px'}}></div>
        <p style={{textAlign:'left'}}>
        We deliver reliable solutions to the most complex structural challenges with 100% accuracy.
        </p>
      </div>
 
  </div>

    


    </div>
    </div>

  )
}

export default About;