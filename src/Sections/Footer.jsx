export default function Footer() {
    return (<div className="grid grid-cols-4 bg-green-200 w-full h-60 mt-20">
        <div className="flex flex-col">
            <div className="flex justify-start px-10 py-10">
                Logo
            </div>
            <div>
                Socials
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6 py-10">
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Careers
                </li>
            </ul>
            <ul>
                <li>
                    Au Pair
                </li>
                <li>
                    Ferienjobs
                </li>
                <li>
                    Non-Student Jobs
                </li>
                <li>
                    Steuer-return
                </li>
            </ul>


        </div>
            <ul className="py-10 ml-auto self-end">
                <li>
                    Coockies
                </li>
                <li>
                    Privacy Policy
                </li>
            </ul>
            <div className="py-10 ml-auto px-6 self-end">
                Terms & Conditions
            </div>
        </div>
    )
}