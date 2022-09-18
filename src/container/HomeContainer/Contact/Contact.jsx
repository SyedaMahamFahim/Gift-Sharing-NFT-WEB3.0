import React from "react";
import "./contact.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <div className="container home__contact" id="contact">
        <h2 className="text-center">Connect with us</h2>
        <p className="text-center mb-5 fs-5 home__contact_p">
          Consectetur sunt velit in ex eu voluptate tempor occaecat
          reprehenderit qui in aliquip non nulla.
        </p>
        <div className="container mt-3 mb-3">
          <form className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Your email address"
              className="home__contact_input"
            />
            <a className="btn btn-primary home__contact_a" href="/">Connect</a>
          </form>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <ul className="d-flex align-items-center home__contact_ul">
            <li className="home__contact_li">
              <AiOutlineTwitter />
            </li>
            <li className="home__contact_li">
              <BsFacebook />
            </li>
            <li className="home__contact_li">
              <BsInstagram />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
