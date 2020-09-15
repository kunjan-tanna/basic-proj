import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, userInfo, ...rest }) => {
   return (
      <Route
         {...rest}
         render={(props) => {
            console.log("Propssssssssss", userInfo);
            if (userInfo) {
               if (userInfo.role && userInfo.role === "user") {
                  return <Component {...props} />;
               } else {
                  return <Redirect to="/login" />;
               }
            } else {
               return <Redirect to="/login" />;
            }
         }}
      />
   );
};

export default PrivateRoute;
