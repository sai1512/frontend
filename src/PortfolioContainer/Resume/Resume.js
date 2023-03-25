import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
  //   fadeInScreenHandler
  // );

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <div className="resume-sub-heading">
            <span className="resume-heading-des">
              {props.heading ? props.heading : ""}
            </span>
            <span className="resume-sub-heading-des">
              {props.subHeading ? props.subHeading : ""}
            </span>
            <span>{props.description ? props.description : ""}</span>
          </div>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 80 },
    { skill: "DSA", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "ReactJS", ratingPercentage: 60 },
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "HTML & CSS", ratingPercentage: 70 },
  ];

  const projectDetails = [
    // {
    //   title: "Malicious Web Content Detection",
    //   duration: { fromDate: "Aug-2021", toDate: "Oct-2021" },
    //   description:
    //     "Builded Machine learning model can predict whether the user entered URL is safe or not.",
    //   subHeading:
    //     "Technologies used: python, anaconda, Django, JavaScript, VS code and Random Forest Classifier algorithm.",
    // },
    {
      title: "Here’s the drink Android application",
      duration: { fromDate: "Dec-2021", toDate: "Feb-2022" },
      description:
        "Built an android application for finding the product in store.",
      subHeading:
        "Technologies used: Java, XML, Android studio, Firebase and motion sensors.",
    },
    // {
    //   title: "Bank churn prediction ",
    //   duration: { fromDate: "Mar-2022", toDate: "Jun-2022" },
    //   description:
    //     "Builded meachine learning model can predict the churning customers",
    //   subHeading:
    //     "Technologies used:  python, anaconda, kggle dataset and convolutional neural network.",
    // },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Blekinge Tekniska H¨ogskola, Sweden"}
        subHeading={"Bachelors in Computer Science"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Jawaharlal Nehru Technological University, Anantapur"}
        subHeading={"Bachelors in Computer Science"}
        fromDate={"2018"}
        toDate={"2021"}
      />
    </div>,
    <div
      className="resume-screen-container work-experience"
      key="work-experience"
    >
      <ResumeHeading
        heading={"Data science using python Online Intern"}
        subHeading={"Andhra Pradesh State Skill Development Corporation"}
        fromDate={"Apr-2021"}
        toDate={"Jun-2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Experienced as Data analytic. Worked with different types of datasets
          and analysed the outcomes by using Python and Machine Learning
          algorithms.
        </span>
      </div>
      {/* <div className="experience-description">
        <span className="resume-description-text">
          Experienced as Data analytic. Worked with different types of datasets
          and analysed the outcomes by using Python and Machine Learning
          algorithms.
        </span>
      </div> */}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <div
            style={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              width: "100%",
              marginLeft: "1rem",
            }}
            className=""
          >
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
      <span className="profile-role-tagline">For more projects</span>
      <a href="https://github.com/sai1512">
        <button className="btn highlighted-btn">GitHub</button>
      </a>
    </div>,
    <div className="resume-screen-container" key="interrests">
      <ResumeHeading
        heading="Listening music"
        description="Apart from all my busy day, music helps to me for a peaceful sleep."
      />
      <ResumeHeading
        heading="Volleyball"
        description="I used to play volleyball as my outdoor game and which always keeps me in good physical fit."
      />
      {/* <ResumeHeading
        heading="Volleyball"
        description="I used to play volleyball as my outdoor game"
      /> */}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
