import "../App.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>CONTACT ME</h1>

      <p>
        Have a question, travel suggestion, or just want to say hello?
        I'd love to hear from you!
      </p>

      <form className="contact-form">

        <label>Name *</label>
        <input 
          type="text" 
          placeholder="Your name"
          required
        />

        <label>Email *</label>
        <input 
          type="email" 
          placeholder="Your email"
          required
        />

        <label>Comment Subject *</label>
        <input 
          type="text" 
          placeholder="Subject"
          required
        />

        <label>Message *</label>
        <textarea 
          placeholder="Write your message..."
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Contact;