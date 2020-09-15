import React from "react";
import { connect } from "react-redux";
import {
   Button,
   CardHeader,
   CardBody,
   Card,
   Row,
   Col,
   Form,
   FormGroup,
   CustomInput,
   Label,
   Input,
} from "reactstrap";
import { loginWithJWT } from "../../../redux/actions/auth/auth";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { history } from "../../../history";
class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         counter: 0,
         formData: {},
      };
      console.log("PROPSSS", this.props);
   }
   //handleInput
   handleInput = (event) => {
      event.persist();
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [event.target.name]: event.target.value,
         },
      }));
   };
   //Handle Form Submit
   handleFormSubmit = () => {
      console.log("FORMDATA===", this.state.formData);
      this.props.dispatch(loginWithJWT(this.state.formData));
   };
   render() {
      return (
         <Row className="m-0 justify-content-center">
            <Col
               sm="8"
               xl="7"
               lg="10"
               md="8"
               className="d-flex justify-content-center pt-4"
            >
               <Card className="rounded-0 mb-0 px-2">
                  <CardHeader>Login</CardHeader>
                  <CardBody>
                     <Col sm="12">
                        <Form
                           onSubmit={(e) => {
                              e.preventDefault();
                              this.handleFormSubmit();
                           }}
                        >
                           <Row>
                              <Col sm="12">
                                 <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                       type="email"
                                       placeholder="Email"
                                       name="email"
                                       onChange={this.handleInput}
                                    />
                                 </FormGroup>
                              </Col>
                              <Col sm="12">
                                 <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                       type="password"
                                       placeholder="Password"
                                       name="password"
                                       onChange={this.handleInput}
                                    />
                                 </FormGroup>
                                 <FormGroup className="d-flex justify-content-between align-items-center">
                                    <CustomInput
                                       className="pt-1 ml-2"
                                       type="checkbox"
                                       name="donotcall"
                                       id="donotcall"
                                       label="Remember me"
                                       //checked = {this.state.formData}
                                       //onChange={this.onCheckChange}
                                    />
                                    <div className="float-right">
                                       <NavLink
                                          to="/forgotpassword"
                                          exact
                                          className="nav-link"
                                       >
                                          Forgot Password?
                                       </NavLink>
                                    </div>
                                 </FormGroup>
                                 <div className="d-flex justify-content-between">
                                    <Button
                                       color="primary"
                                       outline
                                       onClick={() => {
                                          history.push("/register");
                                       }}
                                    >
                                       Register
                                    </Button>
                                    <Button color="primary" type="submit">
                                       Login
                                    </Button>
                                 </div>
                                 <ToastContainer />
                              </Col>
                           </Row>
                        </Form>
                     </Col>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};
// const mapDispatchtoProps = (dispatch) => {
//    return {

//    };
// };
export default connect(mapStateToProps)(Login);
