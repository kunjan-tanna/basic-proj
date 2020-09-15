import React from "react";
import { connect } from "react-redux";
import {
   CardBody,
   CardHeader,
   Card,
   CardTitle,
   Row,
   Col,
   CardText,
} from "reactstrap";
import CountUp from "react-countup";

class Cards extends React.Component {
   constructor(props) {
      super(props);
      this.state = { rowData: {} };
   }
   componentWillReceiveProps(nextProps) {
      // console.log(nextProps);
      const Data = nextProps.data;
      this.setState({ rowData: Data });
   }

   render() {
      const { confirmed, lastUpdate, recovered, deaths } = this.state.rowData;
      console.log("PROPS", lastUpdate);
      //const abc = confirmed && confirmed.map((item) => console.log(item));
      // const abc =
      //    confirmed && confirmed.value ? confirmed.value : "loading.....";
      // const data =
      //    this.state.rowData &&
      //    this.state.rowData.map((item) => console.log(item));
      return (
         <Row>
            <Col sm="12">
               <Card className="pt-4">
                  <CardBody>
                     <Col sm="12">
                        <Row>
                           <Col lg="4" sm="12">
                              <Card style={{ color: "blue" }}>
                                 <CardHeader className="justify-content-between">
                                    <div className="card-heading">
                                       <CardText className="text-muted">
                                          Infected
                                       </CardText>
                                       <CardText>
                                          <CountUp
                                             start={0}
                                             end={
                                                (confirmed &&
                                                   confirmed.value) ||
                                                10
                                             }
                                             duration={2.5}
                                             separator=","
                                          />
                                       </CardText>

                                       <CardText className="text-muted">
                                          {new Date(lastUpdate).toDateString()}
                                       </CardText>
                                       <CardText>
                                          Number of active cases of COVID'19
                                       </CardText>
                                    </div>
                                 </CardHeader>
                              </Card>
                           </Col>
                           <Col lg="4" sm="12">
                              <Card style={{ color: "darkblue" }}>
                                 <CardHeader className="justify-content-between">
                                    <div className="card-heading">
                                       <CardText className="text-muted">
                                          Recovered
                                       </CardText>
                                       <CardText>
                                          <CountUp
                                             start={0}
                                             end={
                                                (recovered &&
                                                   recovered.value) ||
                                                10
                                             }
                                             duration={2.5}
                                             separator=","
                                          />
                                       </CardText>
                                       <CardText className="text-muted">
                                          {new Date(lastUpdate).toDateString()}
                                       </CardText>
                                       <CardText>
                                          Number of recoveries from COVID'19
                                       </CardText>
                                    </div>
                                 </CardHeader>
                              </Card>
                           </Col>
                           <Col lg="4" sm="12">
                              <Card style={{ color: "red" }}>
                                 <CardHeader className="justify-content-between">
                                    <div className="card-heading">
                                       <CardText className="text-muted">
                                          Deaths
                                       </CardText>
                                       <CardText>
                                          <CountUp
                                             start={0}
                                             end={
                                                (deaths && deaths.value) || 10
                                             }
                                             duration={2.5}
                                             separator=","
                                          />
                                       </CardText>
                                       <CardText className="text-muted">
                                          {new Date(lastUpdate).toDateString()}
                                       </CardText>
                                       <CardText>
                                          Number of Deaths caused by COVID'19
                                       </CardText>
                                    </div>
                                 </CardHeader>
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
   return {};
};
// const mapDispatchtoProps = (dispatch) => {
//    return {
//       handleClick: () => dispatch({ type: "SUCCESS" }),
//    };
// };
export default connect(mapStateToProps)(Cards);
