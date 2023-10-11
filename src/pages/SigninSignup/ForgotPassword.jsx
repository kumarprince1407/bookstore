import { Box, Grid, TextField, Typography, Button } from "@mui/material";

import React from "react";

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        my: 4, // It sets margin properties for the element. In this case, my: 4 sets margin on the top
        //and bottom of the element, providing spacing or separation from neighboring elements.
        //The value "4" is often a predefined spacing value in styling libraries, representing a certain
        // unit of spacing (e.g., pixels or theme-specific units).
      }}
    >
      {/* { py: 3 }, which is an object specifying the styling properties. Here, py stands for 
        "padding on the y-axis" (vertical padding), and 3 represents a specific spacing value.
        py: This property is used to set padding on the top and bottom (y-axis) of the element. */}
      <Grid sx={{ py: 3 }}>
        <Typography variant="h5" color="initial" sx={{ fontWeight: "bold" }}>
          Forgot your Password
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          border: "1px solid #E4E4E4",
          borderRadius: "4px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: 425,
        }}
      >
        {/* p: This property is used to set padding on all four sides (top, right, bottom, and left) of the element.
      6: This value is typically used in Material-UI's styling system to represent a spacing value. */}
        <Grid item sx={{ p: 6 }}>
          <Typography variant="body1" sx={{ color: "#878787" }}>
            Enter your email address to reset your password
          </Typography>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              my: 3,
            }}
          >
            <label htmlFor="emailid">Email address</label>
            <TextField
              fullWidth
              inputProps={{ style: { padding: 5 } }}
              id="emailid"
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#A03037", textTransform: "none" }}
            fullWidth
          >
            Reset PassWord
          </Button>
        </Grid>
        <Button
          variant="contained"
          sx={{
            p: 3,
            backgroundColor: "#F9F9F8",
            color: "black",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#F9F9F8" },
          }}
        >
          Create Account
        </Button>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;
