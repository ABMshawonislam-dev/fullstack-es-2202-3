import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Alert, Space } from "antd";
import axios from "axios";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "../pages/Registration";
import OtpVarifucation from "../pages/OtpVarifucation";
import Login from "../pages/Login";
import EmaillVerifyLink from "../pages/EmaillVerifyLink";
import ForgotPass from "../pages/ForgotPass";
import NewPassword from "../pages/NewPassword";
import Dashboard from "../pages/Dashboard";
import AddCategory from "../pages/AddCategory";
import AddSubCategory from "../pages/AddSubCategory";
import ViewCategory from "../pages/ViewCategory";
import AddProduct from "../pages/AddProduct";
import ViewProduct from "../pages/ViewProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/newpass/:token" element={<NewPassword />} />
      <Route path="/emailverification/:token" element={<EmaillVerifyLink />} />
      <Route path="/otpverification/:email" element={<OtpVarifucation />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="addcategory" element={<AddCategory />} />
        <Route path="addsubcategory" element={<AddSubCategory />} />
        <Route path="viewcategory" element={<ViewCategory />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="viewproduct" element={<ViewProduct />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
