import { Link } from "react-router-dom";

export default function Navigation(){
    return (
    <div className="navigation">
        <ul>
            <li>
                <Link to="/frontend-applications">Home</Link>
            </li>
            <li>
                <Link to="/frontend-applications/about">About</Link>
            </li>
        </ul>
    </div>
    );
}

