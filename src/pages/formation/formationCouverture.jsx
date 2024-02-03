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
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px] "
                        />
                        <img
                            src="https://img.freepik.com/free-photo/handsome-bearded-man-freelancer-working-remote-from-outdoor-cafe-programmer-with-laptop-listening-music-focus-work_176420-25722.jpg?w=740&t=st=1706890904~exp=1706891504~hmac=868578002b02365bc971197e64183d2ae70896cf2655573412214d14ad3a9a1e"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/person-wearing-futuristic-high-tech-virtual-reality-glasses_23-2151141614.jpg?t=st=1706891441~exp=1706895041~hmac=87c24e074e76e2f963c13f8f5ab780daacbc298dfd1875457fde5bbfe37023a6&w=360"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
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
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
                            alt="girl study "
                            className="object-cover rounded-xl h-[260px] w-full floater"
                        />
                    </div>

                </div>

                <div className="h-full flex flex-col w-4/12 items-center">
                    <img
                        src="https://img.freepik.com/free-photo/handsome-bearded-man-freelancer-working-remote-from-outdoor-cafe-programmer-with-laptop-listening-music-focus-work_176420-25722.jpg?w=740&t=st=1706890904~exp=1706891504~hmac=868578002b02365bc971197e64183d2ae70896cf2655573412214d14ad3a9a1e"
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
                            src="https://img.freepik.com/free-photo/person-wearing-futuristic-high-tech-virtual-reality-glasses_23-2151141614.jpg?t=st=1706891441~exp=1706895041~hmac=87c24e074e76e2f963c13f8f5ab780daacbc298dfd1875457fde5bbfe37023a6&w=360"
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
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/handsome-bearded-man-freelancer-working-remote-from-outdoor-cafe-programmer-with-laptop-listening-music-focus-work_176420-25722.jpg?w=740&t=st=1706890904~exp=1706891504~hmac=868578002b02365bc971197e64183d2ae70896cf2655573412214d14ad3a9a1e"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/person-wearing-futuristic-high-tech-virtual-reality-glasses_23-2151141614.jpg?t=st=1706891441~exp=1706895041~hmac=87c24e074e76e2f963c13f8f5ab780daacbc298dfd1875457fde5bbfe37023a6&w=360"
                            alt="girl study "
                            className="object-cover rounded-full border-2 border-[#008F64] h-[50px] w-[50px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
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
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
                            alt="girl study "
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/handsome-bearded-man-freelancer-working-remote-from-outdoor-cafe-programmer-with-laptop-listening-music-focus-work_176420-25722.jpg?w=740&t=st=1706890904~exp=1706891504~hmac=868578002b02365bc971197e64183d2ae70896cf2655573412214d14ad3a9a1e"
                            alt="girl study "
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/person-wearing-futuristic-high-tech-virtual-reality-glasses_23-2151141614.jpg?t=st=1706891441~exp=1706895041~hmac=87c24e074e76e2f963c13f8f5ab780daacbc298dfd1875457fde5bbfe37023a6&w=360"
                            alt="girl study "
                            className="object-cover rounded-full border border-[#008F64] h-[30px] w-[30px] p-[2px]"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
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
                        src="https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca"
                        alt="girl study "
                        className="object-cover rounded-xl h-[150px] w-full floater"
                    />
                </div>
            </div>
        </>
    );
}
export default FormationCouveture