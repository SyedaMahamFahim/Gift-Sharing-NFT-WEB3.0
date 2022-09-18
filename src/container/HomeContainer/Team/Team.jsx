import React from "react";
import './team.css'

const Team = () => {
  return (
    <>
      <div
        className="container-sm px-4 px-xs-5 px-sm-0 d-flex align-items-center justify-content-center home__team"
        id="team"
        
      >
        <div>
          <div>
            <h2 className="text-center">Team</h2>
            <p className="fs-5 home__team_p">
              {" "}
              Sint laboris sunt aute sint do magna anim id officia veniam ea
              laboris. <br /> Ad voluptate in laboris officia quis proident{" "}
            </p>
          </div>
          <div className="row gap-0">
            <div className="col-md-4 col-sm-6 py-5 gap-4 d-flex flex-column align-items-center">
              <img
                alt="image1"
                src="/assets/danial.jpg"
                className="home__team_img"
                
              />
              <div className="d-flex flex-column align-items-center">
                <h1 className="fs-5 fw-bold">Annette Black</h1>
                <h6 className="home__team_p_position">President of Sales</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5 gap-4 d-flex flex-column align-items-center">
              <img
                alt="image2"
                src="/assets/avatar2.jpg"
                className="home__team_img"
              />
              <div className="d-flex flex-column align-items-center">
                <h1 className="fs-5 fw-bold">Ronald Richards</h1>
                <h6 className="home__team_p_position">Nursing Assistant</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5 gap-4 d-flex flex-column align-items-center">
              <img
                alt="image1"
                src="/assets/danial.jpg"
                className="home__team_img"
              />
              <div className="d-flex flex-column align-items-center">
                <h1 className="fs-5 fw-bold">Floyd Miles</h1>
                <h6 className="home__team_p_position">Web Designer</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5 gap-4 d-flex flex-column align-items-center">
              <img
                 alt="image3"
                src="/assets/jhon.jpg"
                className="home__team_img"
              />
              <div className="d-flex flex-column align-items-center">
                <h1 className="fs-5 fw-bold">Guy Hawkins</h1>
                <h6 className="home__team_p_position">Marketing Coordinator</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5 gap-4 d-flex flex-column align-items-center">
              <img
                alt="image1"
                src="/assets/danial.jpg"
                className="home__team_img"
              />
              <div className="d-flex flex-column align-items-center">
                <h1 className="fs-5 fw-bold">Annette Black</h1>
                <h6 className="home__team_p_position">President of Sales</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5 gap-4 d-flex flex-column align-items-center">
              <img
                 alt="image3"
                src="/assets/avatar2.jpg"
                className="home__team_img"
              />
              <div className="d-flex flex-column align-items-center">
                <h1 className="fs-5 fw-bold">Ronald Richards</h1>
                <h6 className="home__team_p_position">Nursing Assistant</h6>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
