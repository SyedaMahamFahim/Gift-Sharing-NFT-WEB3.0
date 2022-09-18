import React from "react";
import "./topnfts.css";
const TopNfts = () => {
  return (
    <>
      <div
        className="container-sm px-4 px-xs-5 px-sm-0 align-items-center justify-content-center home__topnft"
        id="nfts"
      >
        <h2 className="text-center">
          <b>Top NFTs</b>
        </h2>
        <p
          className="text-center mb-4 fs-5 home__topnft_p"
          
        >
          {" "}
          Et cupidatat et nulla quis laborum exercitation sint irure labore
          culpa esse Lorem. <br /> Aute laborum in dolore nostrud quis nisi sint
          occaecat excepteur.{" "}
        </p>
        <div className="row">
          <div className="col-xl-6 row gap-0">
            <div className="col-6 p-1">
              <img
                src="/assets/nft1.png"
                alt=""
                className="home__topnft_img"
              />
            </div>
            <div className="col-6 p-1">
              <img
                src="/assets/nft2.png"
                alt=""
                className="home__topnft_img"

              />
            </div>
            <div className="col-6 p-1">
              <img
                src="/assets/nft3.png"
                alt=""
                className="home__topnft_img"

              />
            </div>
            <div className="col-6 p-1">
              <img
                src="/assets/nft4.png"
                alt=""
                className="home__topnft_img"

              />
            </div>
          </div>
          <div className="col-xl-6 d-flex align-items-center justify-content-center">
            {/**/}
            <div className="d-flex flex-column align-items-center gap-3 justify-content-center">
              <div className="d-flex align-items-center">
                <button
                 className="home__topnft_btn"
                >
                  {" "}
                  Connect Wallet{" "}
                </button>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNfts;
