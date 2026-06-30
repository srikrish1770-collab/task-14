import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.name === "" ||
      form.email === "" ||
      form.message === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <br /><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;