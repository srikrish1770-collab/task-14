import { useRef } from "react";

function Contact() {
  const nameRef = useRef();

  const handleFocus = () => {
    nameRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <textarea
          placeholder="Enter your message"
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        ></textarea>

        <button type="button" onClick={handleFocus}>
          Focus Name
        </button>

        <button
          type="submit"
          style={{ marginLeft: "10px" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;