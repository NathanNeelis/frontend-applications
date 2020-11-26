function Title(props){
    return(
        <div className="footerContainer">
            <div>
                <h3>Resources:</h3>
                <ul>
                <li><a href="https://npropendata.rdw.nl/parkingdata/v2/">NPR open dataset</a></li>
                <li><a href={props.nbcLink}>NBC toeristen informatie</a></li>
                </ul>
            </div>
            <div>
                <h3>Gemaakt door:</h3>
                <p>Nathan Neelis</p>
            </div>
            <div>
                <h3>Front End Applications</h3>
                <p>In opdracht van de Volkskrant</p>
            </div>
        </div>
    );
  }

  export default Title
