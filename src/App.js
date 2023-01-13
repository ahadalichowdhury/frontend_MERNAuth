import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../src/components/login/Login";
import Register from "../src/components/register/Register";
import ForgetPassword from "../src/components/forgetPassword/ForgetPassword";
import Private from "../src/components/private/Private";
import ResetPassword from "../src/components/resetPassword/ResetPassword";

//private route
import PrivateRoute from "../src/components/routing/PrivateRoute";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      <Route
        path="/resetpassword/:resetToken"
        element={<ResetPassword />}
      ></Route>
      <Route path="/" exact element={<PrivateRoute />}>
        <Route path="/" element={<Private />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
