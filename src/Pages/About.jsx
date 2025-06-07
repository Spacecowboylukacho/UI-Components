import { Link } from 'react-router-dom'

export default function About(){
    return (
        <div className="flex justify-center items-center bg-green-300 h-[100vh]">
            <span className='absolute left-0 top-0'>
                <Link to='/'>Click Here to go back</Link></span>
            Here is the Page, where you will see Everything about our team
        </div>
    )
}