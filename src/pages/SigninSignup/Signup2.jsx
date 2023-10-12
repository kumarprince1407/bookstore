import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { userSignIn, userSignup } from "../../services/userService";
import { Link, useNavigate } from "react-router-dom";

const Signup2 = () => {
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  const phoneRegex = /^(\+91|0)?[6789]\d{9}$/;

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [checkError, setCheckError] = useState({
    FullNameTrue: false,
    FullNameError: "",
    EmailTrue: false,
    EmailError: "",
    PasswordTrue: false,
    PasswordError: "",
    PhoneTrue: false,
    PhoneError: "",
  });

  //Uncomment later on
  const navigate = useNavigate();

  //Create a change function to handle changes in the input fields:
  const change = (event) => {
    setData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    let emailTesting = emailRegex.test(data.email);
    let fullNameTesting = nameRegex.test(data.fullName);
    let passwordTesting = passwordRegex.test(data.password);
    let phoneTesting = phoneRegex.test(data.phone);

    if (emailTesting === false) {
      setCheckError({
        EmailTrue: true,
        EmailError: "Please enter a valid email address",
      });
    } else if (fullNameTesting === false) {
      setCheckError({
        FullNameTrue: true,
        FullNameError: "Please enter a valid full name",
      });
    } else if (passwordTesting === false) {
      setCheckError({
        PasswordTrue: true,
        PasswordError: "Please enter a valid password",
      });
    } else if (phoneTesting === false) {
      setCheckError({
        PhoneTrue: true,
        PhoneError: "Please enter a valid phone  number",
      });
    }
    if (
      fullNameTesting === true &&
      emailTesting === true &&
      passwordTesting === true &&
      phoneTesting === true
    ) {
      console.log(data);
      const response = await userSignup(data);
      console.log(response);
    }
    console.log(data);
  };

  return (
    <Grid
      container
      className="signupContainer1"
      sx={{
        justifyContent: "center",
        gap: 2,
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Grid
        container
        className="signupContainer2"
        sx={{
          justifyContent: "center",

          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          width: "400px",
          marginTop: "5px",
          paddingBottom: "1px",
          gap: 1, // Adjust the gap value to reduce vertical spacing
        }}
      >
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <button
            id="loginbutton1"
            onClick={() => navigate("/")}
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "white",
              color: "black",
              marginTop: "8px",
              border: "none", // Add this line to remove the border
            }}
          >
            <h3>LOGIN</h3>
          </button>

          <h3>SIGNUP</h3>
        </Grid>
        <Grid item>
          <p>Full Name</p>
          <TextField
            id="fullName"
            label="Enter Full Name"
            variant="outlined"
            //onChange={change}
            fullWidth
            error={checkError.FullNameTrue}
            helperText={checkError.FullNameError}
            sx={{
              height: "30px", // Adjust the height value as needed
            }}
          />
        </Grid>
        <Grid item>
          <p>Email ID</p>
          <TextField
            id="email"
            label="Enter Email ID"
            variant="outlined"
            //onChange={change}
            fullWidth
            error={checkError.EmailTrue}
            helperText={checkError.EmailError}
            sx={{
              height: "30px", // Adjust the height value as needed
            }}
          />
        </Grid>
        <Grid item>
          <p>Password</p>
          <TextField
            id="password"
            label="Enter Password"
            variant="outlined"
            type="password"
            //onChange={change}
            fullWidth
            error={checkError.PasswordTrue}
            helperText={checkError.PasswordError}
            sx={{
              height: "30px", // Adjust the height value as needed
            }}
          />
        </Grid>
        <Grid item>
          <p>Mobile Number</p>
          <TextField
            id="phone"
            label="Enter Mobile Number"
            variant="outlined"
            //onChange={change}
            fullWidth
            error={checkError.PhoneTrue}
            helperText={checkError.PhoneError}
          />
        </Grid>
        <Grid item sx={{ paddingBottom: "5px" }}>
          <button
            onClick={submit}
            id="signupbutton2"
            style={{
              width: "210px",
              height: "35px",
              backgroundColor: "#A03037",
              color: "white",
            }}
          >
            Signup
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Signup2;
