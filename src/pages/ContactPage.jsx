

export default function ContactPage() {

    const styles = {
        textarea: {
            resize: "none"
        }
    }

    const onClickSubmit = (event) => {
        console.log("onClickSubmit:", onClickSubmit);
        event.preventDefault();

        console.log("event.target:", event.target);
    }

    const handleOnBlur = ({ target }) => {
        target.reportValidity();
    }

    return (
        <section className="m-3">
            <h2>
                Send me a message!
            </h2>

            <hr/>

            <form className="" onSubmit={ onClickSubmit }>
                <div className="mb-3">
                    <label htmlFor="contact-name" className="form-label">Your name</label>
                    <input id="contact-name" type="text" className="form-control" aria-describedby="" onBlur={handleOnBlur} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-email" className="form-label">Your email</label>
                    <input id="contact-email" type="email" className="form-control"  aria-describedby="emailHelp" onBlur={handleOnBlur} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-message" className="form-label">Message</label>
                    <textarea id="contact-message" type="text" className="form-control" style={ styles.textarea } rows={5} onBlur={handleOnBlur} required/>
                </div>
                <button type="submit" className="btn btn-primary w-25">Send</button>
            </form>
        </section>
    )
}