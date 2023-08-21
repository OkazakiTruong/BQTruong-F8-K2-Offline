//exercise 01
console.log("Exercise 01");
const errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

const getError = function (field) {
  return errors[field] ? Object.values(errors[field])[0] : "No Error";
};

console.log(getError("name"));

//exercise 02
console.log("");
console.log("Exercise 02: ");
const Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: "20", address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const createCustomers = function (customers) {
  return customers.map(function (customer) {
    if (
      typeof customer.name !== "string" ||
      typeof customer.age !== "number" ||
      typeof customer.address !== "string"
    ) {
      customer.error = "giá trị nhập vào không chính xác!!!";
      return customer;
    } else {
      customerNameArr = customer.name.split(" ");
      customer.shortName =
        customerNameArr[0] + " " + customerNameArr[customerNameArr.length - 1];
      return customer;
    }
  });
};

let result = createCustomers(customers);
console.log(result);

//exercise 03
console.log(" ");
console.log("Exercise 03: ");

const Users = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};

const users = [];
//register function
const register = function (name, password, email) {
  if (
    typeof name !== "string" ||
    name === "" ||
    password === "" ||
    typeof email !== "string" ||
    email === "" ||
    !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    )
  ) {
    console.log(
      "Dữ liệu nhập vào không hợp lệ!!! Tạo user mới không thành công!!!!"
    );
  } else {
    let user = new Users(name, password, email);
    user.role = "user";
    users.push(user);
    console.log("Tạo mới user thành công!!!");
  }
};
register("Nguyên Văn A", 11111, "nva@gmail.com");
register("Nguyên Văn B", 12345, "nvb@gmail.com");
register("Nguyên Văn C", 98765, "nvc@gmail.com");
register("", 98765, "nvc@gmail.com");
register("", 98765, "nvc");

console.log(users);

//login function
const login = function (email, password) {
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      return users[i];
    }
  }
  return "Đăng nhập thất bại!!! Thông tin đăng nhập không hợp lệ!!!";
};

let loginData1 = login("nva@gmail.com", 11111);
console.log(loginData1);
let loginData2 = login("nva@gmail.com", 111112);
console.log(loginData2);
