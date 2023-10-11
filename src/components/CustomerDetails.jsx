import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const CustomerDetails = () => {
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
      //const response = await userSignup(data);
      //console.log(response);
    }
    console.log(data);
  };

  return (
    <Grid
      container
      className="cxDetailsContainer1"
      sx={{
        justifyontent: "center",
        gap: 2,
        flexDirection: "column",
        width: "1366px",
        height: "1032",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Grid
        container
        className="cxDetailsContainer2"
        sx={{
          justifyontent: "center",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
          width: "512px",
          height: "336px",
          gap: 1, // Adjust the gap value to reduce vertical spacing
        }}
      >
        <p>Full Name</p>
        <TextField
          id="fullName"
          label="Enter Full Name"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "lightgray" }}
        />

        <TextField
          id="email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "lightgray" }}
        />
        <TextField
          id="password"
          label="Enter Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ backgroundColor: "lightgray" }}
        />
        <TextField
          id="phone"
          label="Enter Phone"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "lightgray" }}
        />
      </Grid>
    </Grid>
  );
};

export default CustomerDetails;
