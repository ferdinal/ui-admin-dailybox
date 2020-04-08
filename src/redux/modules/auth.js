// Actions
const LOGIN_HANDLER = "auth/LOGIN-HANDLER";
const LOGIN_HANDLER_SUCCESS = "auth/LOGIN-HANDLER_SUCCESS";
const LOGIN_HANDLER_FAIL = "auth/LOGIN-HANDLER_FAIL";

const initialState = {
  loginStatus: false,
  loginData: {},
  outletData: []
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_HANDLER:
      return {
        ...state,
        loginStatus: false,
        loginData: {},
        outletData: []
      };
    case LOGIN_HANDLER_SUCCESS:
      return {
        ...state,
        loginStatus: true,
        loginData: action.payload.response.data
          ? action.payload.response.data
          : {},
        outletData: action.payload.response.data
          ? action.payload.response.data.outlets
          : []
      };
    case LOGIN_HANDLER_FAIL:
      return state;
    default:
      return state;
  }
}

// Action Creators
export function loginHandler(data) {
  if (data) {
    return {
      type: LOGIN_HANDLER_SUCCESS,
      payload: {
        response: {
          data: data
        }
      }
    };
  } else {
    return {
      type: LOGIN_HANDLER,
      payload: {
        response: {
          data: data
        }
      }
    };
  }
}
