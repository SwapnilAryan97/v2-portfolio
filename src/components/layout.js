import "../App.css";
import About from "./about";
import Intro from "./intro";
import Skills from "./skills";
import Experience from "./experience";
import Contact from "./contact";

import "../styles/GlobalStyle.scss";

const Layout = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Layout;
