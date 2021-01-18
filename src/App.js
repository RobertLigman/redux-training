// import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import { connect } from "react-redux";
function App(props) {
  // const clickHandler = () => {
  //   console.log("handling a click");
  // };
  return (
    <div>
      <Button buttonName="Hej" clicked={() => props.addToArray("Hej")}></Button>
      <Button buttonName="Jak" clicked={() => props.addToArray("Jak")}></Button>
      <Button buttonName="Się" clicked={() => props.addToArray("Się")}></Button>
      <Button
        buttonName="Miewasz"
        clicked={() => props.addToArray("Miewasz")}></Button>
      <Button
        buttonName="Dzisiaj"
        clicked={() => props.addToArray("Dzisiaj")}></Button>
      <Button
        warning
        buttonName="Remove Text"
        clicked={() => props.removeAllElementsFromArray()}></Button>
      <div className="output">{props.textInArray.map((item) => item)}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { textInArray: state.textInArray };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToArray: (text) => dispatch({ type: "ADD_TO_ARRAY", value: text }),
    removeAllElementsFromArray: () =>
      dispatch({ type: "REMOVE_ELEMENTS_IN_ARRAY" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
