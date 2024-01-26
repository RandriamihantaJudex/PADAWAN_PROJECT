import { Link} from "react-router-dom"

import Aos from "aos";

import MobileNav from "./navmobile";
import FormationHome from "./formationHome";
Aos.init();


export const NavBarFormation = ({ disapear }) => {
    return <div className="h-[50px] border-b-slate-500  justify-between border w-full flex items-center px-[150px] max-md:px-[25px] max-md:opacity-0">
        <Link to={'/'}>
            <img
                src="./../images/flecheBlack.png"
                className="max-md:ml-0 h-[35px] w-[35px]  my-1.5 flecheDroiteFormation"
                alt="chat"
            ></img>
        </Link>
        <ul className="flex gap-12 max-md:hidden">
            <li className="tracking-widest NavActive transition-2"><Link to={"/"}>Accueil</Link></li>
            <li className="tracking-widest text-[#008F64] border-b-2 border-b-[#008F64] pb-1"><Link>Formation</Link></li>
            <li className="tracking-widest NavActive"><Link>Compte</Link></li>
        </ul>
        <img
            src="./../images/menuBlack.png"
            className="max-md:ml-0 h-[25px] w-[25px] my-1.5 cursor-pointer hover:animate-spin"
            alt="chat"
            onClick={() => disapear()}
        ></img>

    </div>
}

function Formation() {
    // const aller=useNavigate()
    // const url= document.documentURI
    // setTimeout(() => {
    //     // LIEN A METTRE A JOUR EN LIGNE
    //     if (url ==='http://localhost:3000/formation'){
    //         aller('/formation/home')
    //     }
    // }, 1000);
    
    return <div>
        <MobileNav lien={'.'} activer={0}/>
        <FormationHome/>
    </div>
}
export default Formation