"use client";
export default function Footer() {
  return (
    <footer className=" bg-grey-900 p-6 grid grid-cols-1 gap-6 md:grid-cols-2 ">
      <div>
        <h2 className="font-bold text-xl">Stravel</h2>
        <div>
          Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của Mình
          Với Thông Điệp “Nâng Tầm Trải Nghiệm Từng Chuyến Đi”
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl">Chi nhánh chính</h2>
        <ul>
          <li>Hà Nội</li>
          <li>Ấn độ</li>
          <li>Mỹ</li>
          <li>Nhật bản</li>
          <li>Pháp</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl">Chuyển hướng</h2>
        <ul>
          <li>Trang chủ</li>
          <li>Đặt lịch</li>
          <li>Ưu Đãi</li>
          <li>Dịch vụ</li>
          <li>Thư viện</li>
          <li>Đánh giá</li>
          <li>Liên hệ</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl">Tương tác</h2>
        <ul>
          <li>Trang chủ</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </footer>
  );
}
