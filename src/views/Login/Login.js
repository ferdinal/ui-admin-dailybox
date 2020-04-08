import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      validUser: true,
      users: [
        {
          id: "001",
          username: "admin@001",
          password: "admin123",
          outlets: [
            { name: "JABABEKA" },
            { name: "GREENLAKE" },
            { name: "GRAND INDONESIA" }
          ],
          role: "pic"
        },
        {
          id: "002",
          username: "admin@002",
          password: "admin1234",
          outlets: [
            { name: "JABABEKA" },
            { name: "GREENLAKE" },
            { name: "GRAND INDONESIA" }
          ],
          role: "pic"
        },
        {
          id: "003",
          username: "admin@003",
          password: "admin12345",
          outlets: [{ name: "GREENLAKE" }, { name: "TANJUNG DUREN" }],
          role: "pic"
        },
        {
          id: "004",
          username: "COVID19",
          password: "Coronaeffect",
          outlets: [],
          role: "owner"
        }
      ]
    };
  }

  usernameHandler(e) {
    this.setState({
      username: e.target.value
    });
  }
  passwordHandler(e) {
    this.setState({
      password: e.target.value
    });
  }

  async handleOnSubmit(x) {
    const data = x;
    if (!data) {
      this.setState({
        validUser: false
      });
    } else {
      await this.props.loginHandler(data);
      if (data.role === "owner") {
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/admin/dashboard");
      }
    }
  }
  render() {
    const users = this.state.users;

    const data = users.filter(
      o =>
        o.password === this.state.password && o.username === this.state.username
    );

    const dataLogin = data[0];

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    {console.log(data)}
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="ID User"
                          autoComplete="username"
                          value={this.state.username}
                          onChange={e => this.usernameHandler(e)}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={e => this.passwordHandler(e)}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={x => this.handleOnSubmit(dataLogin)}
                          >
                            Login
                          </Button>
                        </Col>

                        <Col xs="6" className="text-right">
                          <p>
                            if you forget your password,{" "}
                            <strong> please contact the team</strong>
                          </p>
                        </Col>
                      </Row>
                      {this.state.validUser == false && (
                        <div style={{ color: "red" }}>
                          <p>ID and Password Undefined</p>
                        </div>
                      )}
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
