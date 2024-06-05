import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const faq = () => {

    return (
        <div className="ltn__faq-area mb-100">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="ltn__faq-inner ltn__faq-inner-2">
    
                    <div className="card">
                            <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                           What is the office location?
                            </h6>
                            <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                            <div className="card-body">
                            <a href="https://maps.app.goo.gl/DReTbwvEuxxU8XAo8" target='_blank'>Tolani’s Ajanla Street, Off Obafemi Awolowo way, Oke-Ado, Ibadan.</a>
                            </div>
                            </div>
                        </div>
                     
                        {/* card */}
                        <div className="card">
                            <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                            What is the standard accommodation process?
                            </h6>
                            <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                            <div className="card-body">
                            <ul>
                            <li>Inspection of the property (if necessary)</li>
                            <li>Filling of application form (prospective tenant & Guarantor)</li>
                             <li>Payment into company’s account</li>
                             <li> Signing of Inventory</li>
                             <li>Signing of Agreements</li>
                            </ul> 
                            </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="card">
                            <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true"> 
                             What is the percentage for total package
                            </h6>
                            <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                            <div className="card-body">
                             <p>The percentage is 40% which are</p>
                             <ul>
                                <li>10% for Caution</li>
                                <li>10% for Agreement/legal</li>
                                <li>20% for Commission</li>
                             </ul>
                            </div>
                            </div>
                        </div>                          
                        {/* card */}
                        <div className="card">
                            <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                            What are the modes of payment?
                            </h6>
                            <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                            <div className="card-body">
                            <ul>
                                <li>Bank deposit</li>
                                <li>Online transfer</li>
                               
                             </ul>
                            </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="card">
                            <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                            What is/are the designated account details?
                            </h6>
                            <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                            <div className="card-body">
                            <ul>
                                <li>Account Name: Adetokunbo James</li>
                                <li>Account Number: 6052275370</li>
                                <li>Bank Name: FIDELITY</li>
                             </ul>
                            </div>
                            </div>
                        </div>
                      </div>
                      
                       
                  </div>  
                  </div>  
                  </div>  
                  </div>  
        )  
}

export default faq
             
       
           
