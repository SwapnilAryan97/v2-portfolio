import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <h1 className="section-heading">Contact</h1>
      <p>
        Feel free to use this form to get in touch with me for any reason. I’m
        open to new opportunities, freelance projects, adorable cat videos, or
        just a friendly hello!
      </p>
      <div className="contact-form">
        <ul>
          <li className="half">
            <input type="text" name="name" placeholder="Name" required />
          </li>
          <li className="half">
            <input type="email" name="email" placeholder="Email" required />
          </li>
          <li>
            <input type="text" name="subject" placeholder="Subject" />
          </li>
          <li>
            <input type="text" name="message" placeholder="Message" />
          </li>
          <li>
            <input type="submit" className="flat-button" value="Submit" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
