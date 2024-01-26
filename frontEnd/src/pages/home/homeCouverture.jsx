import { useRef } from "react";
import { Link } from "react-router-dom";
import { listDomaine } from "./variablesHome";
import WingRightDeploy from "./menuSlide";
import NavigationBar from "./dinamicNav";

// DONNEE REQUIS LIGNE 155 : TABLEAU DE LISTE DES DOMAINES

export const MiniNavMobile = ({ disapear }) => {
    return <div className="maxIndex h-11 w-full bg-[#008F64] px-8 flex items-center justify-between text-white md:hidden fixed">
        <h1 className="text-3xl">P</h1>
        <img
            src="./images/menu.png"
            className="h-7 w-7 cursor-pointer menuAnimate "
            alt="menu"
            onClick={(e) => disapear()}
        ></img>
    </div>
}

function Couverture() {
    const wingRight = useRef();
    const disapear = () => {
        wingRight.current.style.display = "block";
    };
   
   
      

    const WingRight = () => {
        // PARTIE DROITE
        return (
            <div className="h-full bg-[#008F64] py-8 flex flex-col items-center justify-between text-white w-16 max-md:hidden rounded-bl-lg">
                <img
                    src="./images/menu.png"
                    className="h-7 w-7 cursor-pointer menuAnimate "
                    alt="menu"
                    onClick={(e) => disapear()}
                ></img>
                <img
                    src="./images/chevron_left.png"
                    className="flecheDroite h-5 w-5 -mb-8  hover:h-7 hover:w-7 "
                    alt="chevron"
                    onClick={(e) => disapear()}
                ></img>
                <div className=" flex flex-col items-center w-full">
                    <img
                        src="./images/facebook.png"
                        className="h-6 w-6 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                    <img
                        src="./images/whatsapp.png"
                        className="h-6 w-6 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                    <img
                        src="./images/discord.png"
                        className="h-6 w-6 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                    <img
                        src="./images/gmail.png"
                        className="h-5 w-5 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                </div>
            </div>
        );
    };



    return (
        <div>
            {/* PARTIE GAUCHE  */}
            <div className="h-screen w-full flex justify-between greece ">
                <div className="h-full bg-[#121212] w-16 py-8  flex flex-col  items-center justify-between text-white max-md:hidden rounded-br-lg">
                    <h1 className="text-4xl bold">P</h1>
                    <img
                        src="./images/chevron_left.png"
                        className="h-5 w-5 -mt-8 transform rotate-180 flecheDroite hover:h-7 hover:w-7"
                        alt="chevron"
                    ></img>
                    <img
                        src="./images/chat.png"
                        className="h-7 w-7 iconeRs"
                        alt="chat"
                    ></img>
                </div>

                {/* PARTIE MILIEU */}
                <div className="h-full w-full flex flex-col items-center">
                    <div className="w-auto  flex mt-8 text-[#202020] tracking-wide max-md:hidden">
                        <Link className="mx-10 pb-1 text-[#008F64] border-b-2 border-[#008F64] hoverLink text-md">
                            Accueil
                        </Link>
                        <Link to={"/formation"} className="mx-10 text-md hoverLink pb-1">Formation</Link>
                        <Link className="mx-10 text-md pb-1 my-0 flex hoverLink">
                            Compte{" "}
                            <img
                                src="./images/chevron_down.png"
                                className="h-4 w-4 mt-1.5  ml-2 transform rotate-180 m-0"
                                alt="down"
                            />
                        </Link>
                    </div>
                    <MiniNavMobile disapear={disapear}/>
                    <h1 className="grandTitre text-[#008F64] text-6xl w-8/12 text-center font-black mt-20  max-md:mt-24 max-md:text-xl  max-lg:text-4xl">
                        Commencer votre propre aventure.
                    </h1>

                    <div className="slider h-16  overflow-hidden mt-5 rounded-tl-xl bg-[#008F64] rounded-br-xl text-white  max-md:h-10  max-md:w-40 max-lg:rounded-tl-2xl max-lg:bg-transparent">
                        <div className="h-16  slideRecipent flex  max-md:h-10  items-center domaineScroll">

                            {/* AFFICHE A LISTE DES DOMAINES DISPONIBLE */}
                            {listDomaine.map((element) => {
                                return (
                                    <div
                                        key={element}
                                        className="h16 w-72 bg-[#008F64] text-4xl  max-md:text-sm max-lg:text-md max-lg:h-14"
                                    >
                                        {element}
                                    </div>
                                );
                            })}
                        </div>
                        {/* MISSION POUR DEMAIN */}
                    </div>

                    <p className="w-6/12 py-6  text-center font-medium tracking-wide grandP max-md:text-[10px] max-md:w-10/12 max-lg:text-sm max-lg:w-8/12">
                        Padawan facilite votre apprentissage gratuitement, avec l’aide de
                        personne expérimenté. Vous aller vous concentrer directement sur les
                        compétences nécessaires a votre futur vie professionnel.
                    </p>
                    <div className="flex">
                        <Link className=" mx-3 px-8 py-2.5 rounded-lg text-[#008F64] border-2 transition border-[#008F64] hover:bg-[#008F64] hover:text-white max-md:text-[12px] max-md:rounded-md max-md:font-thin max-md:border max-md:px-4 max-md:lowercase max-md:py-[2px] centrer ">
                            DEVENIR MENTOR
                        </Link>
                        <Link className="mx-3 centrer bg-[#008F64] text-white px-8 py-2.5 rounded-lg transition hover:bg-emerald-600 hover:shadow-sm hover:shadow-[#008F64]  max-md:rounded-md  max-md:px-4 max-md:py-0 max-md:text-[12px] max-md:lowercase max-md:font-thin">
                            CHERCHER UN MENTOR
                        </Link>
                    </div>
                </div>
                <NavigationBar disapear={disapear}/>
                <WingRight />
                <WingRightDeploy wingRight={wingRight} />
            </div>
        </div>
    );
}


export default Couverture;