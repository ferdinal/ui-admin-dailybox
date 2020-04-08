// Actions
const GET_OUTLET = "outlet/GET-OUTLET";
const GET_OUTLET_SUCCESS = "outlet/GET-OUTLET_SUCCESS";
const GET_OUTLET_FAIL = "outlet/GET-OUTLET_FAIL";

const CREATE_OUTLET = "outlet/CREATE-OUTLET";
const UPDATE_OUTLET = "outlet/UPDATE-OUTLET";
const DELETE_OUTLET = "outlet/DELETE-OUTLET";
const DETAIL_OUTLET = "outlet/DETAIL-OUTLET";

const initialState = {
  dataGetOutlet: [],
  getOutletStatus: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_OUTLET:
      return {
        ...state,
        dataGetOutlet: [],
        getOutletStatus: false
      };
    case GET_OUTLET_SUCCESS:
      return {
        ...state,
        dataGetOutlet: action.payload.status === 200 ? action.payload.data : [],
        getOutletStatus: true
      };
    case GET_OUTLET_FAIL:
      return state;

    //
    case CREATE_OUTLET:
      // Perform action
      return state;
    case UPDATE_OUTLET:
      // Perform action
      return state;
    case DELETE_OUTLET:
      // Perform action
      return state;
    case DETAIL_OUTLET:
      // Perform action
      return state;
    default:
      return state;
  }
}

// Action Creators
export function getOutlet() {
  return {
    type: GET_OUTLET,
    payload: {
      request: {
        method: "GET",
        url:
          "https://7v2vz3ikbi.execute-api.ap-southeast-1.amazonaws.com/dev/get-outlet",
        headers: {}
      }
    }
  };
}

export function createOutlet() {
  return { type: CREATE_OUTLET };
}

export function updateOutlet() {
  return { type: UPDATE_OUTLET };
}

export function deleteOutlet() {
  return { type: DELETE_OUTLET };
}

export function detailOutlet() {
  return { type: DETAIL_OUTLET };
}
