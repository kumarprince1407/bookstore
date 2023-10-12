import React from "react";
import Login from "./pages/SigninSignup/Login";
import Router from "./router/Router";
import Login2 from "./pages/SigninSignup/Login2";
import Signup2 from "./pages/SigninSignup/Signup2";
import Book from "./components/Book";
import Dashboard from "./components/Dashboard";
import CustomerDetails from "./components/CustomerDetails";
import Success from "./pages/Successful/Success";
// import BookCard from "./components/BookCard";

function App() {
  return (
    <div>
      {/* <Login2 /> */}
      {/* <Dashboard /> */}
      {/* <Login2 /> */}
      {/* <Signup2 /> */}

      {/* <Book /> */}
      {/* <CustomerDetails /> */}
      {/* <Success /> */}
      <Router />
    </div>
  );
}

export default App;
