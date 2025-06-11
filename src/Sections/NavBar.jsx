import Button from "../Components/Button.jsx";
import {Link} from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="w-full flex flex-row justify-between px-10 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-2 shadow-sm rounded-bl-lg rounded-br-lg">
            <aside className="manrope-title self-center">
                <Link to='/'>
                    <img    src=''
                            alt='Logo'/>
                </Link>
                <Link to='/'>
                    StudentIn
                </Link>
            </aside>
            <ul className="hidden md:flex flex-row text-lg gap-4 grow-1 justify-end px-16 items-center">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <Button text='Log in'/>
        </nav>
    )
}