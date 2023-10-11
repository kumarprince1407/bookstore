import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../components/Dashboard";
import Login2 from "../pages/SigninSignup/Login2";
import Signup2 from "../pages/SigninSignup/Signup2";
// import SignCombined from "../pages/SigninSignup/SignCombined";
//Add admin route later on

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Login2 />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup2 />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
