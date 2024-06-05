import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

function Footer  () {

const [fields, setFields] = useState("");
const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };


  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_tbknuui", templateId, variables)
      .then((res) => {
        setStatus(true);
        setFields("");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(
        (err) => {}
   
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_mdm12yx";
    const variables = {
      message: fields.email,
      from_name: "Newsletter",
      reply_to: fields.email,
    };
    sendFeedback(templateId, variables);
  };

	return (
		<footer className="ltn__footer-area  ">
		  <div className="footer-top-area  section-bg-2 plr--5">
			<div className="container-fluid">
			  <div className="row">
				<div className="col-xl-3 col-md-6 col-sm-6 col-12">
				  <div className="footer-widget footer-about-widget">
					<div className="footer-logo">
					  <div className="site-logo">
						{/* <img src={publicUrl+"assets/img/logo.png"} style={{width: "30%"}} alt="Logo" /> */}
					  </div>
					</div>
				 
					<div className="footer-address">
					  <ul>
						<li>
						  <div className="footer-address-icon">
							<i className="icon-placeholder" />
						  </div>
						  <div className="footer-address-info">
							<p> Tolani’s Ajanla Street, Off Obafemi Awolowo way, Oke-Ado, Ibadan.</p>
						  </div>
						</li>
						<li>
						  <div className="footer-address-icon">
							<i className="icon-call" />
						  </div>
						  <div className="footer-address-info">
							<p><a href="tel:+2348036215324">+2348036215324</a></p>
						  </div>
						</li>
						<li>
						  <div className="footer-address-icon">
							<i className="icon-mail" />
						  </div>
						  <div className="footer-address-info">
							<p><a href="tokunbojames@yahoo.com"> tokunbojames@yahoo.com</a></p>
						  </div>
						</li>
					  </ul>
					</div>
					<div className="ltn__social-media mt-20">
						<Social />
					</div>
				  </div>
				</div>
			  
			 
				<div className="col-xl-2 col-md-6 col-sm-6 col-12">
				  <div className="footer-widget footer-menu-widget clearfix">
				  
					<div className="footer-menu go-top">
					  <ul>
						<li><Link to="/login">Privacy Policy</Link></li>
						<li><Link to="/my-account">Terms of Uses</Link></li>
					  
					  </ul>
					</div>
				  </div>
				</div>
				<div className="col-xl-3 col-md-6 col-sm-12 col-12">
				  <div className="footer-widget footer-newsletter-widget">
					<h4 className="footer-title">Newsletter</h4>
					<p>Subscribe to our weekly Newsletter and receive updates via email.</p>
					<div className="footer-newsletter">
					  <form action="#">
						<input type="email" name="email"  placeholder="Email*" onChange={handleChange}
                    required />
						<div className="btn-wrapper">
						  <button className="theme-btn-1 btn" onSubmit={handleSubmit} type="submit"><i className="fas fa-location-arrow" /></button>
						</div>
					  </form>
					</div>
				
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <Copyright />
		</footer>
)
}

        
    



export default Footer