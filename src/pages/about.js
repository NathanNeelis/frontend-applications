// import Background from '../img/background.svg'; 
import linkedin from '../img/LI-In-Bug.png'; 
import github from '../img/github.svg'
import nathan from '../img/nathan.jpg'

export default function About (){
    return (
        <div className="about">
            <div className="Content">
                <section>
                <h1>Over de auter</h1>
                <h2>Nathan Neelis</h2>
                <p>Tech student tijdens het themasemester Data Visualisatie </p>
                <div>
                    <img src={nathan} alt="nathan" className="profilePicture" />
                </div>
                <a href="https://github.com/nathanneelis" target="blank"> <img src={github} alt="github logo" className="socialLogo" /> 
                </a>
                <a href="https://www.linkedin.com/in/nathan-neelis-83219236/" target="blank"> <img src={linkedin} alt="github logo" className="socialLogo" />
                </a>
                </section>
            </div>
        </div>
            
    )
}
