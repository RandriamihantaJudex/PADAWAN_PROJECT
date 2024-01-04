import { useState } from "react";
import { Link } from "react-router-dom";


// FONCTIONNALITE LIGNE 202: ENVOIE DE MESSAGE A L'ADMIN

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
    let [boolBouton, setboolBouton] = useState();
    const changeBouton = () => {
        boolBouton ? setboolBouton(false) : setboolBouton(true);
    };

    let [boolMode, setboolMode] = useState();
    const changeMode = () => {
        boolMode ? setboolMode(false) : setboolMode(true);
    };

    return (
        <div
            className="testMargin avanceAnimation h-full  bg-[#008F64]  absolute max-md:w-full rounded-bl-lg"
            ref={wingRight}
        >
            <div className="flex">
                <div className="fullHeight w-16 flex  bg-emerald-600 h-1/5 flex-col items-center justify-between py-8 max-md:w-20 ">
                    <img
                        src="./images/menu.png"
                        className="h-7 w-7 cursor-pointer menuAnimate "
                        alt="menu"
                        onClick={() => changerVue()}
                    ></img>
                    <img
                        src="./images/chevron_left.png"
                        className="h-5 w-5 -mb-8 transform rotate-180 flecheDroite hover:h-7 hover:w-7"
                        alt="chevron"
                        onClick={() => changerVue()}
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

                <div className="fullHeight w-full flex flex-col items-center justify-between py-8 ">
                    {/* BOUTON SE CONNECTER */}
                    <div className="w-full flex flex-col items-center ">
                        <div className="h-10 w-10/12 flex p-1 items-center justify-between bg-white rounded-lg">
                            {!boolBouton ? (
                                <Link
                                    onMouseEnter={(e) => changeBouton()}
                                    className="h-full text-sm flex items-center text-[#008F64] rounded-md  px-2"
                                >
                                    S’inscrire
                                    <img
                                        src="./images/signUpGreen.png"
                                        alt="icone"
                                        className="h-5 w-5 pl-1 -mb-1"
                                    />
                                </Link>
                            ) : (
                                <Link
                                    onMouseLeave={(e) => changeBouton()}
                                    className="h-full flex text-sm items-center bg-[#008F64] text-white px-4  rounded-md max-md:px-2"
                                >
                                    S’inscrire
                                    <img
                                        src="./images/signUpWhite.png"
                                        alt="icone"
                                        className="h-5 w-5 pl-1 -mb-1"
                                    />
                                </Link>
                            )}
                            <Link className="h-full flex items-center bg-[#008F64] text-sm  text-white px-3 rounded-md hover:bg-emerald-600 max-md:px-1">
                                Se connecter
                                <img
                                    src="./images/login.png"
                                    alt="icone"
                                    className="h-5 w-5 pl-1 -mb-1"
                                />
                            </Link>
                        </div>
                        <div className="h-10 w-10/12 flex p-1 items-center justify-between bg-white rounded-lg mt-4">
                            {!boolMode ? (
                                <Link
                                    onMouseEnter={(e) => changeMode()}
                                    className="h-full text-sm flex items-center text-[#008F64]  rounded-md px-1 "
                                >
                                    Dark Mode
                                    <img
                                        src="./images/moonGreen.png"
                                        alt="icone"
                                        className="h-5 w-6 pl-1 -mb-1"
                                    />
                                </Link>
                            ) : (
                                <Link
                                    onMouseLeave={(e) => changeMode()}
                                    className="h-full flex text-sm items-center bg-[#008F64] text-white px-2 rounded-md max-md:px-1"
                                >
                                    Dark Mode
                                    <img
                                        src="./images/moonWhite.png"
                                        alt="icone"
                                        className="h-5 w-6 pl-1 -mb-1"
                                    />
                                </Link>
                            )}
                            <Link className="h-full flex items-center bg-[#008F64] text-sm  text-white px-4 rounded-md hover:bg-emerald-600 max-md:px-1">
                                Light Mode
                                <img
                                    src="./images/sun.png"
                                    alt="icone"
                                    className="h-5 w-6 pl-1 -mb-1"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div className="flex flex-col items-center w-full text-white">
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Accueil{" "}
                            <img
                                src="./images/sun.png"
                                alt="icone"
                                className="h-5 w-6 pl-1 mt-0.5"
                            />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Formation{" "}
                            <img
                                src="./images/video.png"
                                alt="icone"
                                className="h-5 w-6 pl-1 mt-0.5"
                            />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Compte{" "}
                            <img
                                src="./images/more.png"
                                alt="icone"
                                className="h-5 w-6 pl-1 mt-0.5"
                            />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Partage{" "}
                            <img
                                src="./images/share.png"
                                alt="icone"
                                className="h-5 w-6 pl-1 mt-0.5"
                            />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Forum{" "}
                            <img
                                src="./images/forum.png"
                                alt="icone"
                                className="h-5 w-6 pl-1 mt-0.5"
                            />
                        </Link>
                        <Link className="flex w-10/12 justify-between px-4 py-1 rounded-md hover:border-2 hover:border-white mt-1 transition">
                            Don{" "}
                            <img
                                src="./images/don.png"
                                alt="icone"
                                className="h-5 w-6 pl-1 mt-0.5"
                            />
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