import { useEffect, useState } from "react";
import { validateEmail } from "./../../utils/helpers";
import "../../css/Contact.css";

const styles = {
  card: {
    margin: "150px",
  },
  header: {
    display: "flex",
    justifyContent: "center",
  },
  messageInput: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
  },
  btn: {
    width: "90%",
    padding: "5px",
    margin: "4px 0",
    boxSizing: "border-box",
    backgroundColor: "red",
    border: "none",
    fontSize: "20px",
    borderRadius: "5px",
  },
  btnDiv: {
    display: "flex",
    justifyContent: "center",
  },
};

export default function Contact() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    console.log("click");
    if (name === "email") {
      setEmail(value);
      console.log(email);
      if (!validateEmail(email)) {
        setErrorMessage("Invalid Email");
        return;
      }
      setErrorMessage(" ");
    } else if (name === "message") {
      setMessage(value);
      console.log(message);
    } else if (name === "fullName") {
      setName(value);
      console.log(fullName);
    }
  };

  const focusEvent = (e) => {
    console.log("Focused on input");

    if (message === "" || fullName === "" || email === "") {
      setErrorMessage("This Field is Required");
    }
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.header}>Contact Page</h1>

      <form id="contact-form">
        <div className="card">
          <div className="input-contact">
            <label for="NameInput">Full Name</label>
            <input
              type="text"
              id="NameInput"
              placeholder="Enter Full Name"
              className="form-input"
              required
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              onFocus={focusEvent}
            />
          </div>

          <div className="input-contact">
            <label for="emailInput">Email</label>
            <input
              type="email"
              id="emailInput"
              placeholder="Enter email"
              className="form-input"
              required
              value={email}
              name="email"
              onChange={handleInputChange}
              onFocus={focusEvent}
            />
          </div>

          <div>
            <label for="messageInput">Message</label>
            <textarea
              rows="5"
              cols="80"
              id="messageTextArea"
              style={styles.messageInput}
              name="message"
              value={message}
              onChange={handleInputChange}
              onFocus={focusEvent}
            ></textarea>
          </div>
          <div style={styles.btnDiv}>
            <button
              className="btn"
              type="submit"
              name="action"
              style={styles.btn}
            >
              Submit
            </button>
          </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
