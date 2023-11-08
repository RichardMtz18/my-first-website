import { Link } from "react-router-dom";

export function Contact(){
    return(
        <div>
            <h1 className="text-8xl text-blue-700">Hello from Contact</h1>
            <Link to="/">Home</Link>
        </div>
    )
}