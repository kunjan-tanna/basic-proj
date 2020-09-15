import React from "react";
import { connect } from "react-redux";
import { history } from "../../../history";
import { Link } from "react-router-dom";
import * as PATH from "../../../configs/imgConfig";
import * as UserAction from "../../../redux/actions/auth/auth";
import {
   Button,
   CardHeader,
   CardBody,
   Card,
   Row,
   Media,
   Col,
   ListGroup,
   ListGroupItem,
} from "reactstrap";
class UserDashboard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userdata: this.props.userInfo,
         rowData: {},
      };
      console.log("UserData", this.props);
   }
   componentDidMount = () => {
      const id = this.state.userdata._id;

      this.props.dispatch(UserAction.getUpdateById(id)).then((res) => {
         console.log("BY Id", res);
         if (res) {
            this.setState({ rowData: res.data }); //() => {console.log();}
         }
      });
   };

   render() {
      const { rowData } = this.state;
      console.log("ROWDATA", rowData);
      return (
         <Row>
            <Col sm="12">
               <Card className="pt-4">
                  <CardHeader className="text-center">
                     <strong>User Dashboard</strong>
                  </CardHeader>
                  <CardBody>
                     <Col sm="12">
                        <Row>
                           <Col sm="3">
                              <Card>
                                 <CardHeader className="bg-dark text-white">
                                    User Navigation
                                 </CardHeader>
                                 <CardBody>
                                    <ul className={"list-group"}>
                                       <li className={"list-group-item"}>
                                          <Link
                                             to={"/edit/user"}
                                             className={"nav-link text-success"}
                                          >
                                             Edit Profile
                                          </Link>
                                       </li>
                                       <li className={"list-group-item"}>
                                          <Link
                                             to={"/covid/tracker"}
                                             className={"nav-link text-success"}
                                          >
                                             Covid'19 Tracker
                                          </Link>
                                       </li>
                                       {/* 
                                       <li className={"list-group-item"}>
                                          <Link
                                             to={"/admin/create/product"}
                                             className={"nav-link text-success"}
                                          >
                                             Create Product
                                          </Link>
                                       </li>
                                       <li className={"list-group-item"}>
                                          <Link
                                             to={"/admin/products"}
                                             className={"nav-link text-success"}
                                          >
                                             Manage Products
                                          </Link>
                                       </li>
                                       <li className={"list-group-item"}>
                                          <Link
                                             to={"/admin/orders"}
                                             className={"nav-link text-success"}
                                          >
                                             Manage Orders
                                          </Link>
                                       </li> */}
                                    </ul>
                                 </CardBody>
                              </Card>
                           </Col>

                           <Col sm="9">
                              <Card className="mb-4">
                                 <CardHeader className="text-center">
                                    <strong>User Information</strong>
                                 </CardHeader>
                                 <CardBody>
                                    <Col sm="12">
                                       <Row>
                                          <Col sm="12">
                                             <ListGroup>
                                                <ListGroupItem>
                                                   <Media className="d-sm-flex d-block">
                                                      <Media
                                                         className="mt-md-1 mt-0"
                                                         left
                                                      >
                                                         <Media
                                                            className="rounded mr-2"
                                                            object
                                                            src={
                                                               PATH.default
                                                                  .baseURL +
                                                               "" +
                                                               rowData.avtar
                                                            }
                                                            alt="Generic placeholder image"
                                                            height="112"
                                                            width="112"
                                                         />
                                                      </Media>
                                                      {console.log(PATH)}
                                                   </Media>
                                                </ListGroupItem>
                                             </ListGroup>
                                          </Col>
                                          <Col md="6" sm="12">
                                             <ListGroup>
                                                <ListGroupItem>
                                                   <span
                                                      className={
                                                         "badge badge-success mr-2"
                                                      }
                                                   >
                                                      FirstName:
                                                   </span>
                                                   {rowData.firstName}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                   <span
                                                      className={
                                                         "badge badge-success mr-2"
                                                      }
                                                   >
                                                      LastName:
                                                   </span>
                                                   {rowData.lastName}
                                                </ListGroupItem>
                                             </ListGroup>
                                          </Col>
                                          <Col md="6" sm="12">
                                             <ListGroup>
                                                <ListGroupItem>
                                                   <span
                                                      className={
                                                         "badge badge-success mr-2"
                                                      }
                                                   >
                                                      Email:
                                                   </span>
                                                   {rowData.email}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                   <span
                                                      className={
                                                         "badge badge-success mr-2"
                                                      }
                                                   >
                                                      Phone No:
                                                   </span>
                                                   {rowData.mobile}
                                                </ListGroupItem>
                                             </ListGroup>
                                          </Col>
                                          <Col sm="12">
                                             <ListGroup>
                                                <ListGroupItem>
                                                   <span
                                                      className={
                                                         "badge badge-success mr-2"
                                                      }
                                                   >
                                                      Address:
                                                   </span>
                                                   {rowData.address}
                                                </ListGroupItem>
                                             </ListGroup>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </CardBody>
                              </Card>
                           </Col>
                        </Row>
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
export default connect(mapStateToProps)(UserDashboard);
