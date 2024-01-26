import "./formation.css"

import "./wickedcss.min.css"
const FormationCouveture = () => {
    const AnimeNombre = () => {
        setTimeout(() => {
            const nbrRef = document.querySelector(".nombreVue")
            // ANIMATION INCREMENTATION DES NOMBRE DE VIDEO
            const intervalNombre = (nombre, seconde) => {
                let nbrVideo = 0
                const myInterval = setInterval(() => {
                    nbrVideo++
                    nbrRef.innerHTML = `+ ${nbrVideo}`
                    if (nbrVideo > nombre - 1) {
                        nbrRef.classList.add('videoAnimation')
                        clearInterval(myInterval)
                        setTimeout(() => {
                            nbrRef.classList.remove('videoAnimation')
                        }, 600);
                    }
                }, seconde);
            }
            intervalNombre(100, 40)
        }, 1000);

        return <p className="text-2xl font-extrabold nombreVue" ></p>
    }

    return (
        <>
            <div className="px-[150px] flex w-full items-center justify-between mb-[100px] mt-[60px] max-md:hidden">
                <div className="flex flex-col w-3/12 mt-[60px] gap-[20px]">
                    <div className="flex gap-4">
                        <img
                            src="./../images/study.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px] "
                        />
                        <img
                            src="./../images/formationVideo.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="./../images/futuristic_girl.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="./../images/study.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                    </div>
                    <p className="text-justify ">
                        Les formation constituent une source inestimable pour votre
                        apprentissage. Explorez tous ce que vous souhaitez etudier.
                    </p>
                    <div className="imgFloat w-9/12">
                        <img
                            src="./../images/study.jpg"
                            alt="girl study "
                            className="object-cover rounded-xl h-[260px] w-full floater"
                        />
                    </div>

                </div>

                <div className="h-full flex flex-col w-4/12 items-center">
                    <img
                        src="./../images/formationVideo.jpg"
                        alt="girl study "
                        className="object-cover rounded-xl h-[260px] w-full"
                    />
                    <div className="flex mt-[20px] justify-evenly w-full ">
                        <div className="flex flex-col  items-center">
                            <AnimeNombre />
                            <p className="text-md font-semibold">Videos</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-extrabold ">+ 3000</p>
                            <p className="text-md font-semibold">Vues</p>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-3/12 mb-[60px] gap-[20px] items-end">
                    <div className="imgFloat w-9/12">
                        <img
                            src="./../images/futuristic_girl.jpg"
                            alt="girl study "
                            className="object-cover rounded-xl h-[260px] w-full floater"
                        />
                    </div>
                    <p className="text-justify ">
                        Les formation constituent une source inestimable pour votre
                        apprentissage. Explorez tous ce que vous souhaitez etudier.
                    </p>
                    <div className="flex gap-4 ">
                        <img
                            src="./../images/study.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="./images/formationVideo.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="./../images/futuristic_girl.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="./../images/study.jpg"
                            alt="girl study"
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-[250px] flex items-center px-[25px] md:hidden">
                <div className="w-8/12 gap-[7px] flex flex-col">
                    <h1 className="text-[22px] "><span className="text-[#008F64] text-[30px]">P</span>adawan</h1>
                    <p className="text-[11px]">Explorez tout ce que vous souhaite étudier
                        car les formatins que nous proposons vous
                        serons utiles.</p>
                    <div className="flex gap-1 ">
                        <img
                            src="./../images/study.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                        <img
                            src="./../images/formationVideo.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                        <img
                            src="./../images/futuristic_girl.jpg"
                            alt="girl study "
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                        <img
                            src="./../images/study.jpg"
                            alt="girl study"
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                    </div>
                    <div className="flex mt-[20px] w-full gap-[20px]">
                        <div className="flex flex-col  items-center">
                            <p className="text-[14px] font-extrabold ">+ 100</p>
                            <p className="text-md font-semibold">Videos</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-[14px] font-extrabold ">+ 3000</p>
                            <p className="text-md font-semibold">Vues</p>
                        </div>
                    </div>
                </div>
                <div className="imgFloat w-4/12">
                    <img
                        src="./../images/study.jpg"
                        alt="girl study "
                        className="object-cover rounded-xl h-[150px] w-full floater"
                    />
                </div>
            </div>
        </>
    );
}
export default FormationCouveture