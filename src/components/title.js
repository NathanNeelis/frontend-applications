function Title(props){
    return(
      <h1 style={ HeaderStyle }>{props.title}</h1>
    );
  }

  export default Title


  // Styling
let HeaderStyle = {
  margin: "1em 0 1em 0",
  fontFamily: "'Thasadith', sans-serif",
  fontSize: "3em"
};
    