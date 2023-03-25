import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* <a href="https://www.facebook.com/saikumar.paliseti.7">
                <i className="fa fa-facebook-square"></i>
              </a> */}
              <a href="https://www.instagram.com/sai_1_5/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/sai1512">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/venkatapalisetti?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUmgxrBnwRxWAQUHflguu5A%3D%3D">
                <i className="fa fa-linkedin-square"></i>
              </a>
              {/* <a href="https://twitter.com/B_T_S_designs">
                <i className="fa fa-twitter-square"></i>
              </a> */}
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Venkata Siva Sai Kumar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    // "Enthusiastic Dev",
                    // 1000,
                    // "React/React Native Developer",
                    // 1000,
                    "Developer 💻",
                    1000,
                    // "AI & ML Enthusiastic",
                    // 1000,
                    // "Full Stack Developer",
                    // 1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Awake-Eat-Code-Fun-Sleep
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Let's talk</button>
            <a href="Sai_cv.pdf" download="Sai Sai_cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
