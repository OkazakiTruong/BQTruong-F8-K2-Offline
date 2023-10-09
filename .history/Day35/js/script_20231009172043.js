const getUsers = async () => {
  let response = await fetch(`https://zg8v69-8080.csb.app/users`);
  //   console.log(response.json())
  let users = await response.json();
  console.log(users);
};
getUsers();
