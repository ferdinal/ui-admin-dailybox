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
  FormGroup,
  Label,
  Table
} from "reactstrap";

import * as authReducers from "../../redux/modules/auth";
import * as salesReducers from "../../redux/modules/sales";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function mapStateToProps(state) {
  return {
    //todo: state.todo,
    auth: state.auth,
    sales: state.sales
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authReducers, ...salesReducers }, dispatch);
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
      accordion: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300,
      length: this.props.sales.getDataSales
    };
  }

  componentDidMount() {
    this.props.getSales();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.sales.getDataSales) {
      this.setState({
        length: this.props.sales.getDataSales.length
      });
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

  async toggleAccordion(tab) {
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
    const sales = this.props.sales.getDataSales;
    console.log("TETET ", this.state.length);

    const listSales = sales.map((x, i) => {
      const total =
        x.dineinSales + x.goFoodSales + x.grabFoodSales + x.dailymealSales;
      total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      return (
        <Card className="mb-0" key={i}>
          <CardHeader id="headingOne">
            <Button
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => this.toggleAccordion(i)}
              aria-expanded={i}
              aria-controls="collapseOne"
            >
              <h6 className="">
                AT OUTLET <strong>{x.outlet.name}</strong>
              </h6>
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[i]}
            data-parent="#accordion"
            id="collapseOne"
            aria-labelledby="headingOne"
          >
            <CardBody>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>DATE SALES :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>{x.dateSales}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>DINEIN SALES :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>
                    Rp.{" "}
                    {x.dineinSales
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY RICEBOX DINEIN :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>
                    {" "}
                    Qty{"  "}
                    {x.quantityRiceBoxDinein}{" "}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY DRINKS CUP :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityDrinks}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY SNACKS BOX :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantitySnacks}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY DAILYSUKI DINEIN :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityDailysuki}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY PAX DINEIN :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityPack}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>NO OF DINEIN TRANSACTIONS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityDineinTransaction}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>GOFOOD SALES :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>
                    Rp.{" "}
                    {x.goFoodSales
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY RICEBOX GOFOOG :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityRiceBoxGoFood}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY GOFOOD WITH GOPAY :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityGoPay}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY GOFOOD WITH CASH :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityCashGoFood}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>GOFOOD OTHERS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.othersGoFood}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>NO OF GOFOOD TRANSACTIONS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityGoFoodTransaction}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>GRABFOOD SALES :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>
                    Rp.{" "}
                    {x.grabFoodSales
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY RICEBOX GRABFOOD :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityRiceBoxGrabFood}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY GRABFOOD WITH OVO :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityOvo}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY GRABFOOD WITH CASH :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityCashGrabFood}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY GRABFOOD OTHERS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.othersGrabFood}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>NO OF GRABFOOD TRANSACTIONS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityGrabFoodTransaction}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>DAILYMEALS SALES :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>
                    Rp.{" "}
                    {x.dailymealSales
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY RICEBOX DAILYMEALS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityRiceBoxDailymeals}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY ZOMATO GOLD :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityZomatoGold}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>EDC DEBIT BCA :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.debitBcaEdc}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>EDC KREDIT BCA :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.kreditBcaEdc}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>OVO BARCODE :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.ovoBarcode}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>GOPAY BARCODE :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.gopayBarcode}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>CASH :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.cash}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>TRANSFER :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.transfer}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>TRAVELOKA :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.traveloka}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>SHOPEE PAY :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.shopeePay}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>OTHER PAYMENT :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.otherPayment}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>GO ORDER :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.goOrder}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>DISC KARYAWAN :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.discKaryawan}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY DISC KARYAWAN :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityDiscKaryawan}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>DISC DAILY :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.discDaily}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY DISC DAILY :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityDiscDaily}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>DISC OTHERS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Rp. {x.discOthers}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>QTY DISC OTHERS :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>Qty. {x.quantityDiscOthers}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>
                    <strong>NOTES :</strong>
                  </Label>
                </Col>
                <Col xs="12" md="6">
                  <Label>{x.notes}</Label>
                </Col>
              </FormGroup>
            </CardBody>
            <CardBody row>
              <FormGroup>
                <Col md="3">
                  <Label style={{ color: "green" }}>
                    <h3>
                      <strong>TOTAl SALES</strong>
                    </h3>
                  </Label>
                  <Label>
                    <h5>
                      <strong>
                        RP.{" "}
                        {total
                          .toString()
                          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                      </strong>
                    </h5>
                  </Label>
                </Col>
              </FormGroup>
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
                <div id="accordion">{listSales}</div>
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
