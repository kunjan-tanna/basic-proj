import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import Menu from "./navbar/menu";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
//user Dashboard
import UserDashboard from "./views/pages/UserDashboard/UserDashboard";

//Update the user
import UpdateUser from "./views/pages/UserDashboard/UpdateUser";

//admin Dashboard
import AdminDashboard from "./views/pages/AdminDashboard/AdminDashboard";

//Covid'19 Traceker
import CovidTracker from "./views/pages/CovidTracker/CovidTracker";

//Home Dashboard
import Home from "./views/pages/UserDashboard/Home";
//Authentication
import Login from "./views/pages/authentication/Login";
import Register from "./views/pages/authentication/Register";
import ForgotPassword from "./views/pages/authentication/ForgotPassword";
import ResetPassword from "./views/pages/authentication/ResetPassword";

class Routes extends Component {
   render() {
      console.log("Routes", this.props);
      return (
         <div>
            <Router history={history}>
               <Menu />
               <Switch>
                  <Route exact path="/" component={Home} />

                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route path="/forgotpassword" component={ForgotPassword} />
                  <Route path="/resetpassword" component={ResetPassword} />
                  {/* {Object.keys(this.props.userInfo).length !== 0 ? (
                     <PrivateRoute
                        userInfo={this.props.userInfo}
                        exact
                        path="/"
                        component={UserDashboard}
                     />
                  ) : (
                     <Route exact path="/" component={Login} />
                  )} */}
                  {/* For user side */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/user-dashboard"
                     component={UserDashboard}
                  />
                  {/* For Update user  */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/edit/user"
                     component={UpdateUser}
                  />
                  {/* For admin side */}
                  <AdminRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/admin-dashboard"
                     component={AdminDashboard}
                  />
                  {/* For covidTracker side */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/covid/tracker"
                     component={CovidTracker}
                  />
               </Switch>
            </Router>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userInfo: state.auth.login.userInfo,
   };
};
export default connect(mapStateToProps)(Routes);
