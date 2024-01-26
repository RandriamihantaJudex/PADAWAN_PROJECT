import { Link } from "react-router-dom";


function Don() {
    return <div className="imageDon h-[250px] w-full ">
        <div className="transpa h-full w-full flex flex-col items-center justify-evenly text-white text-2xl">
            <h1 className="h-auto tracking-widest max-md:text-[15px]">SUPPORTER L'EQUIPE PADAWAN</h1>
            <div className="centrer gap-8 max-md:gap-4">
                <Link className="petit max-md:text-[12px] max-md:w-[120px] centrer gap-3 bg-[#1f1f1f] py-1 w-[180px] rounded-full  text-[17px] shadow-sm shadow-[#1f1f1f]">
                    S'abonner
                    <img src="./images/chevronDownWhite.png" alt="icon" className="h-5 w-5 mt-1 animate-bounce max-md:h-4 max-md:w-4"/>
                </Link>
                <Link className="centrer petit max-md:text-[12px] max-md:w-[120px] centrer gap-3 bg-[#008F64] py-1 w-[180px] rounded-full text-[17px] shadow-sm shadow-[#008f64cb]">
                    Faire un Don
                    <img src="./images/don.png" alt="icon" className="animate-bounce h-5 w-5  max-md:h-4 max-md:w-4 mt-1"/>
                </Link>
            </div>
        </div>
    </div>
}
export default Don;