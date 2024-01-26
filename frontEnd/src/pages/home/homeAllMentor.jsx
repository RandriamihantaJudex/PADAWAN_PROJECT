import { useContext, useEffect, useRef, useState } from "react";
import { suggestionMentor } from "./variablesHome";
import { listDomaine } from "./variablesHome";
import { tabTrois } from "./variablesHome";
import { homeContext } from "./homePage";
import Aos from "aos";
import { getMentor } from "../../api/mentorApi";
Aos.init()
// DONNEE REQUIS LIGNE 90 : TABLEAU DE LISTE DES DOMAINES 
// DONNEE REQUIS LIGNE 137 : TABLEAU DE 10 MENTOR LES PLUS ACTIFS 




const AllMentorList = () => {

    // const [mentorList,setMentorList]=useState()
    // useEffect(()=>{
    //     async function getMentorList(){
    //         const mentors= await getMentor()
    //         setMentorList(mentors)
    //     }
    //     getMentorList()
    // },[])


    const sliderMentor = useRef();
    const tailleCarteMentor = useRef();
    const ProviderData = useContext(homeContext);
    const scrollMentor = (direction) => {
        direction === "left"
            ? (sliderMentor.current.scrollLeft -=
                tailleCarteMentor.current.clientWidth + 40)
            : (sliderMentor.current.scrollLeft +=
                tailleCarteMentor.current.clientWidth + 40);
    };

    const imageMentor = useRef();
    document.addEventListener("DOMContentLoaded", () => {
        let nombreMentor =
            suggestionMentor.length * tailleCarteMentor.current.clientWidth + 20;
        imageMentor.current.style.width = `${nombreMentor}px`;
    });
    const [boolBouton, setBoolBouton] = useState(true);
    const sendRequest = () => {
        setBoolBouton(!boolBouton);
    };

    const clickOnMontor = (e) => {
        let tailleCarte;
        if (document.children[0].clientWidth > 700) {
            tailleCarte = [200, 600, 200];
        } else {
            tailleCarte = tailleCarte = [180, 0, 120];
        }
        if (e.target.localName === "div" || e.target.localName === "img") {
            if (!e.target.parentNode.children[1].classList.contains("show")) {
                for (
                    let index = 0;
                    index < imageMentor.current.children.length;
                    index++
                ) {
                    imageMentor.current.children[index].children[0].classList.add(
                        "blur-sm"
                    );
                    imageMentor.current.children[index].children[1].classList.remove(
                        "show"
                    );
                    imageMentor.current.children[index].children[1].classList.add(
                        "dontShow"
                    );
                }
                imageMentor.current.style.width = `${(suggestionMentor.length - 1) * tailleCarte[0] + tailleCarte[1]
                    }px`;
                e.target.parentNode.children[1].classList.remove("dontShow");
                e.target.parentNode.children[1].classList.add("show");
                e.target.parentNode.children[0].classList.remove("blur-sm");
            } else {
                for (
                    let index = 0;
                    index < imageMentor.current.children.length;
                    index++
                ) {
                    imageMentor.current.children[index].children[0].classList.remove(
                        "blur-sm"
                    );
                    imageMentor.current.children[index].children[1].classList.remove(
                        "show"
                    );
                    imageMentor.current.children[index].children[1].classList.add(
                        "dontShow"
                    );
                    imageMentor.current.style.width = `${suggestionMentor.length * tailleCarte[2] + 40
                        }px`;
                }
            }
        }
    };

    return (
        <div data-aos="fade-up" className="w-full flex flex-col items-center mb-16 max-md:mb-5" >
            <h1 className="text-[#008F64]  text-3xl max-md:text-[16px]">Mentor</h1>
            <div className="slidePubParent w-full h-16 bg-[#008F64] mt-7  text-white text-lg max-md:h-9 max-md:mt-1">
                {tabTrois.map((element) => {
                    return (
                        <div key={element} className="h-full slidePub">
                            {listDomaine.map((domaine) => {
                                return (
                                    <div key={domaine} className="h-full flex items-center">
                                        <div className="elementDomaine h-full flex items-center justify-evenly max-md:text-[11px] uppercase">
                                            {domaine}{" "}
                                        </div>
                                        <img
                                            src="./images/close.png"
                                            className=" iconDeroule cursor-pointer ml-2 mt-1 max-md:h-[1px] max-md:w-[1px] "
                                            alt="menu"
                                        ></img>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <div
                className="parentMentorImage items-center justify center w-full h-auto mt-10 max-md:mt-5 overflow-hidden max-md:overflow-scroll"
                ref={sliderMentor}
            >
                <div
                    className="maxIndex absolute mt-[115px] h-[50px] w-[50px] rounded-full bg-[#008F64] centrer border-2 border-t-white ml-8 max-md:hidden"
                    onClick={() => scrollMentor("left")}
                >
                    <img
                        src="./images/chevronDownWhite.png"
                        alt="fleche"
                        className="h-5 w-5 rotate-90 cursor-pointer"
                    />
                </div>
                <div
                    className="maxIndex flecheDroiteMentor absolute mt-[115px] h-[50px] w-[50px] rounded-full bg-[#008F64]  centrer border-2 border-t-white max-md:hidden"
                    onClick={() => scrollMentor("right")}
                >
                    <img
                        src="./images/chevronDownWhite.png  "
                        alt="fleche"
                        className="h-5 w-5 -rotate-90 cursor-pointer"
                    />
                </div>
                <div
                    className=" .containerMentoImage h-11/12 w-[3000px]  flex gap-[20px] items-center pl-[20px] "
                    ref={imageMentor}
                >
                    {suggestionMentor.map((mentor) => {
                        return (
                            <div
                                key={mentor.nom}
                                onClick={(e) => clickOnMontor(e)}
                                className="cursor-pointer w-auto bg-[#008F64] flex items-center justify-evenly rounded-md"
                            >
                                <img
                                    src={mentor.image}
                                    alt="mentor"
                                    className="h-[300px] w-[200px] rounded-lg max-md:w-[120px] max-md:h-[170px]"
                                    ref={tailleCarteMentor}
                                />
                                <div className="dontShow h-[300px] w-[380px]  max-md:w-[200px] text-white flex flex-col justify-between p-7 max-md:h-[170px] max-md:p-2 ">
                                    <div className="w-full  h-[55px] flex justify-between">
                                        <div>
                                            <h1 className=" text-[17px] tracking-wide pr-2 max-md:text-[12px] text-ellipsis">
                                                {mentor.nom}
                                            </h1>
                                            <p className="text-[13px] max-md:text-[10px]">
                                                {mentor.domaine}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center pt-0.5 h-6 w-6">
                                            <img
                                                src="./images/love.png "
                                                alt="love"
                                                className="h-6 w-6 max-md:h-4 max-md:w-4 "
                                            />
                                            <p className="max-md:text-[10px]">{mentor.like}</p>
                                        </div>
                                    </div>
                                    <p className="max-md:text-[8px] md:-mt-10 -mt-6">
                                        "{mentor.parole}"
                                    </p>
                                    {boolBouton ? (
                                        <button
                                            className="w-auto text-[#008F64] bg-white py-2 rounded-md hover:opacity-90 max-md:py-1 max-md:text-[12px]"
                                            onClick={() => ProviderData.uptadeMentor(mentor.nom)}
                                        >
                                            Envoyer une demande
                                        </button>
                                    ) : (
                                        <button
                                            className="w-auto text-white bg-[#1f1f1f] py-2 rounded-md hover:bg-[#272727] max-md:py-1 max-md:text-[12px]"
                                            onClick={() => sendRequest()}
                                        >
                                            Annuler la demande
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


export default AllMentorList;