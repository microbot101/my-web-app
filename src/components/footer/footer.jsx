import React from "react";
import "./footer.css"
import logo from "../images/blklogo.png"

const Footer = () =>{
    return (
       <div className="footer">
            <div className="footer_main">
                <scetion className="sec_1">
                    <ul>
                        <h1>Contact</h1>
                        <li>The point of using Lorem Ipsum</li>
                        <li>The point of using Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <h1>Services</h1>
                        <li>The point of using Lorem Ipsum</li>
                        <li>The point of using Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <h1>Help&Suipport</h1>
                        <li>The point of using Lorem Ipsum</li>
                        <li>The point of using Lorem Ipsum</li>
                    </ul>
                </scetion>
                <section className="img_sec">
                    <img src={logo} alt="" />
                    <p></p>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </section>
            </div>
            <p className="dev_by">developed by @TERRA</p>
       </div>
    )
}

export default Footer