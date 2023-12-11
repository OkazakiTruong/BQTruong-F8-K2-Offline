import { Link } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
export default function HomeProject() {
  const t = useTranslations("HomeProject");
  return (
    <div className="flex flex-col items-center w-full border p-[10px] px-[40px] rounded-[10px] shadow-xl">
      <h2 className="text-2xl my-[26px] font-bold">{t("projectHeading")}</h2>
      <div className="w-full mb-[20px]">
        <h3 className="text-xl font-bold mb-[20px]">Project Trello</h3>
        <p className="mb-[10px]">
          Một dự án nhỏ được viết với react <br />
          Một trang web đơn giản cho phép quản lý task. Sử dụng ReactJs
        </p>
        <div className="flex gap-x-[20px] font-bold text-sky-500">
          <Link href="https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day47_2/Trello">
            Demo
          </Link>
          <Link href="https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day47_2/Trello">
            Code
          </Link>
        </div>
      </div>
      <div className="w-full mb-[20px]">
        <h3 className="text-xl font-bold mb-[20px]">Project Trello</h3>
        <p className="mb-[10px]">
          Một dự án nhỏ được viết với react <br />
          Một trang web đơn giản cho phép quản lý task. Sử dụng ReactJs
        </p>
        <div className="flex gap-x-[20px] font-bold text-sky-500">
          <Link href="https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day47_2/Trello">
            Demo
          </Link>
          <Link href="https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day47_2/Trello">
            Code
          </Link>
        </div>
      </div>
      <div className="w-full mb-[20px]">
        <h3 className="text-xl font-bold mb-[20px]">Project Trello</h3>
        <p className="mb-[10px]">
          Một dự án nhỏ được viết với react <br />
          Một trang web đơn giản cho phép quản lý task. Sử dụng ReactJs
        </p>
        <div className="flex gap-x-[20px] font-bold text-sky-500">
          <Link href="https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day47_2/Trello">
            Demo
          </Link>
          <Link href="https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day47_2/Trello">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}
