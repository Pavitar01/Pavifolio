import React from "react";
import { contactDetails } from "../Details";
import "./contact.css";
function Contact() {
  const { email, phone } = contactDetails;
  const contact = (e) => {
    alert("currently working on it...");
  };
  return (
    <>
      <form
        form
        method="POST"
        action="mailto: mickeynegi924@gmail.com"
        enctype="multipart/form-data"
        class="contact-form"
        onsubmit={contact}
      >
        <legend>Contact Me</legend>

        <fieldset>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="ph">Phone No:</label>
          <input type="number" id="phone" name="phone no" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" style={{ color: "white" }}>
            Send Message
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default Contact;
