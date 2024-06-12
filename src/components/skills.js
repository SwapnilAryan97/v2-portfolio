import React, { useEffect, useState } from "react";
import getSkills from "./helper/getSkills";
import "../styles/skills.scss";
// import path from "path";

const Skills = () => {
  const [skills, setSkills] = useState({ development: [], design: [] });
  const filePath = "data/skills.yml";

  // const filePath = path.resolve(__dirname, "../data/skills.yml");

  useEffect(() => {
    const fetchSkills = async () => {
      const skillData = await getSkills(filePath);
      if (skillData) {
        setSkills(skillData);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="page-container skills-page">
      <h2 className="section-heading">Skills</h2>
      <h3>Development</h3>
      <ul>
        {skills.development.map((skill, index) => (
          <li key={index} className="skill-bubble">
            {skill.item}
          </li>
        ))}
      </ul>
      <h3>Design</h3>
      <ul>
        {skills.design.map((skill, index) => (
          <li key={index} className="skill-bubble">
            {skill.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
