import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, userInfo, ...rest }) => {
   return (
      <Route
         {...rest}
         render={(props) => {
            console.log("Propssssssssss", userInfo);
            if (userInfo) {
               if (userInfo.role && userInfo.role === "admin") {
                  return <Component {...props} />;
               } else {
                  return <h2>You're not admin</h2>;
               }
            } else {
               return <Redirect to="/login" />;
            }
         }}
      />
   );
};

export default AdminRoute;
