import React from "react";

export default function FormMail() {
  const handleSubmit = () => {};
  return (
    <form onSubmit={() => handleSubmit}>
      FormMail
      <input type="email" placeholder="Enter your email" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your message"
      ></textarea>
      <button>Tôi cần hỗ trợ bài tập</button>
    </form>
  );
}
