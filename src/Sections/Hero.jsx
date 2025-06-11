export default function Hero(){
    return (
        <div className="grid grid-cols-2 bg-green-500 my-8 px-20 py-10">
            <div className="flex flex-col justify-center w-full gap-2">
                <h1 className="lato-bold text-3xl text-white">StudentIn</h1>
                <p className="lato-normal text-white leading-5">StudentIn but with more words and stuff<br /> Description that saves Everything</p>
            </div>
            <div className="bg-[#065A08FF] hidden md:flex flex-col m-auto">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        Pizza
                    </div>
                    <div>
                        Post
                    </div>
                    <div>
                        Hotel
                    </div>
                    <div>
                        Mc
                    </div>
                </div>
            </div>
        </div>
    )
}
