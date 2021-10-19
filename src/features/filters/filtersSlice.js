const initialState = {
  filters: {
    status: "All",
    color: [],
  },
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
