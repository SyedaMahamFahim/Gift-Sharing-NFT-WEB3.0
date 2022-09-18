import React from "react";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3 fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex" href="/">
            <h3 style={{ fontWeight: "bold" }}>NFT project</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
           <Menu/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
