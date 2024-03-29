import { Modal } from "bootstrap";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function ContactPage() {
  const FIELD = {
    NAME: "name",
    EMAIL: "email",
    MESSAGE: "message",
  };

  const styles = {
    textarea: {
      resize: "none",
    },
    mobile: {
      width: "75%",
    },
    desktop: {
      width: "50%",
    },
    button: {
      backgroundColor: "#2baeff",
      color: "white",
    },
    required: {
      visibility: "hidden",
      color: "red",
    },
  };

  const [contactSubject, setSubject] = useState("");
  const [contactEmail, setEmail] = useState("");
  const [contactMessage, setBody] = useState("");

  const onHandleChangeName = ({ target }) => {
    setSubject(target.value);
  };

  const onHandleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const onHandleChangeMessage = ({ target }) => {
    setBody(target.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();

    // const mailto = `mailto:nathanageronimo@gmail.com?subject=${contactSubject}&body=${contactMessage}`;
    // console.log("mailto:", mailto);
    // window.location.href = mailto;

    event.target.reset();

    // Eventually implement showing the modal after an email is sent
    const modal = document.getElementById("modal-confirm-send");

    const bootstrapModal = new Modal(modal);
    bootstrapModal.show();
  };

  // Check if the "fill out your field" message pops up or not
  const handleOnBlur = ({ target }) => {
    switch (target.id) {
      case `contact-${FIELD.NAME}`:
        document.getElementById(`field-${FIELD.NAME}`).style.visibility =
          target.checkValidity() ? "hidden" : "visible";
        break;

      case `contact-${FIELD.EMAIL}`:
        document.getElementById(`field-${FIELD.EMAIL}`).style.visibility =
          target.checkValidity() ? "hidden" : "visible";
        break;

      case `contact-${FIELD.MESSAGE}`:
        document.getElementById(`field-${FIELD.MESSAGE}`).style.visibility =
          target.checkValidity() ? "hidden" : "visible";
        break;
    }
  };

  const largeScreen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <section className="m-3">
      <h2 className="text-center">Send me a message!</h2>

      <hr />

      <div className="d-flex justify-content-center">
        <form
          className=""
          onSubmit={onClickSubmit}
          style={largeScreen ? styles.desktop : styles.mobile}
        >
          <div className="mb-3">
            <label htmlFor="contact-subject" className="form-label">
              Email Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              className="form-control"
              value={contactSubject}
              onChange={onHandleChangeName}
              onBlur={handleOnBlur}
              required
            />
            <p id="field-name" style={styles.required}>
              *Please fill out your {FIELD.NAME}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="contact-email" className="form-label">
              Your email
            </label>
            <input
              id="contact-email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={contactEmail}
              onChange={onHandleChangeEmail}
              onBlur={handleOnBlur}
              required
            />
            <p id="field-email" style={styles.required}>
              *Please use a valid {FIELD.EMAIL}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>
            <textarea
              id="contact-message"
              type="text"
              className="form-control"
              style={styles.textarea}
              rows={5}
              aria-describedby="required"
              value={contactMessage}
              onChange={onHandleChangeMessage}
              onBlur={handleOnBlur}
              required
            />
            <p id="field-message" style={styles.required}>
              *Please fill out your {FIELD.MESSAGE}
            </p>
          </div>

          <div className="text-center">
            <button type="submit" className="btn w-25" style={styles.button}>
              Send
            </button>
          </div>
        </form>
      </div>

      <div id="modal-confirm-send" className="modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Message (would be) sent!</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-black">
                Feature not yet fully implemented. Instead,
              </p>
              <label className="text-black">Email me at: </label>
              <a href={`mailto:nathanageronimo@gmail.com`}>
                {" "}
                nathanageronimo@gmail.com
              </a>
            </div>
            <div className="modal-footer">
              <button
                id="button-modal"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
