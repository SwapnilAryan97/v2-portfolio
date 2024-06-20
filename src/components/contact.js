import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <div className="content-wrapper">
        <div className="heading-container container-size">
          <h1 className="section-heading">Let's Connect!</h1>
          <h2>{/* <span className="">Contact</span> */}</h2>
          <p className="contact-para">
            Feel free to use this form to get in touch with me for any reason.
            I’m open to new opportunities, freelance projects, adorable cat
            videos, or just a friendly hello!
          </p>
        </div>
        <div className="divider-2"></div>
        <div className="contact-form">
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            {/* <li>
              <input type="text" name="subject" placeholder="Subject" />
            </li> */}
            <li>
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="message-box"
              />
            </li>
            <li>
              <input type="submit" className="flat-button" value="Submit" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
