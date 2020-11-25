import roundel from '../img/city-roundel.svg'; 

export default function Conclusion (props) {
    return (
    <div className="ConclusionBlob">
        <div className="RoundelBlob">
            <p className="RoundelCityName" > {props.cityName} </p>
            <img src={roundel} alt="city icon visual" className="RoundelCityImage" />
        </div>
        <div className="infoBlob">
            <h3>Best reachable by Park and Ride facilities</h3>
            <p>some intro</p>
        </div>
    </div>
    );
}


