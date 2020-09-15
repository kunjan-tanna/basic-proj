import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import * as PATH from "../../../configs/imgConfig";
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
import { history } from "../../../history";
import * as UserAction from "../../../redux/actions/auth/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateUser extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userdata: this.props.userInfo,
         rowData: [],
         formData: {},
      };
      // console.log("UserData", this.props);
   }
   componentDidMount = () => {
      const id = this.state.userdata._id;

      this.props.dispatch(UserAction.getUpdateById(id)).then((res) => {
         console.log("BY Id", res);
         if (res) {
            this.setState({ formData: res.data }); //() => {console.log();}
         }
      });
   };
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
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [event.target.name]: event.target.files[0],
         },
      }));
   };

   //To submit the Data
   handleFormSubmit = () => {
      const id = this.state.userdata._id;
      // let obj ={
      //    userId : this.state.userdata._id,
      //    status : this.state.formData.status,
      //    firstName : this.state.formData.firstName,
      //    lastName : this.state.formData.lastName,
      //    mobile : this.state.formData.mobile,
      //    mobile : this.state.formData.mobile,

      // }
      this.props
         .dispatch(UserAction.UpdateUsers(id, this.state.formData))
         .then((res) => {
            console.log("Updated DATAA", res);
            if (!res.data) {
               //Add success message in Toast
               // console.log("ERROR");
               toast.error("Update data is not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            } else {
               // console.log("Sucess");
               toast.success("Updated Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/user-dashboard");
               }, 3000);
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("Update data is not Successfully", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
   handleReset = () => {
      this.setState({ formData: {} });
   };
   render() {
      return (
         <Row>
            <Col sm="12">
               <Card className="pt-4">
                  <CardHeader>
                     <div className="d-flex justify-content-between">
                        <strong className="mt-2">Update User</strong>
                        <Button
                           className="add-new-btn"
                           color="primary"
                           onClick={() =>
                              this.props.history.push("/user-dashboard")
                           }
                           outline
                        >
                           <span className="align-middle">
                              Back to User Dashboard
                           </span>
                        </Button>
                     </div>
                  </CardHeader>
                  <CardBody>
                     <Col sm="12">
                        <Form
                           onSubmit={(e) => {
                              e.preventDefault();
                              this.handleFormSubmit();
                           }}
                        >
                           <Row className="bg-white rounded">
                              <Col md="6" sm="12">
                                 <FormGroup>
                                    <Label>FirstName</Label>
                                    <Input
                                       type="text"
                                       id="firstName"
                                       name="firstName"
                                       placeholder="First Name"
                                       onChange={this.handleInput}
                                       value={
                                          this.state.formData &&
                                          this.state.formData.firstName
                                             ? this.state.formData.firstName
                                             : ""
                                       }
                                    />
                                 </FormGroup>
                              </Col>

                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Last Name</Label>
                                    <Input
                                       type="text"
                                       placeholder="Last Name"
                                       name="lastName"
                                       onChange={this.handleInput}
                                       value={
                                          this.state.formData &&
                                          this.state.formData.lastName
                                             ? this.state.formData.lastName
                                             : ""
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Email</Label>
                                    <Input
                                       type="email"
                                       placeholder="Email"
                                       name="email"
                                       onChange={this.handleInput}
                                       value={
                                          this.state.formData &&
                                          this.state.formData.email
                                             ? this.state.formData.email
                                             : ""
                                       }
                                    />
                                 </FormGroup>
                              </Col>

                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Avtar</Label>
                                    <CustomInput
                                       type="file"
                                       id="avtar"
                                       name="avtar"
                                       onChange={this.handleavtar}
                                    />
                                 </FormGroup>
                              </Col>

                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Phone No</Label>
                                    <Input
                                       type="Number"
                                       placeholder="Phone No."
                                       name="mobile"
                                       onChange={this.handleInput}
                                       value={
                                          this.state.formData &&
                                          this.state.formData.mobile
                                             ? this.state.formData.mobile
                                             : ""
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Address</Label>
                                    <Input
                                       type="textarea"
                                       placeholder="Address"
                                       name="address"
                                       onChange={this.handleInput}
                                       value={
                                          this.state.formData &&
                                          this.state.formData.address
                                             ? this.state.formData.address
                                             : ""
                                       }
                                    />
                                 </FormGroup>
                              </Col>
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
                                    Update
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
   return { userInfo: state.auth.login.userInfo };
};
// const mapDispatchtoProps = (dispatch) => {
//    return {
//       handleClick: () => dispatch({ type: "SUCCESS" }),
//    };
// };
export default connect(mapStateToProps)(UpdateUser);
