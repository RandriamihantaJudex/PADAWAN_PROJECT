import { Link } from "react-router-dom"
import WingRightDeploy from "../home/menuSlide"
import { useRef } from "react";
import FormationCouveture from "./formationCouverture";
import Footer from "../home/footer";
import Aos from "aos";
import FormationFilter from "./formationFilter";
import FormationAstuce from "./formationAstuce";
import FormationVideo from "./formationVideo";
import NavigationBar from "../home/dinamicNav";
Aos.init();



const NavBarFormation = ({ disapear }) => {
    return <div className="h-[50px] border-b-[#131313] justify-between border w-full flex items-center px-[150px]">
        <Link >
            <img
                src="./images/flecheBlack.png"
                className="max-md:ml-0 h-[35px] w-[35px]  my-1.5 flecheDroiteFormation"
                alt="chat"
            ></img>
        </Link>
        <ul className="flex gap-12">
            <li className="tracking-widest NavActive transition-2"><Link to={"/"}>Accueil</Link></li>
            <li className="tracking-widest text-[#008F64] border-b-2 border-b-[#008F64] pb-1"><Link>Formation</Link></li>
            <li className="tracking-widest NavActive"><Link>Compte</Link></li>
        </ul>
        <img
            src="./images/menuBlack.png"
            className="max-md:ml-0 h-[25px] w-[25px]   my-1.5 cursor-pointer hover:animate-spin"
            alt="chat"
            onClick={() => disapear()}
        ></img>

    </div>
}

function Formation() {
    const wingRight = useRef();
    const disapear = () => {
        wingRight.current.style.display = "block";
    };
    return <div>
        <NavigationBar disapear={disapear} />
        <WingRightDeploy wingRight={wingRight} />
        <NavBarFormation disapear={disapear} />
        <div className="h-[80px] w-full border-b-[#131313] border text-[38px] flex items-center justify-center tracking-[10px] ">
            APPPRENDRE EN  <img
                src="./images/heartGreen.png"
                className="max-md:ml-0 h-[40px] w-[40px]   my-1.5 cursor-pointer animate-pulse mr-2"
                alt="chat"
                onClick={() => disapear()}
            ></img> <span className="text-[#008F64]">AUTODIDACTE</span>
        </div>
        <FormationCouveture />
        <FormationAstuce />
        <FormationFilter />
        <FormationVideo />
        <Footer />

    </div>
}
export default Formation