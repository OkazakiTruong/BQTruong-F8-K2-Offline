import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithPopup } = useAuth0();
  return (
    <>
      <p>
        Chào mừng bạn đến với F8 <br />
        Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi tại
        đây
      </p>
      {console.log(window.location.origin)}
      <button onClick={() => loginWithPopup()}>Đăng nhập || Đăng ký</button>
    </>
  );
}
