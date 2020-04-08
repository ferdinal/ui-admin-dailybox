import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row,
  Table
} from "reactstrap";

import * as authReducers from "../../redux/modules/auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function mapStateToProps(state) {
  return {
    //todo: state.todo,
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authReducers }, dispatch);
}

class Collapses extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300
    };
  }
  componentDidMount() {
    // await this.props.auth.loginStatu;
    if (this.props.auth.loginStatus === false) {
      this.props.history.push("/login");
    }
    console.log("YAELAAAAH ", this.props.auth.outletData);
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.loginData) {
      this.props.history.push("/login");
    }
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    const outlet = this.props.auth.outletData;

    const listOutlet = outlet.map((x, index) => {
      return (
        <Card className="mb-0" key={index}>
          <CardHeader id="headingOne">
            <Button
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => this.toggleAccordion(index)}
              aria-expanded={this.state.accordion[index]}
              aria-controls="collapseOne"
            >
              <h6 className="">
                AT OUTLET <strong style={{ color: "balck" }}>{x.name}</strong>
              </h6>
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[index]}
            data-parent="#accordion"
            id="collapseOne"
            aria-labelledby="headingOne"
          >
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>
      );
    });

    console.log("WAAAAW ");

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Sales{" "}
                <small>
                  <strong>Data</strong>
                </small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">{listOutlet}</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

// export default Collapses;
export default connect(mapStateToProps, mapDispatchToProps)(Collapses);
