import React from "react";
import "./About.css";
import Award from '../../img/award.gif';
const About = () => {
  return (
    <div className="A">
      <div className="A-left">
        <div className="A-card.bg"></div>
        <div className="A-card">
          <img
            src="https://petapixel.com/assets/uploads/2023/06/paragraphica-1-800x420.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="A-right">
        <h1 className="A-title">About Me</h1>
        <p className="A-sub">
        It is a long established fact that a reader will be distracted by the
          readable content
        </p>
        <p className="A-desc">
        A position in Professional Software Engineering specializing in Front-End Developer where I may utilize my skills in developing specified software applications to meet customer requirements.
         Proven success at many opportunities and global marketing, team-motivation skills proven to high level performance

        </p>
        <div className="A-award">
          <img src={Award} alt="" className="A-award-img" />
          <div className="A-award-texts">
            <h4 className="A-award-title">International Design Awards 2021</h4>
            <p className="A-award-desc">
            International Awards since 2021 valuble design with asp.net,mvc also C#.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
