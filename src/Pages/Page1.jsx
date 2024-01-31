import React , {useState} from "react";
import  "./Styles/FSHR.css";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

const Page1=(show, onClose)=>{
   const [toggle, setToggle]=useState(1)
    if(!show){
        return null;
    }
    

    const updateToggle=(id)=>{
        setToggle(id)
    }
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
          </div>
          <div>
          <div className="container fshr-style3">
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
          <div className="container fshr-style5 mt-2">
            <div>
              <h2 className="text-center">Documents Requred for five style Hotal Registration(With Alcohal)</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                  </p>

            </div>
          </div>
          <div className="container fshr-style6">
            <div>
               <h2 className="text-center">Documents Requred for five style Hotal Registration(With Alcohal)</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet:</p>
               <div className="fshr-style6-1">
                  <div>
                     <li>Build Pertmit</li>
                     <li>Build Pertmit</li>
                     <li>Build Pertmit</li>
                     <li>Build Pertmit</li>
                     <li>Build Pertmit</li>
                     <li>Build Pertmit</li>
                  </div>
                  <div>
                  <li>Build Pertmit</li>
                  <li>Build Pertmit</li>
                  <li>Build Pertmit</li>
                  <li>Build Pertmit</li>
                  <li>Build Pertmit</li>
                  <li>Build Pertmit</li>
                  </div>
               </div>
            </div>
          </div>
          <div className="container fshr-style7">
            <div className="row fshr-style7-1">
               <div className="col-lg-8">
                  <h3>Documents Requred for five style Hotal Registration</h3>
                  <div className="row">
                     <div className="col-md-5">
                        <div style={{display:"flex"}}>
                           <div>
                              <img src="../images/dummy.png" alt="image"/>
                           </div>
                           <div>
                              <h2>Guest House</h2>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-5">
                        <div style={{display:"flex"}}>
                           <div>
                              <img src="../images/dummy.png" alt="image"/>
                           </div>
                           <div>
                              <h2>Guest House</h2>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-5">
                        <div style={{display:"flex"}}>
                           <div>
                              <img src="../images/dummy.png" alt="image"/>
                           </div>
                           <div>
                              <h2>Guest House</h2>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-5">
                        <div style={{display:"flex"}}>
                           <div>
                              <img src="../images/dummy.png" alt="image"/>
                           </div>
                           <div>
                              <h2>Guest House</h2>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <img src="../images/dummy.png" className="fshr-style7-img" alt="image"/>
               </div>
            </div>
          </div>

          <div className="container fshr-style8">
            <h1 className="text-center">Documents Requred for five style Hotal Registration</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
            <div className="row">
               <div className="col-md-5 pb-3">
                  <li id="Active" onClick={()=>updateToggle(1)}><lable className="int">01</lable> Apply for five start hotal Registration</li>
                  <li onClick={()=>updateToggle(2)}><lable className="int">02</lable> Apply for five start hotal Registration</li>
                  <li onClick={()=>updateToggle(3)}><lable className="int">03</lable> Apply for five start hotal Registration</li>
                  <li onClick={()=>updateToggle(4)}><lable className="int">04</lable> Apply for five start hotal Registration</li>
                  <li onClick={()=>updateToggle(5)}><lable className="int">05</lable> Apply for five start hotal Registration</li>

               </div>
               <div className="col-md-7">
               <div className="tab-toggle">
                  <div className={toggle===1 ? "show-content":"content"}>
                     <h2> Step1:Documents Requred for five style Hotal Registration</h2>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className={toggle===2 ? "show-content":"content"}>
                     <h2> Step2:Documents Requred for five style Hotal Registration</h2>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       
                    </p>
                  </div>
                  <div className={toggle===3 ? "show-content":"content"}>
                     <h2> Step3:Documents Requred for five style Hotal Registration</h2>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className={toggle===4 ? "show-content":"content"}>
                     <h2>Step4:Documents Requred for five style Hotal Registration</h2>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       
                    </p>
                  </div>
                  <div className={toggle===5 ? "show-content":"content"}>
                     <h2>Step5:Documents Requred for five style Hotal Registration</h2>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                    </p>
                  </div>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="container fshr-style9 mt-2">
            <h2 className="text-center">Conclusion</h2>
            <div className="row">
               <div className="col-lg-5">
                  <img src="../images/dummy.png" alt="image"/>
               </div>
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
            </div>
          </div>
          <div className="container fshr-style10">
            <div className="row">
               <div className="col-md-5">
                  <img src="../images/dummy.png" className="fshr-style10-img1"  alt="image"/>
               </div>
               <div className="col-md-7">
                  <h2>Why Professional Utilities</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                  </p>
                  <div className="row" style={{gap:10}}>
                     <div className="col-sm-5">
                       <li><label><img src="../images/dummy.png" className="fshr-style10-img2" alt="image"/></label> Best price guarantee</li>
                     </div>
                     <div className="col-sm-5">
                        <li><label><img src="../images/dummy.png" className="fshr-style10-img2" alt="image"/></label> Best price guarantee</li>
                     </div>
                     <div className="col-sm-5">
                        <li><label><img src="../images/dummy.png" className="fshr-style10-img2" alt="image"/></label> Best price guarantee</li>
                     </div>
                     <div className="col-sm-5">
                        <li><label><img src="../images/dummy.png" className="fshr-style10-img2" alt="image"/></label> Best price guarantee</li>
                     </div>
                     <div className="col-sm-5">
                        <li><label><img src="../images/dummy.png" className="fshr-style10-img2" alt="image"/></label> Best price guarantee</li>
                     </div>
                     <div className="col-sm-5">
                        <li><label><img src="../images/dummy.png" className="fshr-style10-img2" alt="image"/></label> Best price guarantee</li>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="container fshr-style11">
            <h2 className="text-center">Others Bunisess Registration</h2>
            <div className="fshr-style11-1">
               <ul>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
               </ul>
               <ul>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
               </ul>
               <ul>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
               </ul>
               <ul>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
                  <li>five Star Deluxe Hotal</li>
               </ul>
            </div>
          </div>
           
          </div>
        </>
    )
}
export default Page1;