import React from "react";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import CountryPicker from "../CountryPicker/CountryPicker";
import { CardBody, CardHeader, Card, Button, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import * as trackerAction from "../../../redux/actions/tracker/tracker";

class CovidTracker extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {},
      };
      // console.log("UserData", this.props);
   }

   componentDidMount = () => {
      console.log("ComponentDidMount");
      this.props.dispatch(trackerAction.getData()).then((res) => {
         console.log("Tracker Data", res);

         if (res) {
            this.setState({ formData: res }); //() => {console.log();}
         }
      });
   };
   render() {
      return (
         <Row>
            <Col sm="12">
               <Card className="pt-4">
                  <CardHeader>
                     <div className="d-flex justify-content-between">
                        <strong className="mt-2">Covid'19 Tracker</strong>
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
                     <Cards data={this.state.formData} />
                     <Chart />
                     <CountryPicker />
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
//       handleClick: () => dispatch({ type: "SUCCESS" }),
//    };
// };
export default connect(mapStateToProps)(CovidTracker);
