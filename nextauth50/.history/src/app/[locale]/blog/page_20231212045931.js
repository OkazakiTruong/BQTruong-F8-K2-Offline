import React from "react";
import { getTranslations, getLocale } from "next-intl/server";
export default async function Blog() {
  const t = await getTranslations("Contact");
  return (
    <div className="max-w-[1250px] px-[25px] mx-auto mt-[160px]">
      <h1 className="text-center text-2xl">
        Đang trong quá trình phát triển...
      </h1>
    </div>
  );
}
