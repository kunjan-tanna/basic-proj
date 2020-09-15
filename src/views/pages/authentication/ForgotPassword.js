import React from "react";
import {
   Card,
   CardHeader,
   CardTitle,
   CardBody,
   Row,
   Col,
   FormGroup,
   Form,
   Input,
   Button,
   Label,
} from "reactstrap";
import fgImg from "../../../imgs/forgot-password.png";
import { history } from "../../../history";
import { connect } from "react-redux";
import { forgotPass } from "../../../redux/actions/auth/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ForgotPassword extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {},
      };
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

   //Handle Form Submit to store the data in DB
   handleFormSubmit = () => {
      console.log("FORMDATA===", this.state.formData);
      this.props
         .dispatch(forgotPass(this.state.formData))
         .then((res) => {
            // console.log("RRRRRR", res);
            if (res.data) {
               // Add success message in Toast
               toast.success(
                  "Email has been sent, kindly Follow the instruction",
                  {
                     position: toast.POSITION.BOTTOM_RIGHT,
                  }
               );
            } else {
               // show error message in Toast
               toast.error("Something went wrong", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("Something went wrong", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };

   render() {
      return (
         <Row className="m-0 justify-content-center">
            <Col
               sm="8"
               xl="7"
               lg="10"
               md="8"
               className="d-flex justify-content-center pt-5"
            >
               <Card>
                  <Row className="m-0">
                     <Col
                        lg="6"
                        className="d-lg-block d-none text-center align-self-center"
                     >
                        <img src={fgImg} alt="fgImg" />
                     </Col>
                     <Col lg="6" md="12" className="p-0">
                        <Card className="rounded-0 mb-0 px-2 py-1">
                           <CardHeader className="pb-1">
                              <CardTitle>
                                 <h4 className="mb-0">Password Assistance</h4>
                              </CardTitle>
                           </CardHeader>
                           <p className="px-2 auth-title">
                              Please enter your email address and we'll send you
                              instructions on how to reset your password.
                           </p>
                           <CardBody className="pt-1 pb-0">
                              <Form
                                 onSubmit={(e) => {
                                    e.preventDefault();
                                    this.handleFormSubmit();
                                 }}
                              >
                                 <FormGroup className="form-label-group">
                                    <Label>Email</Label>
                                    <Input
                                       type="email"
                                       placeholder="Email"
                                       name="email"
                                       onChange={this.handleInput}
                                       // value={this.state.email}
                                       // onChange={e => this.setState({ email: e.target.value })}
                                    />
                                 </FormGroup>
                                 <div className="float-md-left d-block mb-1 pt-3">
                                    <Button
                                       color="primary"
                                       outline
                                       onClick={() => {
                                          history.push("/login");
                                       }}
                                    >
                                       Back to Login
                                    </Button>
                                 </div>
                                 <div className="float-md-right d-block mb-1 pt-3">
                                    <Button
                                       color="primary"
                                       type="submit"
                                       className="px-75 btn-block"
                                       //   onClick={e => {
                                       //     e.preventDefault()
                                       //     history.push("/dashboard")
                                       //   }}
                                    >
                                       Continue
                                    </Button>
                                    <ToastContainer />
                                 </div>
                              </Form>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </Card>
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};
export default connect(mapStateToProps)(ForgotPassword);
