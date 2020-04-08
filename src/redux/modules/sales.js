// Actions
const GET_SALES = "sales/GET-SALES";
const GET_SALES_SUCCESS = "sales/GET-SALES_SUCCESS";
const GET_SALES_FAIL = "sales/GET-SALES_FAIL";

const CREATE_SALES = "sales/CREATE-SALES";
const CREATE_SALES_SUCCESS = "sales/CREATE-SALES_SUCCESS";
const CREATE_SALES_FAIL = "sales/CREATE-SALES_FAIL";

const UPDATE_SALES = "sales/UPDATE-SALES";
const DELETE_SALES = "sales/DELETE-SALES";
const DETAIL_SALES = "sales/DETAIL-SALES";

const initialState = {
  getDataSales: [],
  getDataStatus: false,
  createSalesMessage: "",
  createSalesStatus: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    ////
    case GET_SALES:
      return {
        ...state,
        getDataSales: [],
        getDataStatus: false
      };
    case GET_SALES_SUCCESS:
      return {
        ...state,
        getDataSales: action.payload.status === 200 ? action.payload.data : [],
        getDataStatus: true
      };
    case GET_SALES_FAIL:
      return {
        ...state
      };

    /////
    case CREATE_SALES:
      return {
        ...state,
        createSalesMessage: "On Proses insert data",
        createSalesStatus: false
      };
    case CREATE_SALES_SUCCESS:
      return {
        ...state,
        createSalesMessage:
          action.payload.status === 200
            ? "Insert Data Success"
            : "Something Wrong",
        createSalesStatus: true
      };
    case CREATE_SALES_FAIL:
      return state;

    ////
    case UPDATE_SALES:
      // Perform action
      return state;
    case DELETE_SALES:
      // Perform action
      return state;
    case DETAIL_SALES:
      // Perform action
      return state;
    default:
      return state;
  }
}

// Action Creators
export function getSales() {
  return {
    type: GET_SALES,
    payload: {
      request: {
        method: "GET",
        url:
          "https://n5t4bjbf28.execute-api.ap-southeast-1.amazonaws.com/Prod/sales"
      }
    }
  };
}

export function createSales(data) {
  return {
    type: CREATE_SALES,
    payload: {
      request: {
        method: "POST",
        url:
          "https://n5t4bjbf28.execute-api.ap-southeast-1.amazonaws.com/Prod/sales",
        headers: {},
        data: data
      }
    }
  };
}

export function updateSales() {
  return { type: UPDATE_SALES };
}

export function deleteSales() {
  return { type: DELETE_SALES };
}

export function detailSales() {
  return { type: DETAIL_SALES };
}
