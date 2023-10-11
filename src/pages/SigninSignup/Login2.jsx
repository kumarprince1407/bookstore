import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { userSignIn } from "../../services/userService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signup2 from "./Signup2";
import SignCombine from "../../Images/SignCombined.png";

const Login2 = () => {
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

  //Initialize state variables using the useState hook for data
  const [data, setData] = useState({ email: "", password: "" });

  //Create a change function to handle changes in the input fields:
  const change = (event) => {
    setData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  //Initialize state variables using the useState hook for error
  const [error, setError] = useState({
    EmailTrue: false,
    EmailError: "",
    PasswordTrue: false,
    PasswordError: "",
  });

  //Uncomment later on
  // const navigate = useNavigate();

  //Creating a submit function to handle form submission:
  const submit = async (event) => {
    event.preventDefault(); //// Prevent the default form submission behavior

    //// Validating the user's email and password using regular expressions
    let emailTesting = emailRegex.test(data.email);
    let passwordTesting = passwordRegex.test(data.password);

    //If email is invalid, set an error message
    if (emailTesting === false) {
      setError({
        EmailTrue: true,
        EmailError: "Please enter a valid email address!",
      });
    } else if (passwordTesting === false) {
      //If password is invalid, set an error message
      setError({
        PasswordTrue: true,
        PasswordError: "Please enter a valid password!",
      });
    }
    // If both email and password are valid, proceed with form submission
    if (emailTesting === true && passwordTesting === true) {
      console.log(data); // Log the user's data
      const response = await userSignIn(data); // Call the signIn function for authentication
      console.log(response); // Log the authentication response
      localStorage.setItem("token", response.data.id); //Check- Stores an authentication token - read about it

      //Uncomment later on
      //navigate("/dashboard");
    }

    console.log(data); //Log the user's data again
  };
  return (
    <Grid
      container
      className="loginContainer1"
      sx={{
        justifyContent: "center",
        gap: 2,
        flexDirection: "row",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      {/* <Grid container className="imageContainer">
        <img
          src={SignCombine}
          alt="CombineImage"
          style={{ width: "350px", height: "350px" }}
        />
      </Grid> */}
      <Grid
        container
        className="loginContainer2"
        sx={{
          justifyContent: "center",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          width: "400px",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <h3>LOGIN</h3>
          <button
            id="loginbutton1"
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "white",
              color: "black",
              marginTop: "8px",
              border: "none", // Add this line to remove the border
            }}
          >
            <h3>SIGNUP</h3>
          </button>
        </Grid>
        <Grid item>
          <p>Email ID</p>
          <TextField
            id="email"
            label="Enter Email"
            variant="outlined"
            //onChange={change}
            fullWidth
            error={error.EmailTrue}
            helperText={error.EmailError}
          />
        </Grid>
        <Grid item>
          <p>Password</p>
          <TextField
            id="password"
            label="Enter password"
            variant="outlined"
            //onChange={change}
            fullWidth
            error={error.PasswordTrue}
            helperText={error.PasswordError}
            type="password"
          />
        </Grid>
        <Grid item>
          <button
            onClick={submit}
            style={{
              width: "210px", // Adjust the width as needed
              height: "50px", // Adjust the height as needed
              backgroundColor: "red",
              color: "white", // Text color
            }}
          >
            Login
          </button>
        </Grid>
        <Grid>
          <Divider
            sx={{ marginTop: "26px", marginBottom: "20px", width: "50%" }}
          >
            OR
          </Divider>
        </Grid>
        <Grid>
          <button
            style={{
              width: "95px", // Adjust the width as needed
              height: "40px", // Adjust the height as needed
              backgroundColor: "blue",
              color: "white", // Text color
              marginRight: "10px",
            }}
          >
            Facebook
          </button>
          <button
            style={{
              width: "95px", // Adjust the width as needed
              height: "40px", // Adjust the height as needed
              backgroundColor: "gray",
              color: "white", // Text color
            }}
          >
            Google
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login2;
