import React from "react";
import "./feature.css";
const Features = () => {
  return (
    <>
      <div className="container home__features" id="features">
        <h2 className="text-center">
          <b>Features</b>
        </h2>
        <p className="home__features_p">
          {" "}
          Duis ipsum dolore culpa est id ad cupidatat ullamco consectetur culpa
          deserunt. <br /> Ad dolore aliquip labore reprehenderit.
        </p>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-start home__features_div">
            <div className="row justify-content-center">
              <div
                className="col-md-4 col-sm-6 d-flex align-items-start mb-5 "
                style={{ width: "24rem" }}
              >
                <h6 className="fs-4 fw-bold home__features_h6">01</h6>
                <div className="home__features_box">
                  <h3 className="fs-4 fw-bold ">Magna Lorem sit </h3>
                  <p className="fs-5 ">
                    Velit consectetur culpa qui eu reprehenderit aliquip nostrud
                    magna consequat enim quis.
                  </p>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 d-flex align-items-start mb-5"
                style={{ width: "24rem" }}
              >
                <h6 className="fs-4 fw-bold home__features_h6">02</h6>
                <div className="home__features_box">
                  <h3 className="fs-4 fw-bold ">Mollit nostrud.</h3>
                  <p className="fs-5 ">
                    Velit consectetur culpa qui eu reprehenderit aliquip nostrud
                    magna consequat enim quis.
                  </p>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 d-flex align-items-start mb-5  "
                style={{ width: "24rem" }}
              >
                <h6 className="fs-4 fw-bold home__features_h6">03</h6>
                <div className="home__features_box">
                  <h3 className="fs-4 fw-bold ">Magna Lorem sit</h3>
                  <p className="fs-5 ">
                    Velit consectetur culpa qui eu reprehenderit aliquip nostrud
                    magna consequat enim quis.
                  </p>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 d-flex align-items-start mb-5"
                style={{ width: "24rem" }}
              >
                <h6 className="fs-4 fw-bold home__features_h6">04</h6>
                <div  className="home__features_box">
                  <h3 className="fs-4 fw-bold ">Mollit nostrud.</h3>
                  <p className="fs-5 ">
                    Velit consectetur culpa qui eu reprehenderit aliquip nostrud
                    magna consequat enim quis.
                  </p>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
