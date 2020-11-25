export default function Intro (props) {
      return (
      <p className="intro" style={ introStyle }>
          {props.content}
      </p>
      );
  }


  let introStyle = {
    margin: "2em 2em 2em 2em",
    lineHeight: "1.45em"
  };
  