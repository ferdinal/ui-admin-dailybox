import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import NumberFormat from "react-number-format";

import * as authReducers from "../../redux/modules/auth";
import * as outletReducers from "../../redux/modules/outlet";
// import * as jurusanReducers from "../../redux/modules/jurusan";
import * as salesReducers from "../../redux/modules/sales";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    auth: state.auth,
    outlet: state.outlet,
    sales: state.sales
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...outletReducers,
      ...authReducers,
      ...salesReducers
    },
    dispatch
  );
}

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      outlet: "",
      dateSales: "",
      dineinSales: "",
      quantityRiceBoxDinein: "",
      quantityDrinks: "",
      quantitySnacks: "",
      quantityDailysuki: "",
      quantityPack: "",
      quantityDineinTransaction: "",
      goFoodSales: "",
      quantityRiceBoxGoFood: "",
      quantityGoPay: "",
      quantityCashGoFood: "",
      othersGoFood: "",
      quantityGoFoodTransaction: "",
      grabFoodSales: "",
      quantityRiceBoxGrabFood: "",
      quantityOvo: "",
      quantityCashGrabFood: "",
      othersGrabFood: "",
      quantityGrabFoodTransaction: "",
      dailymealSales: "",
      quantityRiceBoxDailymeals: "",
      quantityZomatoGold: "",
      debitBcaEdc: "",
      kreditBcaEdc: "",
      ovoBarcode: "",
      gopayBarcode: "",
      cash: "",
      transfer: "",
      traveloka: "",
      shopeePay: "",
      otherPayment: "",
      goOrder: "",
      discKaryawan: "",
      quantityDiscKaryawan: "",
      discDaily: "",
      quantityDiscDaily: "",
      discOthers: "",
      quantityDiscOthers: "",
      notes: ""
    };
  }
  async componentDidMount() {
    await this.props.getOutlet();
    await this.props.getSales();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.guru) {
      //this.props.history.push("/");
    }
    //console.log("test", this.props.admin.admin_detail.email);
  }

  handleOutlet(e) {
    e.persist();
    this.setState({
      outlet: e.target.value
    });
    console.log(e);
  }
  handleDateSale(e) {
    e.persist();
    this.setState({
      dateSales: e.target.value
    });
    console.log(e);
  }

  handledineinSales(e) {
    e.persist();
    this.setState({
      dineinSales: e.target.value
    });
    console.log(e);
  }
  handlequantityRiceBoxDinein(e) {
    e.persist();
    this.setState({
      quantityRiceBoxDinein: e.target.value
    });
    console.log(e);
  }

  quantityDrinks(e) {
    e.persist();
    this.setState({
      quantityDrinks: e.target.value
    });
  }
  quantitySnacks(e) {
    e.persist();
    this.setState({
      quantitySnacks: e.target.value
    });
  }

  quantityDailysuki(e) {
    e.persist();
    this.setState({
      quantityDailysuki: e.target.value
    });
  }
  quantityPack(e) {
    e.persist();
    this.setState({
      quantityPack: e.target.value
    });
  }

  quantityDineinTransaction(e) {
    e.persist();
    this.setState({
      quantityDineinTransaction: e.target.value
    });
  }

  goFoodSales(e) {
    e.persist();
    this.setState({
      goFoodSales: e.target.value
    });
  }

  quantityRiceBoxGoFood(e) {
    e.persist();
    this.setState({
      quantityRiceBoxGoFood: e.target.value
    });
  }

  quantityGoPay(e) {
    e.persist();
    this.setState({
      quantityGoPay: e.target.value
    });
  }
  quantityCashGoFood(e) {
    e.persist();
    this.setState({
      quantityCashGoFood: e.target.value
    });
  }

  othersGoFood(e) {
    e.persist();
    this.setState({
      othersGoFood: e.target.value
    });
  }

  quantityGoFoodTransaction(e) {
    e.persist();
    this.setState({
      quantityGoFoodTransaction: e.target.value
    });
  }

  grabFoodSales(e) {
    e.persist();
    this.setState({
      grabFoodSales: e.target.value
    });
  }

  quantityRiceBoxGrabFood(e) {
    e.persist();
    this.setState({
      quantityRiceBoxGrabFood: e.target.value
    });
  }

  quantityOvo(e) {
    e.persist();
    this.setState({
      quantityOvo: e.target.value
    });
  }

  quantityCashGrabFood(e) {
    e.persist();
    this.setState({
      quantityCashGrabFood: e.target.value
    });
  }

  othersGrabFood(e) {
    e.persist();
    this.setState({
      othersGrabFood: e.target.value
    });
  }

  quantityGrabFoodTransaction(e) {
    e.persist();
    this.setState({
      quantityGrabFoodTransaction: e.target.value
    });
  }

  dailymealSales(e) {
    e.persist();
    this.setState({
      dailymealSales: e.target.value
    });
  }

  quantityRiceBoxDailymeals(e) {
    e.persist();
    this.setState({
      quantityRiceBoxDailymeals: e.target.value
    });
  }

  quantityZomatoGold(e) {
    e.persist();
    this.setState({
      quantityZomatoGold: e.target.value
    });
  }

  debitBcaEdc(e) {
    e.persist();
    this.setState({
      debitBcaEdc: e.target.value
    });
  }

  kreditBcaEdc(e) {
    e.persist();
    this.setState({
      kreditBcaEdc: e.target.value
    });
  }

  ovoBarcode(e) {
    e.persist();
    this.setState({
      ovoBarcode: e.target.value
    });
  }

  gopayBarcode(e) {
    e.persist();
    this.setState({
      gopayBarcode: e.target.value
    });
  }

  cash(e) {
    e.persist();
    this.setState({
      cash: e.target.value
    });
  }

  transfer(e) {
    e.persist();
    this.setState({
      transfer: e.target.value
    });
  }

  traveloka(e) {
    e.persist();
    this.setState({
      traveloka: e.target.value
    });
  }
  shopeePay(e) {
    e.persist();
    this.setState({
      shopeePay: e.target.value
    });
  }

  otherPayment(e) {
    e.persist();
    this.setState({
      otherPayment: e.target.value
    });
  }
  goOrder(e) {
    e.persist();
    this.setState({
      goOrder: e.target.value
    });
  }

  discKaryawan(e) {
    e.persist();
    this.setState({
      discKaryawan: e.target.value
    });
  }

  quantityDiscKaryawan(e) {
    e.persist();
    this.setState({
      quantityDiscKaryawan: e.target.value
    });
  }

  discDaily(e) {
    e.persist();
    this.setState({
      discDaily: e.target.value
    });
  }

  quantityDiscDaily(e) {
    e.persist();
    this.setState({
      quantityDiscDaily: e.target.value
    });
  }
  discOthers(e) {
    e.persist();
    this.setState({
      discOthers: e.target.value
    });
  }
  quantityDiscOthers(e) {
    e.persist();
    this.setState({
      quantityDiscOthers: e.target.value
    });
  }
  notes(e) {
    e.persist();
    this.setState({
      notes: e.target.value
    });
  }

  onHandleSubmit() {
    const arangeData = {
      outlet: this.state.outlet,
      dateSales: this.state.dateSales,
      dineinSales: this.state.dineinSales,
      quantityRiceBoxDinein: this.state.quantityRiceBoxDinein,
      quantityDrinks: this.state.quantityDrinks,
      quantitySnacks: this.state.quantitySnacks,
      quantityDailysuki: this.state.quantityDailysuki,
      quantityPack: this.state.quantityPack,
      quantityDineinTransaction: this.state.quantityDineinTransaction,
      goFoodSales: this.state.goFoodSales,
      quantityRiceBoxGoFood: this.state.quantityRiceBoxGoFood,
      quantityGoPay: this.state.quantityGoPay,
      quantityCashGoFood: this.state.quantityCashGoFood,
      othersGoFood: this.state.othersGoFood,
      quantityGoFoodTransaction: this.state.quantityGoFoodTransaction,
      grabFoodSales: this.state.grabFoodSales,
      quantityRiceBoxGrabFood: this.state.quantityRiceBoxGrabFood,
      quantityOvo: this.state.quantityOvo,
      quantityCashGrabFood: this.state.quantityCashGrabFood,
      othersGrabFood: this.state.othersGrabFood,
      quantityGrabFoodTransaction: this.state.quantityGrabFoodTransaction,
      dailymealSales: this.state.dailymealSales,
      quantityRiceBoxDailymeals: this.state.quantityRiceBoxDailymeals,
      quantityZomatoGold: this.state.quantityZomatoGold,
      debitBcaEdc: this.state.debitBcaEdc,
      kreditBcaEdc: this.state.kreditBcaEdc,
      ovoBarcode: this.state.ovoBarcode,
      gopayBarcode: this.state.gopayBarcode,
      cash: this.state.cash,
      transfer: this.state.transfer,
      traveloka: this.state.traveloka,
      shopeePay: this.state.shopeePay,
      otherPayment: this.state.otherPayment,
      goOrder: this.state.goOrder,
      discKaryawan: this.state.discKaryawan,
      quantityDiscKaryawan: this.state.quantityDiscKaryawan,
      discDaily: this.state.discDaily,
      quantityDiscDaily: this.state.quantityDiscDaily,
      discOthers: this.state.discOthers,
      quantityDiscOthers: this.state.quantityDiscOthers,
      notes: this.state.notes
    };
    console.log("submit");
    this.props.createSales(arangeData);
    // end
    // this.setState({});
    // alert("Data Berhasil ditambahkan");
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  render() {
    const outlet = this.props.outlet.dataGetOutlet;

    const listOutlet = outlet.map((x, index) => {
      return (
        <option key={index} value={x._id}>
          {x.name}
        </option>
      );
    });

    return (
      <div className="animated fadeIn">
        <Row>
          {/* xs="12" md="6" */}
          <Col>
            <Card>
              <CardHeader>
                <strong>Form Input Sales Report</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  // encType="multipart/form-data"
                  className="form-horizontal"
                  //   onSubmit={this.handleSubmit}
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">
                        <strong>Select Outlet</strong>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        name="select"
                        id="select"
                        // placeholder="Pilih Jurusan"
                        value={this.state.outlet}
                        onChange={e => this.handleOutlet(e)}
                      >
                        <option>Please select Outlet</option>
                        {listOutlet}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">
                        <strong>Select Date</strong>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                        value={this.state.dateSales}
                        //placeholder="Masukan Kode Guru"
                        onChange={e => this.handleDateSale(e)}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> DINEIN Sales (Rp)</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.dineinSales}
                        placeholder="Masukan Sales Dinein (Rp)"
                        onChange={e => this.handledineinSales(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        RiceBox DINE IN (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityRiceBoxDinein}
                        placeholder="No Of Dinein Box"
                        onChange={e => this.handlequantityRiceBoxDinein(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Drinks DINE IN (Qty)</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityDrinks}
                        placeholder="No Of Dinein Cup"
                        onChange={e => this.quantityDrinks(e)}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Snacks DINE IN (Qty)</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantitySnacks}
                        placeholder="No Of Dinein Box Snack"
                        onChange={e => this.quantitySnacks(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        Dailysuki DINE IN (Qty)
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityDailysuki}
                        placeholder="No Of Dinein Suki"
                        onChange={e => this.quantityDailysuki(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Pax (Qty)</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityPack}
                        placeholder="No of Pack"
                        onChange={e => this.quantityPack(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        DINE IN Transactions (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityDineinTransaction}
                        placeholder="no of DINE IN Transactions (Qty)"
                        onChange={e => this.quantityDineinTransaction(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Go Food Sales (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.goFoodSales}
                        placeholder="Go Food Sales (Rp)"
                        onChange={e => this.goFoodSales(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> GoFood Gopay (Qty) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityGoPay}
                        placeholder="GoFood Gopay (Qty)"
                        onChange={e => this.quantityGoPay(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> GoFood Cash (Qty) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityCashGoFood}
                        placeholder="GoFood Cash (Qty) "
                        onChange={e => this.quantityCashGoFood(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        RiceBox Go Food Box (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityRiceBoxGoFood}
                        placeholder="RiceBox Go Food Box (Qty) "
                        onChange={e => this.quantityRiceBoxGoFood(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Others Go Food (Qty) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.othersGoFood}
                        placeholder="Others Go Food (Qty) "
                        onChange={e => this.othersGoFood(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        GoFood Transaction (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityGoFoodTransaction}
                        placeholder="no of gofood transaction (Qty)"
                        onChange={e => this.quantityGoFoodTransaction(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Grab Food Sales (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.grabFoodSales}
                        placeholder="Grab Food Sales (Rp)"
                        onChange={e => this.grabFoodSales(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        Grab Food RiceBox Box (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityRiceBoxGrabFood}
                        placeholder="no of grab food transaction (Qty)"
                        onChange={e => this.quantityRiceBoxGrabFood(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Grab Food OVO (Qty) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityOvo}
                        placeholder="Grab Food OVO (Qty)"
                        onChange={e => this.quantityOvo(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Grab Food CASH (Qty) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityCashGrabFood}
                        placeholder="Grab Food CASH (Qty)"
                        onChange={e => this.quantityCashGrabFood(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        Others Grab Food (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.othersGrabFood}
                        placeholder="Others Grab Food (Qty)"
                        onChange={e => this.othersGrabFood(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        Grab Food Transactions (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityGrabFoodTransaction}
                        placeholder="Grab Food Transactions (Qty)"
                        onChange={e => this.quantityGrabFoodTransaction(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        Dailymeals Sales (Rp){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.dailymealSales}
                        placeholder="Dailymeals Sales (Rp)"
                        onChange={e => this.dailymealSales(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        Dailymeals RiceBox Box (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityRiceBoxDailymeals}
                        placeholder="Dailymeals RiceBox Box (Qty)"
                        onChange={e => this.quantityRiceBoxDailymeals(e)}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Zomato Gold (Qty) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityZomatoGold}
                        placeholder="Zomato Gold (Qty)"
                        onChange={e => this.quantityZomatoGold(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> EDC DEBIT BCA (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.debitBcaEdc}
                        placeholder="EDC Debit BCA (Rp)"
                        onChange={e => this.debitBcaEdc(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> EDC KREDIT BCA (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.kreditBcaEdc}
                        placeholder="EDC Kredit BCA (Rp)"
                        onChange={e => this.kreditBcaEdc(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> OVO BARCODE (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.ovoBarcode}
                        placeholder="OVO Barcode (Rp)"
                        onChange={e => this.ovoBarcode(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> GOPAY BARCODE (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.gopayBarcode}
                        placeholder="GOPAY Barcode (Rp)"
                        onChange={e => this.gopayBarcode(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> CASH (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.cash}
                        placeholder="CASH (Rp)"
                        onChange={e => this.cash(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> TRANSFER (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.transfer}
                        placeholder="TRANSFER (Rp)"
                        onChange={e => this.transfer(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> TRAVELOKA (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.traveloka}
                        placeholder="TRAVELOKA (Rp)"
                        onChange={e => this.traveloka(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> SHOPEE PAY (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.shopeePay}
                        placeholder="SHOPEE PAY (Rp)"
                        onChange={e => this.shopeePay(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> OTHER PAYMENT (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.otherPayment}
                        placeholder="OTHER PAYMENT (Rp)"
                        onChange={e => this.otherPayment(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> GO ORDER (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.goOrder}
                        placeholder="GO ORDER (Rp)"
                        onChange={e => this.goOrder(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> DISC KARYAWAN (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.discKaryawan}
                        placeholder="DISC KARYAWAN (Rp)"
                        onChange={e => this.discKaryawan(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        NO OF DISC KARYAWAAN (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityDiscKaryawan}
                        placeholder="NO OF DISC KARYAWAAN (Qty)"
                        onChange={e => this.quantityDiscKaryawan(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> DISC DAILY (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.discDaily}
                        placeholder="DISC DAILY (Rp)"
                        onChange={e => this.discDaily(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        NO OF DISC DAILY (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityDiscDaily}
                        placeholder="NO OF DISC DAILY (Qty)"
                        onChange={e => this.quantityDiscDaily(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> DISC OTHER (Rp) </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.discOthers}
                        placeholder="DISC OTHER (Rp)"
                        onChange={e => this.discOthers(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        {" "}
                        NO OF DISC OTHER (Qty){" "}
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        value={this.state.quantityDiscOthers}
                        placeholder="NO OF DISC OTHER(Qty)"
                        onChange={e => this.quantityDiscOthers(e)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> NOTES </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        id="textarea-input"
                        name="textarea-input"
                        value={this.state.notes}
                        placeholder="NOTES"
                        onChange={e => this.notes(e)}
                      />
                    </Col>
                  </FormGroup>
                </Form>
                {/* {this.props.jurusan.msg && (
                  <div style={{ color: "green" }}>{this.props.jurusan.msg}</div>
                )} */}
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  onClick={() => this.onHandleSubmit()}
                >
                  <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
                <Button type="reset" size="sm" color="danger">
                  <i className="fa fa-ban"></i> Reset
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

//export default Forms;
export default connect(mapStateToProps, mapDispatchToProps)(Forms);
