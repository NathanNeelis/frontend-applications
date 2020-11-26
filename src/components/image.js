function Image (props) {
    return (
    <img src={props.image} alt={props.alt} className={props.class} />
    );
}

export default Image