import React from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";

export default function FormMail() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkmi1ox",
        "template_l2ty0ob",
        e.target,
        "Xr5h3v9aPlpzM-OB9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { user } = useAuth0();

  return (
    <div className="formMail">
      <img src={user.picture} alt="" />
      <h2>Xin chào {user.name}</h2>
      <form onSubmit={handleSubmit}>
        FormMail
        <input type="email" name="email" placeholder="Enter your email" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <button>Tôi cần hỗ trợ bài tập</button>
      </form>
    </div>
  );
}
