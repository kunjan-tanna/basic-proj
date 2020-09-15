import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { logout } from "../redux/actions/auth/auth";
import { history } from "../history";

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userdata: this.props.userInfo,
      };
      console.log("UserData-------------", this.state.userdata);
   }
   handleitem = () => {
      this.props.logout();
      // console.log('LOGOUT',props.logout)
      this.props.history.push("/login");
   };

   render() {
      return (
         <div>
            <ul className="nav nav-tabs bg-blue">
               <li className="nav-item">
                  <NavLink
                     to="/"
                     exact
                     className="nav-link"
                     activeStyle={{ color: "red" }}
                     //style={currentTab(history, "/")}
                  >
                     Home
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink
                     to="/user-dashboard"
                     activeStyle={{ color: "red" }}
                     //style={currentTab(history, "/user-dashboard")}
                     className="nav-link"
                  >
                     User Dashboard
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink
                     to="/admin-dashboard"
                     className="nav-link"
                     activeStyle={{ color: "red" }}

                     //style={currentTab(history, "/admin-dashboard")}
                  >
                     Admin Dashboard
                  </NavLink>
               </li>
               {!this.state.userdata && (
                  <li className="nav-item">
                     <NavLink to="/login" className="nav-link">
                        login
                     </NavLink>
                  </li>
               )}
               <li className="nav-item">
                  <span
                     className={"nav-link text-warning"}
                     onClick={(e) => this.handleitem()}
                  >
                     Logout
                  </span>
               </li>
               {/* {this.state.userdata && this.state.userdata.role === "user" && (
                  
               )} */}
               {/* {this.state.userdata && this.state.userdata.role === "admin" && (
                  
               )} */}
               {/* {this.state.userdata.role &&
               this.state.userdata.role === "admin" ? (
                  <li className="nav-item">
                     <Link to="/user-dashboard" className="nav-link">
                        User Dashboard
                     </Link>
                  </li>
               ) : (
                  <Redirect to="/login" />
               )} */}
               {/* {this.state.userdata && (
                 
               )} */}

               {/* <Link
                     to="/basic-proj/login"
                     className="nav-link"
                     style={{ marginLeft: "1050px" }}
                  >
                     Login
                  </Link> */}
            </ul>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userInfo: state.auth.login.userInfo,
   };
};
export default connect(mapStateToProps, { logout })(withRouter(Menu));
