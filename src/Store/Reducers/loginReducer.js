const initialState = {
  isLogin: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return { ...state, isLogin: action.payload };

    default:
      return state;
  }
}
