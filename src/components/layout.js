import "../App.css";
import About from "./about";
import Intro from "./intro";
import Skills from "./skills";
import Experience from "./experience";
import Contact from "./contact";
// import Navbar from "./navbar";

import "../styles/GlobalStyle.scss";

const Layout = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Layout;
