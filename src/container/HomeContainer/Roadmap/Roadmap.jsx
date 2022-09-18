import React from "react";
import './roadmap.css'
const Roadmap = () => {
  return (
    <>
      <div className="container home__roadmap" id="roadmap">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">
              <b>Roadmap</b>
            </h2>
            <p
              className="text-center mb-2 fs-5 home__roadmap_p"
            >
              {" "}
              Ex id in do officia anim incididunt qui excepteur consequat aliqua
              Lorem in. <br /> Excepteur cupidatat id laborum veniam.{" "}
            </p>
            <ul
              className="timeline home__roadmap_ul"
              
            >
              <li
                className="home__roadmap_li"
              >
                <div
                  className="home__roadmap_li_div"
                />
                <div
                  className="d-flex align-items-center justify-content-between ng-tns-c15-5"
                  style={{ width: "100%" }}
                >
                  <a target="_blank" href="/">
                    {" "}
                    Step 1{" "}
                  </a>
                </div>
                <p  className="home__roadmap_li_div_p">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....{" "}
                </p>
              </li>
              <li
                className="home__roadmap_li"
              >
                <div
                  className="home__roadmap_li_div"
                />
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ width: "100%" }}
                >
                  <a target="_blank" href="/" className="">
                    {" "}
                    Step 2{" "}
                  </a>
                </div>
                <p 
                className="home__roadmap_li_div_p">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....{" "}
                </p>
              </li>
              <li
                className="home__roadmap_li"
              >
                <div
                  className="home__roadmap_li_div"
                />
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ width: "100%" }}
                >
                  <a target="_blank" href="/">
                    {" "}
                    Step 3{" "}
                  </a>
                </div>
                <p  className="home__roadmap_li_div_p">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
