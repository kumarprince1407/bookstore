import React, { useState } from "react";
import BookImage from "../Images/Book.png";
import { TextField, Grid, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
const Book = () => {
  return (
    <Grid
      container
      className="bookContainer1"
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
        className="bookContainer2"
        sx={{
          justifyContent: "center",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          width: "240px",
          marginTop: "5px",
          padding: "1px",
        }}
      >
        <Grid item>
          <img
            src={BookImage}
            alt="Book"
            style={{ width: "110px", height: "130px", marginTop: "5px" }}
          />
        </Grid>

        <Grid item>
          <Typography>
            <h4>Don't Make Me think</h4>
            <p>by Stevan Krug</p>
            <p>
              Rs. 1500{" "}
              <span style={{ textDecoration: "line-through" }}> Rs. 2000</span>
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Book;
