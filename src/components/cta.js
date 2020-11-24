function CTA (props){
    return (
        <div >
        <a href={props.target} className="ctaStyle" >
            {props.content}
        </a>
        </div> 
    );
  }

  export default CTA


