const initialState = {
  slugMateriKelas: "ini state materi",
};

export default function materiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SLUG_MATERI":
      return { ...state, slugMateriKelas: action.payload };

    default:
      return state;
  }
}
