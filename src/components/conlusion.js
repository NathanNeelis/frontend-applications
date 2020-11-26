import roundel from '../img/city-roundel.svg'; 

export default function Conclusion (props) {
    return (
    <div className="ConclusionBlob">
        <div className="RoundelBlob">
            <p className="RoundelCityName" > {props.cityName} </p>
            <img src={roundel} alt="city icon visual" className="RoundelCityImage" />
        </div>
        <div className="infoBlob">
            <h3>{props.title}</h3>
            <p>{props.conclusion}
            {props.bron && <a href={props.bron} target="blank">NBC.</a>}
            </p>
        </div>
    </div>
    );
}


