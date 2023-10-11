//userService.jsx
import axios from "axios";

const headerConfig = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
};

export let userSignIn = async (data) => {
  let response = await axios.post(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
    data
  );
  console.log(response);
  return response;
};

export let userSignup = async (data) => {
  let response = await axios.post(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",
    data
  );
  console.log(data);
  return response;
};

//Update User - Do it later
// export let updateUser = async (data) => {
//   let response = await axios.post;
// };
