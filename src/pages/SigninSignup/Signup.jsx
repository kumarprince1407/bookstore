import React, { useState } from "react";
import "./Signup.css";

import { TextField, Grid, Button, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login.css";
import { Link as Linky } from "react-router-dom";
import { userSignup } from "../../services/userService";

//add admin

const Signup = ({ pageChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  //Defining regular expressions for email and password validation:
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  const phoneRegex = /^(\+91|0)?[6789]\d{9}$/;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [checkError, setCheckError] = useState({
    fullNameTrue: false,
    fullNameError: "",
    EmailTrue: false,
    EmailError: "",
    PasswordTrue: false,
    PasswordError: "",
    PhoneTrue: false,
    PhoneError: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const onSignUp = async (event) => {
    event.preventDefault();

    let emailTesting = emailRegex.test(data.email);
    let passwordTesting = passwordRegex.test(data.password);
    let phoneTesting = phoneRegex.test(data.phone);

    if (emailTesting === false) {
      setCheckError({
        EmailTrue: true,
        EmailError: "Please enter a valid email",
      });
    } else if (passwordTesting === false) {
      setCheckError({
        PasswordTrue: true,
        PasswordError: "Please enter a valid password.",
      });
    } else if (phoneTesting === false) {
      setCheckError({
        PhoneTrue: true,
        PhoneError: "Please enter a valid Phone number.",
      });
    }
    if (
      emailTesting === true &&
      passwordTesting === true &&
      phoneTesting === true
    ) {
      if (window.location.href.includes("signup")) {
        let response = await userSignup(data);
        console.log(response);
      }
      //Add admin signup later on
    }
  };
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        gap: 2,
        flexDirection: "column",
        alignItems: "center",
        py: 2,
      }}
    >
      <Grid container sx={{ justifyContent: "center", gap: 12 }}>
        <Grid
          item
          onClick={() => {
            pageChange(false);
          }}
          className="Login-link"
        >
          <Link
            component={Linky}
            to={
              window.location.href.includes("admin-signup")
                ? "/admin-login"
                : "/signin"
            }
            sx={{
              textDecoration: "none",
              fontSize: "25px",
              color: "#878787",
              fontWeight: "bold",
            }}
          >
            LOGIN
          </Link>
        </Grid>
        <Grid item className="Signup-link active">
          <Link
            sx={{
              fontSize: "25px",
              color: "#0A0102",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            SIGNUP
          </Link>
        </Grid>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ fontSize: "10px" }}>Full Name</label>
          <TextField
            id="fullName"
            sx={{ width: "252px", height: "35px" }}
            inputProps={{
              style: {
                padding: 6,
              },
            }}
            value={data.fullName}
            onChange={handleChange}
            // error={checkError.fullNameTrue}
            // helperText={checkError.fullNameError}
          />
        </div>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ fontSize: "10px" }} htmlFor="email">
            Email Id
          </label>
          <TextField
            id="email"
            name="email"
            sx={{ width: "252px", height: "35px" }}
            inputProps={{
              style: {
                padding: 6,
              },
            }}
            value={data.email}
            onChange={handleChange}
            error={checkError.EmailTrue}
          />
          {checkError.EmailTrue && (
            <div style={{ fontSize: "12px", color: "red" }}>
              {checkError.EmailError}
            </div>
          )}
        </div>
      </Grid>
      <Grid item sx={{ marginTop: "3px", marginBottom: "14px" }}>
        <FormControl
          sx={{ m: 1, width: "252px", height: "35px" }}
          variant="outlined"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label style={{ fontSize: "10px" }} htmlFor="passwordInput">
              Password
            </label>
            <OutlinedInput
              value={data.password}
              onChange={handleChange}
              error={checkError.PasswordTrue}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    //Check
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              inputProps={{
                style: {
                  padding: 6,
                },
              }}
            />
            {checkError.PasswordTrue && (
              <div style={{ fontSize: "12px", color: "red" }}>
                {checkError.PasswordError}
              </div>
            )}
          </div>
        </FormControl>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ fontSize: "10px" }}>Mobile Number</label>
          <TextField
            id="phone"
            sx={{ width: "252px", height: "35px" }}
            inputProps={{
              style: {
                padding: 6,
              },
            }}
            value={data.phone}
            onChange={handleChange}
            error={checkError.phoneTrue}
          />
          {checkError.phoneTrue && (
            <div style={{ fontSize: "12px", color: "red" }}>
              {checkError.phoneError}
            </div>
          )}
        </div>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{ width: "252px", backgroundColor: "#A03037" }}
          onClick={onSignUp}
        >
          Signup
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
