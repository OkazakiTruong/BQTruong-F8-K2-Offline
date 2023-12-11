import { useTranslations } from "next-intl";
export default function HomeInformation() {
  const t = useTranslations("HomeInformation");
  return (
    <div className="max-w-[320px]">
      <div className="w-[320px] h-[320px] flex justify-center items-center  rounded-[10px] overflow-hidden">
        <img
          src="/img/avatar.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[10px] hover:scale-125 transition-all shadow-xl"
        />
      </div>
      <p className="text-center">{"Web developer"}</p>
      <div className="mb-[40px]">
        <h3 className="text-2xl font-bold">{t("skillSubHead1")}</h3>
        <div className="pl-[10px]">
          <p>
            <b>{t("skillSubHead1")}: </b>
            {t("skillTitle1")}
          </p>
        </div>
        <hr className="pb-[10px]" />
        <div className="pl-[10px]">
          <p>
            <b>{t("skillSubHead2")}: </b> Có khả năng tư duy ở mức khá, Có khả
            năng tự học và tìm kiếm thông tin, Có khả năng làm việc nhóm
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Histories</h3>
        <div className="pl-[10px]">
          <p>
            <b>2016-2019:</b> Học cấp 3 tại trường cấp 3 trung học phổ thông
            Quất Lâm
          </p>
        </div>
        <hr className="pb-[10px]" />
        <div className="pl-[10px]">
          <p>
            <b>2019-hiện tại :</b> Học đại học tại đại học Mở Hà Nội
          </p>
        </div>
      </div>
    </div>
  );
}
