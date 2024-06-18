import { useEffect, useState } from "react";
import getExperience from "./helper/getExperience";
import "../styles/experience.scss";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const filePath = "data/experience.yml";

  useEffect(() => {
    const fetchExperience = async () => {
      const experienceData = await getExperience(filePath);
      if (experienceData) {
        setExperience(experienceData);
      }
    };
    fetchExperience();
  }, []);

  return (
    <div className="page-container experience-page">
      <div className="content-wrapper">
        <div className="heading-container">
          <h1 className="section-heading">Experience</h1>
          <span className="divider"></span>
        </div>

        <div className="divider-2"></div>

        <div className="page-split-container">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <ul>
                <li className="date">{exp.date}</li>
                <li>
                  <h3 className="company">{exp.company}</h3>
                </li>
                <li className="title">{exp.title}</li>
                <li className="description">{exp.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
