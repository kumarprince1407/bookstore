import React, { useEffect } from "react";
import { Grid, Container, Paper } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
import SignCombinedImage from "../../Images/SignCombined.png";

const SignCombined = ({ page, pageChange }) => {
  useEffect(() => {
    if (window.location.href.includes("login")) {
      pageChange(false);
    } else if (window.location.href.includes("signup")) {
      pageChange(true);
    }
  }, []);
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{ justifyContent: "center", my: 10 }}
        className="signform"
      >
        <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
          <Paper
            sx={{
              marginTop: 3,
              width: 320,
              height: 390,
              borderRadius: "20px 0px 0px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 5,
            }}
            elevation={5}
          >
            <img
              src={SignCombinedImage}
              alt=""
              srcSet=""
              style={{ width: "245px", borderRadius: "50%" }}
            />
            <p
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                paddingLeft: "35px",
              }}
            >
              {" "}
              Online Book Shopping
            </p>
          </Paper>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default SignCombined;
