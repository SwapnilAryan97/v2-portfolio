import yaml from "js-yaml";
import axios from "axios";

const readYaml = async (filePath) => {
  try {
    const response = await axios.get(filePath);
    const data = yaml.safeLoad(response.data);
    return data;
  } catch (error) {
    console.error(`Error reading YAML file: ${filePath}`);
    console.error(`Error message: ${error}`);
    return null;
  }
};

export default readYaml;
