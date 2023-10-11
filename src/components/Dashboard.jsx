import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Skeleton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import FormControl from "@mui/material/FormControl";
import Header from "./Header";
import { Router } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
