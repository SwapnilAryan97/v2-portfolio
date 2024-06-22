import "../styles/contact.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Need backend to hide the emailjs service id and template id
    emailjs
      .sendForm(
        "iswapnilaryan",
        "template_e1bsh0p",
        form.current,
        "mSi8ONmpqGhOfSrq6"
      )
      .then(
        () => {
          // alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <div className="page-container contact-page">
      <form ref={form} onSubmit={sendEmail} className="content-wrapper">
        <div className="heading-container container-size">
          <h1 className="section-heading">Let's Connect!</h1>
          <span className="divider"></span>
          <p className="contact-para">
            Feel free to use this form to get in touch with me for any reason.
            <br />
            <br />
            I’m open to new opportunities, freelance projects, adorable cat
            videos, or just a friendly hello!
          </p>
        </div>
        {/* <div className="divider-2"></div> */}
        <div className="contact-form">
          <div className="contact-form-title">
            <h2>Leave a message here</h2>
          </div>
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
      </form>
    </div>
  );
};

export default Contact;
