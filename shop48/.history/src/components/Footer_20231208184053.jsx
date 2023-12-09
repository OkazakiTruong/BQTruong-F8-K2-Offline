"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-xs pl-6 pr-6 pt-16 grid grid-cols-2 gap-10 md:grid-cols-2 md:text-base lg:grid-cols-4">
      <div>
        <h2 className="font-bold text-xl mb-8">Stravel</h2>
        <div>
          Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của Mình
          Với Thông Điệp “Nâng Tầm Trải Nghiệm Từng Chuyến Đi”
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-4">Chi nhánh chính</h2>
        <ul>
          <li>Hà Nội</li>
          <li>Ấn độ</li>
          <li>Mỹ</li>
          <li>Nhật bản</li>
          <li>Pháp</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-4">Chuyển hướng</h2>
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
        <h2 className="font-bold text-xl mb-4">Tương tác</h2>
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
