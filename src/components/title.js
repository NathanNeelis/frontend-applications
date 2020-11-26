function Title(props){
    return(
      <h1 style={ HeaderStyle }>{props.title}</h1>
    );
  }

  export default Title


  // Styling
let HeaderStyle = {
  margin: "0em 0 1em 0",
  fontFamily: "'Thasadith', sans-serif",
  fontSize: "3em",
  color:"#0065a2"
};
    