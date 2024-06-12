import readYaml from "./readYaml";

const getSkills = async (filePath) => {
  const skills = await readYaml(filePath);
  if (!skills) return null;

  const { development, design } = skills;
  //   return { development, design };
  return skills;
};

export default getSkills;
