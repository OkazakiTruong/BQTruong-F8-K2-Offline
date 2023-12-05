import React from "react";
import "./ui/style.scss";
import { appWithTranslation } from "next-i18next";

const page = () => {
  return <div>Xin chào</div>;
};
export default appWithTranslation(page);
