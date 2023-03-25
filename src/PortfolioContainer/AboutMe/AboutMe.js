import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
  //   fadeInScreenHandler
  // );

  const SCREEN_CONSTATNTS = {
    description:
      "Hello, My call name is Sai and I'm a Computer Science graduate and dedicated programmer with strong foundation programming skills, nerd in Java who enjoys challenging tasks and has keen eye for innovations and developments. Reliable with deadlines and always motivates team by creating positve environment",
    highlights: {
      bullets: ["Self-motivation", "Committment", "Well-organized"],
      heading: "Few qualities can describe myself:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTATNTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTATNTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTATNTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >Let's talk</button>
              <a href="Sai_cv.pdf" download="Sai Sai_cv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
