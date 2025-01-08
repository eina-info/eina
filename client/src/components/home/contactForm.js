import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tedu7gs", "template_5l5dzd8", form.current, {
        publicKey: "yqAFgU7BQZo7pgMBQ",
      })
      .then(
        () => {
          setMessage("¡Gracias! Tu mensaje fue enviado.");
        },
        (error) => {
          setMessage("Ocurrió un error, inténtalo más tarde.");
          console.log(`${error}`);
        }
      );
  };

  // Shared input styles
  const inputStyle = {
    border: "1px solid rgb(58, 3, 36)",
    borderBottom: "none",
    borderRadius: "20px",
    outline: "none",
    paddingTop: 0,
    paddingBottom: 0,
  };

  // Submit button styles
  const buttonStyle = {
    backgroundColor: "white",
    borderBottom: "1px solid rgb(58, 3, 36)",
    borderTop: "1px solid rgb(58, 3, 36)",
    borderRight: "1px solid rgb(58, 3, 36)",
    borderLeft: "1px solid rgb(58, 3, 36)",
    borderRadius: "20px",
    color: "rgb(58, 3, 36)",
    cursor: "pointer",
    width: "100px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "-15px",
    marginBottom: "15px",
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <input
        type="text"
        name="from_name"
        placeholder="Nombre"
        style={inputStyle}
      />
      <input
        type="email"
        name="from_email"
        placeholder="Correo electrónico"
        style={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        style={{
          ...inputStyle,
          resize: "none",
          minHeight: "100px",
          paddingTop: "5px",
          borderBottom: "1px solid rgb(58, 3, 36)",
          borderTop: "1px solid rgb(58, 3, 36)",
          borderRight: "1px solid rgb(58, 3, 36)",
          borderLeft: "1px solid rgb(58, 3, 36)",
          borderRadius: "20px", // Extra styles specific to the textarea
        }}
      />
      <input type="submit" value="Enviar" style={buttonStyle} />
      {message && <p style={{ color: "rgb(58, 3, 36)" }}>{message}</p>}
    </form>
  );
};
