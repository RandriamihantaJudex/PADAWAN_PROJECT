import {  useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
Aos.init()
const PresentationVideo = () => {
    const MyVideo = useRef();
    const Info = useRef();
    document.addEventListener("DOMContentLoaded", () => {
        MyVideo.current.hidden = true;
    });

    const afficherVideo = () => {
        if (Info.current.hidden === false) {
            Info.current.hidden = true;
            MyVideo.current.hidden = false;
            MyVideo.current.autoplay = true;
            MyVideo.current.style.display='flex'
        } else {
            Info.current.hidden = false;
            MyVideo.current.hidden = true;
        }
    };
    const enPause = () => {
        MyVideo.current.style.display = 'none'
        Info.current.hidden = false;
        MyVideo.current.hidden = true;
    };
    return (
        <div data-aos="fade-up"  className="videoContainer w-full my-16 max-md:my-1 h-96 max-md:h-60 border-2 centrer flex items-center justify-center">
            <div ref={Info} className=" h-60 ">
                <div className="redAbsolute h-60 flex items-center justify-center   ">
                    <div className="testDiv rounded-lg centrer  mx-6 m-2 max-lg:w-full w-[500px]">
                        <div className="h-full w-full text-white p-4 flex-col justify-between hidden max-lg:flex max-sm:justify-center">
                            <h1 className="text-3xl tracking-wide fredoka font-semibold max-xl:text-2xl max-sm:text-sm ">
                                PRESENTATION DE PADAWAN
                            </h1>
                            <p className="-mt-[55px]  max-lg:-mt-[0px] max-lg:text-sm max-sm:text-[10px]">
                                Padawan facilite votre apprentissage g ratuitement, avec l’aide
                                de personne expérimenté. Vous aller vous concentrer directement
                                sur les compétences nécessaires a votre futur vie professionnel.
                            </p>
                            <button
                                className="bg-[#008F64] hover:bg-emerald-600  w-60 flex justify-center items-center py-3 rounded-lg max-md:border max-lg:w-42 max-lg:py-1.5  max-lg:text-sm max-sm:w-[170px] max-sm:py-0.5 max-sm:border"
                                onClick={(e) => afficherVideo()}
                            >
                                Regarder la video
                                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 cursor-pointer ml-2 mt-1 max-md:h-[10] max-md:w-[10px]" />

                            </button>
                        </div>
                    </div>
                    <div className="h-full  w-5/12 text-white  flex flex-col justify-between max-lg:hidden">
                        <h1 className="text-3xl tracking-wide fredoka font-semibold max-xl:text-2xl">
                            PRESENTATION DE PADAWAN
                        </h1>
                        <p className="-mt-[55px]  max-lg:-mt-[0px]">
                            Padawan facilite votre apprentissage g ratuitement, avec l’aide de
                            personne expérimenté. Vous aller vous concentrer directement sur
                            les compétences nécessaires a votre futur vie professionnel.
                        </p>
                        <button
                            className="bg-[#008F64] hover:bg-emerald-600 w-60 flex justify-center items-center py-3 rounded-lg"
                            onClick={(e) => afficherVideo()}
                        >
                            Regarder la video
                            <FontAwesomeIcon icon={faYoutube}  className="h-5 w-5 cursor-pointer ml-2 mt-1 max-md:h-1 max-md:w-1"/>
                        </button>
                    </div>
                </div>
            </div>

            <video
                ref={MyVideo}
                controls
                onPause={(e) => enPause()}
                src="./video/videoPresentation.mp4"
                className="videopresentation max-sm:w-[90%]"
            ></video>

            <div className="trans w-full h-full bg-black"></div>
        </div>
    );
};

export default PresentationVideo;