import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

export default function FormMail() {
  const { user } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="form-mail">
      {isLoading ? <Loading /> : ""}
      <div className="img">
        <img src={user.picture} alt="" />
      </div>
      <h2>Xin chào {user.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={user.email}
        />
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
