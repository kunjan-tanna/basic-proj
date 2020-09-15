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
import { RegUsers } from "../../../redux/actions/auth/auth";
import * as RegActions from "../../../redux/actions/auth/auth";
import { Mail, Lock, Check } from "react-feather";
import { Link } from "react-router-dom";
import { history } from "../../../history";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Register extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         counter: 0,
         formData: {},
         erroMsg: false,
      };
      console.log("PROPSSS", this.props);
   }
   //handle the Input
   handleInput = (event) => {
      event.persist();
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [event.target.name]: event.target.value,
            },
         }),
         () => console.log(this.state.formData)
      );
   };
   //handle the Image
   handleavtar = (event) => {
      event.persist();
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [event.target.name]: event.target.files[0],
            },
         }),
         () => console.log(event.target.files)
      );
   };

   //To submit the Data
   handleFormSubmit = () => {
      if (this.state.formData.avtar) {
         this.props
            .dispatch(RegUsers(this.state.formData))
            .then((res) => {
               console.log("REGISTER DATAA", res);
               if (!res.data) {
                  //Add success message in Toast
                  // console.log("ERROR");
                  toast.error("Register is not Successfully", {
                     position: toast.POSITION.BOTTOM_RIGHT,
                  });
               } else {
                  // console.log("Sucess");
                  toast.success("Register Successfully", {
                     position: toast.POSITION.BOTTOM_RIGHT,
                  });
                  setTimeout(() => {
                     history.push("/login");
                  }, 3000);
               }
            })
            .catch((error) => {
               // show error message in Toast
               toast.error("Register is not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            });
      } else {
         this.setState({ erroMsg: true });
         // show error message in Toast
         toast.error("Please Upload Image..", {
            position: toast.POSITION.BOTTOM_RIGHT,
         });
      }
   };
   handleReset = () => {
      this.setState({ formData: {} });
    };
   render() {
      return (
         <Row className="m-0">
            <Col sm="12" className=" pt-4">
               <Card className="rounded-0 mb-0 px-2">
                  <CardHeader>Register</CardHeader>
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
                                    <Label>FirstName</Label>
                                    <Input
                                       type="text"
                                       placeholder="First Name"
                                       name="firstName"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                              </Col>
                              <Col sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Last Name</Label>
                                    <Input
                                       type="text"
                                       placeholder="Last Name"
                                       name="lastName"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                                 <FormGroup className="form-label-group">
                                    <Label>Email</Label>
                                    <Input
                                       type="email"
                                       placeholder="Email"
                                       name="email"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                                 <FormGroup className="form-label-group">
                                    <Label>Password</Label>
                                    <Input
                                       type="password"
                                       placeholder="Password"
                                       name="password"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                                 <FormGroup className="form-label-group">
                                    <Label>Avtar</Label>
                                    <CustomInput
                                       type="file"
                                       id="avtar"
                                       name="avtar"
                                       onChange={this.handleavtar}
                                    />
                                    <p className="text-danger">
                                       *This field is required
                                    </p>
                                 </FormGroup>
                                 <FormGroup className="form-label-group">
                                    <Label>Address</Label>
                                    <Input
                                       type="textarea"
                                       placeholder="Address"
                                       name="address"
                                       onChange={this.handleInput}
                                    />
                                 </FormGroup>
                                 <FormGroup className="form-label-group">
                                    <Label>Phone No</Label>
                                    <Input
                                       type="Number"
                                       placeholder="Phone No."
                                       name="mobile"
                                       onChange={this.handleInput}
                                    />
                                 </FormGroup>

                                 <Col
                                    className="d-flex justify-content-end flex-wrap mt-2"
                                    sm="12"
                                 >
                                    <Button
                                       className="mr-1"
                                       color="primary"
                                       type="submit"
                                       //onClick={this.props.leadId}
                                    >
                                       Register
                                    </Button>
                                    <ToastContainer />
                                    <Button
                                       color="primary"
                                       outline
                                       onClick={() => this.handleReset()}
                                       type="button"
                                    >
                                       Reset
                                    </Button>
                                 </Col>
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
const mapDispatchToProps = (dispatch) => {
   return { dispatch };
};

export default connect(null, mapDispatchToProps)(Register);
