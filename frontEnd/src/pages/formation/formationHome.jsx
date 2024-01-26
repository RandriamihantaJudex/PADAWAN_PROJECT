import WingRightDeploy from "../home/menuSlide"
import { useRef } from "react";
import FormationCouveture from "./formationCouverture";
import Footer from "../home/footer";
import FormationFilter from "./formationFilter";
import FormationAstuce from "./formationAstuce";
import FormationVideo from "./formationVideo";
import NavigationBar from "../home/dinamicNav";
import { NavBarFormation } from "./formation";
import { MiniNavMobile } from "../home/homeCouverture";

const FormationHome=()=>{
    const wingRight = useRef();
    const disapear = () => {
        wingRight.current.style.display = "block";
    };
return <>
    <MiniNavMobile disapear={disapear} />
    <NavigationBar disapear={disapear} />
    <WingRightDeploy wingRight={wingRight} />
    <NavBarFormation disapear={disapear} />
    <div className="h-[80px] w-full border-b-slate-500 border text-[38px] flex items-center justify-center tracking-[10px] max-md:tracking-[2px] max-md:h-[30px] max-md:text-[14px] max-md:gap-[10px] max-md:-mt-[7px]">
        APPPRENDRE EN  <img
            src="./../images/heartGreen.png"
            className="max-md:ml-0 h-[40px] w-[40px]   my-1.5 max-md:my-0 cursor-pointer animate-pulse mr-2 max-md:h-[20px] max-md:w-[20px]"
            alt="coeur"
        ></img> <span className="text-[#008F64] max-md:text-[14px]">AUTODIDACTE</span>
    </div>
    <FormationCouveture/>
    <FormationAstuce/>
    <FormationFilter />
    <FormationVideo />
    <Footer/>
</>
}

export default FormationHome