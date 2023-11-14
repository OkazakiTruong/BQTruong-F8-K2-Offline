import React from "react";

export default function FormMail() {
  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_bkmi1ox",
        "service_bkmi1ox",
        e.target,
        "YOUR_PUBLIC_KEY"
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

  return (
    <form onSubmit={() => handleSubmit()}>
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
  );
}
