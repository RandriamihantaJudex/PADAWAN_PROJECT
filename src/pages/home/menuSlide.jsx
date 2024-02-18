import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp,faDiscord ,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronRight, faBars, faPencil, faRightToBracket, faMoon, faSun, faHouse, faChevronDown, faShareNodes, faEarthAsia, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

// FONCTIONNALITE : ENVOIE DE MESSAGE A L'ADMIN

const WingRightDeploy = ({ wingRight }) => {
    const changerVue = () => {
        wingRight.current.classList.remove("avanceAnimation");
        wingRight.current.classList.add("retourAnimation");
        wingRight.current.style.display = "none";
        wingRight.current.style.display = "block";
        setTimeout(() => {
            wingRight.current.classList.remove("retourAnimation");
            wingRight.current.classList.add("avanceAnimation");
            wingRight.current.style.display = "none";
        }, 900);
    };
    // PARTIE DROITE DEPLOYER
    

    return (
        <div
            className="testMargin avanceAnimation bg-[#008F64]  absolute max-md:w-full rounded-bl-lg"
            ref={wingRight}
        >
            <div className="flex">
                <div className="fullHeight w-16 flex  bg-emerald-600 h-1/5 flex-col items-center justify-between py-8 max-md:w-20 ">
                    <FontAwesomeIcon onClick={() => changerVue()} icon={faBars} className="text-white h-6 w-6 cursor-pointer menuAnimate " />
                    <FontAwesomeIcon onClick={() => changerVue()} icon={faChevronRight} className="text-white h-5 w-5 iconeRs my-1.5 flecheDroite hover:h-7 hover:w-7" />
                    <div className=" flex flex-col items-center w-full text-white">
                        <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 iconeRs my-1.5" />
                        <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 iconeRs my-1.5" />
                        <FontAwesomeIcon icon={faDiscord} className="h-5 w-5 iconeRs my-1.5" />
                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 iconeRs my-1.5" />
                    </div>
                </div>

                <div className="fullHeight w-full flex flex-col items-center justify-between py-8 ">
                    {/* BOUTON SE CONNECTER */}
                    <div className="w-full flex flex-col items-center ">
                        <div className="h-10 w-10/12 flex p-1 items-center justify-between bg-white rounded-lg">
                                <Link
                                className="h-full text-sm flex items-center text-[#008F64] rounded-md  px-2 hover:bg-[#008F64] hover:text-white"
                                >
                                    S’inscrire
                                <FontAwesomeIcon icon={faPencil} className="h-[12px] w-[12px] pl-1 -mb-1"/>
                                </Link>
                           
                            <Link className="h-full flex items-center bg-[#008F64] text-sm  text-white px-3 rounded-md hover:bg-emerald-600 max-md:px-1">
                                Se connecter
                                <FontAwesomeIcon icon={faRightToBracket} className="h-[13px] w-[13px] pl-1 -mb-1" />
                            </Link>
                        </div>
                        <div className="h-10 w-10/12 flex p-1 items-center justify-between bg-white rounded-lg mt-4">
                                <Link
                                className="h-full text-sm flex items-center text-[#008F64]  rounded-md px-1 hover:bg-[#008F64] hover:text-white"
                                >
                                    Dark Mode
                                <FontAwesomeIcon icon={faMoon} className="h-[14px] w-[14px] pl-1 -mb-1" />
                                </Link>
                           
                            <Link className="h-full flex items-center bg-[#008F64] text-sm  text-white px-4 rounded-md hover:bg-emerald-600 max-md:px-1">
                                Light Mode
                                <FontAwesomeIcon icon={faSun} className="h-[14px] w-[14px] pl-1 -mb-1" />
                            </Link>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div className="flex flex-col items-center w-full text-white">
                        <Link to={'/'} className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Accueil{" "}
                             <FontAwesomeIcon icon={faHouse} className="h-[16px] w-[16px]  -mb-1" />
                        </Link>
                        <Link to={'/formation'} className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Formation{" "}
                            <FontAwesomeIcon icon={faYoutube} className="h-[16px] w-[16px]  -mb-1" />

                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Compte{" "}
                            <FontAwesomeIcon icon={faChevronDown} className="h-[16px] w-[16px]  -mb-1" />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Partage{" "}
                            <FontAwesomeIcon icon={faShareNodes} className="h-[16px] w-[16px]  -mb-1" />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Forum{" "}
                          
                            <FontAwesomeIcon icon={faEarthAsia} className="h-[16px] w-[16px]  -mb-1" />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Don{" "}
                         <FontAwesomeIcon icon={faHandHoldingHeart} className="h-[16px] w-[16px]  -mb-1" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-full text-white">
                        <form className="flex flex-col items-start w-9/12">
                            <label htmlFor="message">Nous contacter</label>
                            <input
                                type="text"
                                name="message"
                                placeholder="Information, question, plainte"
                                className="petit my-2 w-full rounded-md py-1 px-2 placeholder:text-sm placeholder:text-slate-400 font-thin bg-transparent border-2 border-white"
                            />
                            <button
                                type="submit"
                                className="w-full py-1 rounded-md bg-white text-[#008F64] hover:bg-[#252525] hover:text-white"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WingRightDeploy