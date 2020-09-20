const initialState = {
  slugKelas: "",
};

export default function kelasReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SLUG_KELAS":
      return { ...state, slugKelas: action.payload };

    default:
      return state;
  }
}
