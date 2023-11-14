import React from "react";

export default function FormMail() {
  const handleSubmit = () => {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log("Gửi email thành công!");
    }, (error) => {
        console.log("Thất bại");
    });
};
  };
  return (
    <form onSubmit={() => handleSubmit}>
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
