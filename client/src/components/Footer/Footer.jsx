import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer__div">
          <div className="row p-0">
            <div className="col-sm">
              <h3 className="footer__div_h3">NFT project</h3>
            </div>
            <ul className="col-sm d-flex justify-content-center align-items-center footer__div_ul">
              <li className="footer__div_li"> Home </li>
              <li className="footer__div_li"> About </li>
              <li className="footer__div_li"> Features </li>
              <li className="footer__div_li"> Top NFTs </li>
              <li className="footer__div_li"> Team </li>
              <li className="footer__div_li"> Contact </li>
            </ul>
            <div className="col-sm d-flex justify-content-end">
              <ul className="d-flex align-items-center footer__div_ul">
                <li className="footer__div_li">
                  <AiOutlineTwitter />
                </li>
                <li className="footer__div_li">
                  <BsFacebook />
                </li>
                <li className="footer__div_li">
                  <BsInstagram />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright" />
          <p className="footer__copyright_p"> Copyright © 2022 </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
