import { temoignageUser } from "./variablesHome"

// DONNE REQUIS LIGNE 61 : TABLEAU CONTENANT  3 TEMOIGNAGE


const CarteTemoignage = ({nom,prenom,domaine,temoignage,star}) => {
    let tableauStar=[]
    for (let index = 0; index < star; index++) {
        tableauStar.push(index)
    }


    return <div className="h-full w-[370px] max-md:w-full max-md:h-[300px] bg-[#008F64] rounded-md flex flex-col justify-between text-white">
        <div className="flex justify-between px-6 h-1/6 py-9 items-center">
            <div className="flex h-full items-center">
                <img src="./images/challengeImg.jpg" alt="profil" className="h-12 w-12 max-md:h-10 max-md:w-10 border-2  border-white rounded-full"></img>
                <div className="ml-4">
                    <p className="font-bold max-md:text-[14px]">{nom} {prenom}</p>
                    <p className="text-sm max-md:text-[12px]">{domaine}</p>
                </div>
            </div>
            <div className="w-auto h-[20px] flex gap-1 ">
               {
                    tableauStar.map((index)=>{
                        return <img key={index} src="./images/etoile.png" alt="star" className="h-5 w-5"/>
                    })
               }
            </div>
        </div>
        <div className="w-full h-4/6 bg-white border-2 border-[#008F64] flex justify-center items-center text-[#1f1f1f]">
            <p className="flex flex-col  w-full   px-9 max-md:text-[13px] text-center">
                <span className="text-[#008F64] text-xl myspan" >"</span>{temoignage}
                <span className="text-[#008F64]  ml-[100%] text-xl">"</span>
            </p>
        </div>
        <div className="flex justify-between px-6 h-1/6 py-9 items-center max-md:py-1">
            <img src="./images/loveFull.png" alt="love" className="h-8 w-8 max-md:h-6 max-md:w-6"></img>
            <div className="flex">
                <div className="h-2 w-2 bg-white rounded-full mx-1 max-md:h-1 max-md:w-1"> </div>
                <div className="h-2 w-2 bg-[#1f1f1f] rounded-full mx-1 max-md:h-1 max-md:w-1"> </div>
                <div className="h-2 w-2 bg-white rounded-full mx-1 max-md:h-1 max-md:w-1"> </div>
            </div>
            <img src="./images/send.png" alt="love" className="h-8 w-8 max-md:h-6 max-md:w-6"></img>

        </div>
    </div>
}


function Temoignage() {
    return <div className=" w-full flex flex-col items-center anime-on-show mt-24 mb-16 max-md:mt-8 max-md:mb-0">
        <h2 className="text-[#008F64] text-3xl textTemoin max-md:text-[16px]">Retour d’expérience de la communauté</h2>
        <div className="avisParent w-10/12 h-[320px] flex mt-7 max-md:mt-2 max-md:gap-[10px] gap-[20px] max-md:w-11/12 max-lg:items-center max-lg:flex-col max-lg:h-auto">
                {
                temoignageUser.map(({nom,prenom,domaine,temoignage,star})=>{
                    return <CarteTemoignage key={prenom} nom={nom} prenom={prenom} domaine={domaine} temoignage={temoignage} star={star} />
                })
                }
        </div>
    </div>
}
export default Temoignage