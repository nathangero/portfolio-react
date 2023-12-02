import { Modal } from "bootstrap";


export default function ContactPage() {

    const styles = {
        textarea: {
            resize: "none"
        }
    }

    const onClickSubmit = (event) => {
        event.preventDefault();

        event.target.reset();

        // Eventually implement showing the modal after an email is sent
        const modal = document.getElementById('modal-confirm-send');

        const bootstrapModal = new Modal(modal);
        bootstrapModal.show();
    }

    const handleOnBlur = ({ target }) => {
        target.reportValidity();
    }

    return (
        <section className="m-3">
            <h2>
                Send me a message!
            </h2>

            <hr />

            <form className="" onSubmit={onClickSubmit}>
                <div className="mb-3">
                    <label htmlFor="contact-name" className="form-label">Your name</label>
                    <input id="contact-name" type="text" className="form-control" onBlur={handleOnBlur} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-email" className="form-label">Your email</label>
                    <input id="contact-email" type="email" className="form-control" aria-describedby="emailHelp" onBlur={handleOnBlur} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-message" className="form-label">Message</label>
                    <textarea id="contact-message" type="text" className="form-control" style={styles.textarea} rows={5} aria-describedby="required" onBlur={handleOnBlur} required />
                </div>
                <button type="submit" className="btn btn-primary w-25">Send</button>
            </form>

            <div id="modal-confirm-send" className="modal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Message (would be) sent!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Feature not yet fully implemented</p>
                        </div>
                        <div className="modal-footer">
                            <button id="button-modal" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}