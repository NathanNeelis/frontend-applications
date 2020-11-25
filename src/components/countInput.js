import React, { useState, useEffect } from 'react';
import { findCityData, selectCity } from './transform';
import { arrayLength, countParkingSpots } from './transform';
import SubTitle from './subHeader';
import CountToTarget from './count';
import CityImage from './cityImage'

export default function CountFromInput (props){
    const [city, setCity] = useState(0);
    const [amount, setAmount] = useState(findCityData(props.allData, localStorage.getItem('city')));
    const [myCity, setMyCity] = useState(localStorage.getItem('city'))
    const [parkingSpots, setParkingSpots] = useState(selectCity(props.allData, 'Amsterdam')); //useState('loading...');
    const storage = window.localStorage;

    useEffect (() => {
        let storageValue = localStorage.getItem('city')
        setCity(storageValue)
        let cityName = document.getElementById('cityInput')
        cityName.value = city
        
    }, [city]);

    useEffect (() => {
            let parkingSpotsData = localStorage.getItem('city')
            if (parkingSpotsData === null){
                setParkingSpots(selectCity(props.allData, 'Amsterdam'))
            } else {
                setParkingSpots(selectCity(props.allData, localStorage.getItem('city')))
            }
    }, [props.allData]);

    function getCityName(){
        let cityName = document.getElementById('cityInput').value
        storage.setItem('city', cityName)
        // UPDATE COUNT VALUE
        
        setMyCity(cityName)
        setAmount(findCityData(props.allData, cityName))
        setParkingSpots(selectCity(props.allData, cityName))
    }
    
    
    return (
        <div>
            <SubTitle title="De statistieken over de Park & Ride faciliteiten" />
            <article className="PRStatistics">

                <CountToTarget count={arrayLength(props.allData)} title="Alle faciliteiten" /> 
                <CountToTarget count={countParkingSpots(props.allData)} title="Alle parkeerplaatsen" /> 
                {/* ANOTHER COUNT  */}
                <div className="countContainer">
                    <div className='counter' style={ counterValue }>{ amount.length } </div>
                    <div className='cityInputContainer'>
                        <input id="cityInput" placeholder='Search for a city' />
                        <button id="submitBtn" type="button" onClick={getCityName}>
                            enter city
                        </button>
                    </div>
                </div>
            </article>
                {myCity && <article>
                <div className="infoBlock">
                    <div>
                        <h2> {myCity}</h2>
                        {parkingSpots && <p>
                            <span>{myCity}</span> heeft ongeveer <span>xxx -props toevoegen-</span> toeristen per dag en <span>{amount.length}</span> Park en Ride faciliteiten 
                            dat een totaal heeft van <span>{parkingSpots}</span> parkeerplaatsen.
                        </p> }
                    </div>
                {/* <CityInformation city={city} prFacilities="10" parkingSpots="100" /> */}
                <CityImage />
                </div>
            </article> }
        </div>
    );
}




// RESOURCE COUNTER Brad Traversy
// https://codepen.io/bradtraversy/pen/poJwqOK

// Resource local storage Laurens
// https://vizhub.com/Razpudding/2154ed6b877c46b0866b04b46db46409?edit=files&file=index.js



let counterValue = {
    height: "10vw",
    width: "10vw",
    backgroundColor: "#00bfbf",
    borderRadius: "50%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2em",
    fontFamily: "'Thasadith', sans-serif",
    fontWeight: "700",
    color: "white",
    marginBottom: ".5em"

}




//     })

//     return (
//         <div className="countContainer">
//             <div className='counter' style={ counterValue }></div>
//             <h3>{props.title}</h3>
//         </div>
//     );
// }

// RESOURCE COUNTER Brad Traversy
// https://codepen.io/bradtraversy/pen/poJwqOK