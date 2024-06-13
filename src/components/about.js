import "../styles/about.scss";

const About = () => {
  const profilePic = require("../assets/images/profile-pic.jpg");
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
      <span className="profile-pic-container">
        <img className="profile-pic" src={profilePic} />
      </span>
      <p>
        I enjoy discovering innovative methods to develop seamless user
        experiences using clean, efficient, and scalable code. I view work as a
        continuous learning journey and am constantly seeking opportunities to
        collaborate with individuals who are as eager to share their knowledge
        as I am to learn. At the end of the day, my main objective is to create
        something beautiful alongside people who inspire me to excel.
      </p>
    </div>
  );
};

export default About;
