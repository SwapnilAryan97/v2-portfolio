import "../styles/about.scss";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit"; // Optional plugin for better fitting
import { Suspense } from "react";
const About = () => {
  const profilePic = require("../assets/images/profile-pic.jpg");
  // const LazyComponent = lazy(() => import("./LazyComponent"));

  return (
    <div className="page-container about-page">
      <span className="blur-background"></span>
      <h2 className="section-heading">Hey!</h2>
      <h2 className="section-heading">I'm Swapnil.</h2>
      <h3 className="section-subheading">
        I'm a Software Engineer who loves combining well-crafted code with
        beautiful design, paying close attention to detail.
      </h3>
      <span className="divider"></span>
      <div className="profile-container">
        <div className="profile-pic-container">
          <Suspense fallback={<div>Loading Image</div>}>
            {/* <LazyComponent /> */}
          </Suspense>
          <img
            className="profile-pic lazyload"
            // data-src={profilePic}
            src={profilePic}
            alt="Profile Pic"
          />
        </div>
        <div>
          <p>
            I enjoy discovering innovative methods to develop seamless user
            experiences using clean, efficient, and scalable code. I view work
            as a continuous learning journey and am constantly seeking
            opportunities to collaborate with individuals who are as eager to
            share their knowledge as I am to learn.
          </p>
          <p>
            At the end of the day, my main objective is to create something
            beautiful alongside people who inspire me to excel.
          </p>
          <p>
            <span className="highlight"> When I'm not working,</span> you can
            often find me jamming to my favorite tunes, diving into the pool,
            gliding gracefully on the ice, or immersing myself in epic video
            game adventures. I’m also a big fan of playing FIFA and table tennis, always
            up for a friendly match!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
