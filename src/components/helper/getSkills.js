import readYaml from "./readYaml";

const getSkills = async (filePath) => {
  const skills = await readYaml(filePath);
  if (!skills) return null;

  return skills;
};

export default getSkills;
