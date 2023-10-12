import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import OrderSuccess from "../../Images/ordersuccess.png";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <Grid
      container
      sx={{ flexDirection: "column", alignItems: "center", m: 2 }}
    >
      {/* m: 2: This style adds margin spacing around the Grid container.
       The 2 is a shorthand for specifying margin on all sides,
       providing a margin of theme.spacing(2) */}
      <Grid item>
        <img src={OrderSuccess} alt="Order Successful" />
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            textAlign: "center",
            fontSize: 18,
          }}
          component="div"
        >
          {/* By default, the Typography component in Material-UI renders as a p
        (paragraph) element. However, ywe can use the component prop to change
        it to other HTML elements like div, span, or any other valid HTML
        element. */}
          Hurray!! Your order is confirmed.
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18 }}
            component="div"
          >
            The order id is #8796938326. Please save the order id <br />
            for further communication
          </Typography>
        </Typography>
      </Grid>
      <Grid item sx={{ my: 5 }}>
        <table
          style={{
            borderCollapse: "collapse",
            borderColor: "#DCDCDC",
            border: "1px solid #DCDCDC",
          }}
        >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <td style={{ padding: 10, borderRadius: "none" }}>Email us</td>
              <td style={{ padding: 10, borderRight: "none" }}>Contact us</td>
              <td style={{ padding: 10 }}>Address</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ verticalAlign: "top" }}>
              <td style={{ padding: 30, border: "1px solid #DCDCDC" }}>
                admin@bookstore.com
              </td>
              <td style={{ padding: 30, border: "1px solid #DCDCDC" }}>
                +91-8210683220
              </td>
              <td style={{ padding: 30, border: "1px solid #DCDCDC" }}>
                42, 14th Main, 15th Cross, Sector 4, opp to BDA COmplex, near
                Kumarakom restaurant, HSR Layout, Banglalore 560034
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
      {/* Add Link after routing */}
      {/* <Link to="/"> */}
      <Button
        variant="contaiened"
        color="primary"
        sx={{
          backgroundColor: "blue",
          color: "white",
          "&:hover": {
            backgroundColor: "blue", //Set the hover background color to the same as default color
          },
        }}
      >
        Continue Shopping
      </Button>
      {/* </Link> */}
    </Grid>
  );
};

export default Success;
