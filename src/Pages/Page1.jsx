import React from "react";
import  "./Styles/FSHR.css";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

const Page1=()=>{
    return(
        <>
          <div className="fshr-style1">
            <div className="container fshr-style2">
            <div className="row">
               <div className="col-lg-6">
                  <h2>Five Start Hotal Registration in india</h2>
                  <div >
                     <div>
                        <span className="fshr-style2-icon"><BsCheck2Circle /></span>
                        <span className="fshr-style2-1">Free Expert Assistance</span>
                     </div>
                     <div>
                        <span className="fshr-style2-icon"><BsCheck2Circle /></span>
                        <span className="fshr-style2-1">Money-Back Garantee</span>
                     </div>
                     <div>
                        <span className="fshr-style2-icon"><BsCheck2Circle /></span>
                        <span className="fshr-style2-1">Complete Digital Process</span>
                     </div>
                     <div>
                        <span className="fshr-style2-icon"><BsCheck2Circle /></span>
                        <span className="fshr-style2-1">100% Satisfaction Garanteed</span>
                     </div>  
                  </div>

                  <div className="mt-2 mb-2">
                     <div className="fshr-style2-row">
                        <div>
                          <img src="../images/google-img.png" className="fshr-style2-img" alt="image"/>
                        </div>
                        <div>
                           <h5>Google Customer Rating</h5>
                           <p>4.9 < IoIosStar id="icon"/> < IoIosStar id="icon"/>< IoIosStar id="icon"/>< IoIosStar id="icon"/></p>
                        </div>
                     </div> 
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="form">
                     <h3>Get Expert Consultation</h3>
                     <div>
                     <div>
                        <input type="text" placeholder="Full Name*" className="input-type"/>
                     </div>
                     <div>
                        <input type="email" placeholder="Email*" className="input-type"/>
                     </div>
                     <div>
                        <input type="number" placeholder="Mobile Number*" className="input-type"/>
                     </div>
                     </div>
                     <div>
                     <button type="button" className="btn btn-primary btn-lg  ">REQUEST A CALLABCK</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="container fshr-style3 mt-2">
            <h2>Five Start Hotal Registration in india</h2>
            <div className="row">
               <div className="col-lg-7">
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                  </p>
               </div>
               <div className="col-lg-5">
                  <img src="../images/dummy.png" alt=""/>
               </div>
            </div>
          </div>
          <div className="container fshr-style4">
            <div className="row">
               <div className="col-md-6">
                  <h2>Five Start Hotal Registration in india</h2>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>                 
               </div>
               <div className="col-md-6">
                  <img src="../images/dummy.png" alt=""/>
               </div>
            </div>
          </div>
          </div>
        </>
    )
}
export default Page1;