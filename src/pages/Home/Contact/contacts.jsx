import Form from "../../../components/smartForm/form.jsx";
import { StyledForm } from "./StyledForm.jsx";
export default function Contact() {
  return (
    <StyledForm id="contact">
      <div className="content">
        <div className="left-side">
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <span className="topic">Phone</span>
            <p className="text-one">+351 916 742 800</p>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <span className="topic">Email</span>
            <p className="text-one">
              <a
                href="mailto:freitas.ma.1993@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                freitas.ma.1993@gmail.com{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send me a message</div>
          <p>
            Feel free to reach out to me via email for any further information,
            quotes, or work proposals you may need.
          </p>
          <Form />
        </div>
      </div>
    </StyledForm>
  );
}
