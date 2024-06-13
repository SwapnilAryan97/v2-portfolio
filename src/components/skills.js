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
      <h2 className="section-heading">Skills</h2>
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
  );
};

export default Skills;
