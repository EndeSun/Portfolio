import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  //MARK: TITLE
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm <span className="font-semibold mx-2 text-white">Ende</span>👋
        <br />
        <strong>Biomedichal</strong> engineer degree 🩻
        <br />
        Mobile <strong>Software</strong> master engineer degree 📱
      </h1>
    );

  //MARK: ABOUT
  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Acquired Many <strong className="text-red-300">Skills</strong>: A
          Journey of Constant <strong className="text-red-300">Learning</strong>
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          See more 👀
        </Link>
      </div>
    );
  }

  //MARK: PROJECTS
  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          I've completed several projects over the years. Curious?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio →
        </Link>
      </div>
    );
  }

  //MARK: CONTACT
  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk →
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
