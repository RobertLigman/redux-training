const initialState = {
  textInArray: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_ARRAY":
      return { ...state, textInArray: state.textInArray.concat(action.value) };

    case "REMOVE_ELEMENTS_IN_ARRAY":
      return { ...state, textInArray: [] };
  }
  return state;
};
export default reducer;
