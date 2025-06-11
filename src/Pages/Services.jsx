import CardList from "../Sections/CardList.jsx";
import {Link} from "react-router-dom";

export default function Services() {
    return (
        <div className="">
            <Link to="/">Click here to go back</Link>
            <CardList />
        </div>
    )
}