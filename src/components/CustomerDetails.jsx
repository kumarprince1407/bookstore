import React, { useState } from "react";
import { TextField, Grid, Button, Typography, InputBase } from "@mui/material";
import FormControl from "@mui/material/FormControl";

import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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
        <Grid item>
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "390px" }}
          >
            <h3>Personal Details</h3>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "445px" }}
          >
            Full Name
          </Typography>
          <InputBase
            id="fullName"
            label="Enter Full Name"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "lightgray",
              height: "40px",
              border: "1px solid gray",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "460px" }}
          >
            Email Id
          </Typography>
          <InputBase
            id="email"
            label="Enter Email"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "lightgray",
              height: "40px",
              border: "1px solid gray",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "450px" }}
          >
            Password
          </Typography>
          <InputBase
            id="password"
            label="Enter Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{
              backgroundColor: "lightgray",
              height: "40px",
              border: "1px solid gray",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "410px" }}
          >
            Mobile Number
          </Typography>
          <InputBase
            id="phone"
            label="Enter Phone"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "lightgray",
              height: "40px",
              border: "1px solid gray",
            }}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid item container justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "250px" }}
          >
            <h5>Address Details</h5>
          </Typography>
          <button
            style={{
              marginTop: "25px",
              height: "30px", // Adjust the height as needed
              color: "brown", // Set the text color to brown
              backgroundColor: "transparent", // Set the background color to transparent
              border: "1px solid black", // Remove the button border
              cursor: "pointer", // Add pointer cursor on hover
            }}
          >
            Add New Address
          </button>
        </Grid>
      </Grid>
      <Grid
        container
        className="cxDetailsContainer3"
        sx={{
          justifyontent: "center",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
          width: "512px",
          height: "600px",
          gap: 1, // Adjust the gap value to reduce vertical spacing
        }}
      >
        <Grid item>
          <h3 style={{ marginRight: "450px" }}>1.Work</h3>
        </Grid>
        <Grid item container justifyContent="space-between">
          <Grid item>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0px", marginTop: 0, marginRight: "445px" }}
            >
              Address
            </Typography>
            <InputBase
              id="address"
              label="Enter Address"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "lightgray",
                height: "40px",
                border: "1px solid gray",
              }}
            />
          </Grid>
        </Grid>
        {/* New Grid for Input 1 and Input 2 */}
        <Grid container justifyContent="space-between">
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "445px" }}
          >
            City/Town
          </Typography>
          <InputBase
            id="input1"
            label="Input 1"
            variant="outlined"
            sx={{
              backgroundColor: "lightgray",
              height: "40px",
              border: "1px solid gray",
              width: "150px",
            }}
          />

          <InputBase
            id="input2"
            label="Input 2"
            variant="outlined"
            sx={{
              backgroundColor: "lightgray",
              height: "40px",
              border: "1px solid gray",
              width: "150px",
              marginRight: "16px",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            sx={{ marginBottom: "0px", marginTop: 0, marginRight: "480px" }}
          >
            Type
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="type"
              name="type"
              defaultValue="option1" // We can set the default selected option
            >
              <FormControlLabel
                value="home"
                control={<Radio color="primary" />}
                label="Home"
                sx={{ marginRight: "50px" }}
              />
              <FormControlLabel
                value="work"
                control={<Radio color="primary" />}
                label="Work"
                sx={{ marginRight: "50px" }}
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomerDetails;
