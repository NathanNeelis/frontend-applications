import CityInformation from './cityInformation'
import CityImage from './cityImage'

function ExtraInformation (){
    let findCity = document.getElementById('cityInput');
    console.log('found the right city', findCity)
    return(
        <div className="infoBlock">
            <CityInformation city='hello' prFacilities="10" parkingSpots="100" />
            <CityImage />
      </div>
    );
}

export default ExtraInformation