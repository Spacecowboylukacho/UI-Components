import {Link} from "react-router-dom";

export default function Button({ text, id}){
    return (
        <button className="button font-[600] shadow-md hover:shadow-lg text-black hover:text-white text-center self-end fill">
            <Link to={`/components/${id}`}>
                {text}
            </Link>
        </button>

    )
}