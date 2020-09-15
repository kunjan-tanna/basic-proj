import axios from "../../../configs/axiosConfig";
import { history } from "../../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Redirect, Link } from "react-router-dom";
import React, { Component } from "react";

//Create Add User
export const RegUsers = (data) => async (dispatch) => {
   console.log("ADD USER", data);
   const bodyFormData = new FormData();
   bodyFormData.append("firstName", data.firstName);
   bodyFormData.append("lastName", data.lastName);
   bodyFormData.append("email", data.email);
   bodyFormData.append("password", data.password);
   bodyFormData.append("address", data.address);
   bodyFormData.append("mobile", data.mobile);
   bodyFormData.append("avtar", data.avtar);
   // bodyFormData.append('status',data.status)
   const res = await axios.post("create/users", bodyFormData);
   console.log("ADD USER=======", res);
   return res;
};

export const loginWithJWT = (user) => {
   return (dispatch) => {
      axios
         .post("/signin", {
            email: user.email,
            password: user.password,
         })
         .then((response) => {
            let userInfo = response.data.user;
            // console.log("Login DATA", this.props);
            if (userInfo) {
               dispatch({
                  type: "LOGIN_WITH_JWT",
                  payload: {
                     userInfo,
                     accessToken: response.data.token,
                  },
               });
               // console.log("Sucess");
               toast.success("Login Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  if (userInfo.role && userInfo.role === "admin") {
                     history.push("/admin-dashboard");
                  } else {
                     history.push("/user-dashboard");
                  }
               }, 2000);
            } else {
               // console.log("Sucess");
               toast.success("User email & password doesn't match", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("User email & password doesn't match", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
};

//Logout Action
export const logout = () => {
   return (dispatch) => {
      dispatch({ type: "LOGOUT" });
   };
};

//To Change Role
export const changeRole = (role) => {
   return (dispatch) => dispatch({ type: "CHANGE_ROLE", userRole: role });
};

//Create Forgot Password
export const forgotPass = (data) => async (dispatch) => {
   // console.log("ADD LEAD",data)
   let obj = {
      email: data.email,
   };
   // console.log('OBJ',obj)
   const res = await axios.put("/forgotpassword", obj);
   // console.log('Response',res)
   return res;
};

//Create Reset Password
export const resetPass = (data) => async (dispatch) => {
   // console.log("ADD LEAD",data)
   const res = await axios.put("/resetpassword", data);
   // console.log('Response',res)
   return res;
};
//Update the User
export const UpdateUsers = (id, data) => async (dispatch) => {
   console.log("ADD USER", data);
   const bodyFormData = new FormData();
   bodyFormData.append("userId", data._id);
   bodyFormData.append("status", data.status);
   bodyFormData.append("firstName", data.firstName);
   bodyFormData.append("lastName", data.lastName);
   bodyFormData.append("email", data.email);
   bodyFormData.append("address", data.address);
   bodyFormData.append("mobile", data.mobile);
   bodyFormData.append("avtar", data.avtar);
   const res = await axios.put(`edit/users/${id}`, bodyFormData);
   console.log("Update USER=======", res);
   return res;
};
//Get Update By ID
export const getUpdateById = (id) => async (dispatch) => {
   //console.log("LEADContact ID1",id)
   const res = await axios.get(`/get/users/${id}`);
   // console.log("--RES",res)
   return res;
};
