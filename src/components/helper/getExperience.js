import readYaml from "./readYaml";

const getExperience = async (filePath) => {
  const exp = await readYaml(filePath);
  if (!exp) return null;

  return exp;
};

export default getExperience;
