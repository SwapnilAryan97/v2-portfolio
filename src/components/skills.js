import React, { useEffect, useState } from "react";
import getSkills from "./helper/getSkills";
import "../styles/skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const filePath = "data/skills.yml";

  useEffect(() => {
    const fetchSkills = async () => {
      const skillData = await getSkills(filePath);
      if (skillData) {
        setSkills(skillData.Categories);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="page-container skills-page">
      <div className="content-wrapper reverse">
        <div className="heading-container">
          <h2 className="section-heading">Skills</h2>
          <span className="divider"></span>
        </div>

        {/* <div className="divider-2"></div> */}

        <div className="page-split-container">
          {skills.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="sub-title">{category.name}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="skill-bubble">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider-2"></div>
      </div>
    </div>
  );
};

export default Skills;
