import { useRef } from "react";
import "./formation.css"

import "./wickedcss.min.css"
const FormationCouveture = () => {
    const nbrRef = useRef()

 const intervalNombre = (cible, nombre, seconde) => {
        let nbrVideo = 0
        const myInterval = setInterval(() => {
            nbrVideo++
            cible.current.innerHTML = `+ ${nbrVideo}`
            if (nbrVideo > nombre - 1) {
                cible.current.classList.add('videoAnimation')
                clearInterval(myInterval)
                setTimeout(() => {
                    cible.current.classList.remove('videoAnimation')
                }, 600);
                
            }
        }, seconde);
    }
    intervalNombre(nbrRef, 100, 40)

    return (
        <div className="px-[150px] flex w-full items-center justify-between mb-[100px] mt-[60px]">
            <div className="flex flex-col w-3/12 mt-[60px] gap-[20px]">
                <div className="flex gap-4">
                    <img
                        src="./images/study.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px] "
                    />
                    <img
                        src="./images/formationVideo.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                    <img
                        src="./images/futuristic_girl.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                    <img
                        src="./images/study.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                </div>
                <p className="text-justify ">
                    Les formation constituent une source inestimable pour votre
                    apprentissage. Explorez tous ce que vous souhaitez etudier.
                </p>
                <img
                    src="./images/study.jpg"
                    alt="girl study "
                    className="object-cover rounded-xl h-[260px] w-9/12 floater"
                />
            </div>

            <div className="h-full flex flex-col w-4/12 items-center">
                <img
                    src="./images/formationVideo.jpg"
                    alt="girl study "
                    className="object-cover rounded-xl h-[260px] w-full"
                />
                <div className="flex mt-[20px] justify-evenly w-full ">
                    <div className="flex flex-col  items-center">
                        <p className="text-2xl font-extrabold " ref={nbrRef}></p>
                        <p className="text-md font-semibold">Videos</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-extrabold ">+ 3000</p>
                        <p className="text-md font-semibold">Vues</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col w-3/12 mb-[60px] gap-[20px] items-end">
                <img
                    src="./images/futuristic_girl.jpg"
                    alt="girl study "
                    className="object-cover rounded-xl h-[260px] w-9/12 floater"
                />
                <p className="text-justify ">
                    Les formation constituent une source inestimable pour votre
                    apprentissage. Explorez tous ce que vous souhaitez etudier.
                </p>
                <div className="flex gap-4 ">
                    <img
                        src="./images/study.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                    <img
                        src="./images/formationVideo.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                    <img
                        src="./images/futuristic_girl.jpg"
                        alt="girl study "
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                    <img
                        src="./images/study.jpg"
                        alt="girl study"
                        className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                    />
                </div>
            </div>
        </div>
    );
}
export default FormationCouveture