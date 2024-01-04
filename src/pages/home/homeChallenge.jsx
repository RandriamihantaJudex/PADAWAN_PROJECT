import { useRef, } from "react"
import {useNavigate } from "react-router-dom"
import { listDomaine } from "./variablesHome"


function Challenge() {
    const showOptionRef = useRef()
    const domaineChalengeAfficher=useRef()
     const goTo=useNavigate()
    const showOption = () => {
        if (showOptionRef.current.classList.contains('optionOn')) {
            showOptionRef.current.classList.remove('optionOn')
            showOptionRef.current.classList.add('optionOff')
        }
        else {
            showOptionRef.current.classList.add('optionOn')
            showOptionRef.current.classList.remove('optionOff')
        }
    }
   const GoChallenge=()=>{
        goTo(`./challenge/${domaineChalengeAfficher.current.innerHTML}`)
    }
    const choixDomaineChallenge=(domaine)=>{
        
        domaineChalengeAfficher.current.innerHTML = domaine
  
        showOption()
    }
    return <div className=" w-full anime-on-show mt-10  max-md:mt-1 px-16  max-md:px-2 mb-10 max-md:mb-0 flex flex-col items-center">
        <h1 className="text-[#008F64]  text-3xl max-md:text-[16px]">Challenge de la semaine</h1>
        <p className="mt-5 text-lg text-center max-md:px-5 max-md:text-[11px] max-md:mt-0bg-[red] max-md:my-1 max-md:-mt-3">Montrez de quoi vous etes capable en réalisant l’un de challenge de la semaine</p>
        <div className="h-[400px] max-md:h-[200px] w-full rounded-lg bg-white mt-8 max-md:mt-0 challengeImg">
            <div className="h-full w-full bg-[#00000076] rounded-lg  flex flex-col justify-evenly text-white pl-16 max-md:pl-10">
                <div className="OptionChallenge w-[250px] max-md:w-[160px]">
                    <div className="flex w-full items-center justify-between cursor-pointer" onClick={() => showOption()} >
                        <p className="text-[30px] max-md:text-[20px]" ref={domaineChalengeAfficher}>Design UI/UX</p>
                        <img
                            src="./images/chevronDownWhite.png"
                            className="h-7 w-7 cursor-pointer animate-bounce mt-4 max-md:h-4 max-md:w-4 max-md:mt-3"
                            alt="menu"
                        ></img>
                    </div>
                    <ul ref={showOptionRef} className=" bg-[#1f1f1f] absolute w-[250px] max-md:w-[160px] rounded-bl-md rounded-br-md border-2 border-white p-2 optionOff">
                        {
                            listDomaine.map((domaine) => {
                                return <li key={domaine} onClick={() => choixDomaineChallenge(domaine)}>{domaine}</li>
                            })
                        }
                    </ul>
                    <p className="text-sm">Jusqu'au 12 mars</p>
                </div>
                <h1 className="text-4xl w-7/12 max-md:text-sm max-md:w-11/12 ">REALISATION DE PROTOTYPE
                    D’APPLICATION</h1>
                <button className=" py-[6px] bg-[#008F64] w-[185px] max-md:text-[9px] max-md:border-1 max-md:py-1 max-md:w-[100px] centrer border-2 border-white rounded-md" 
                onClick={()=>GoChallenge()}
                >EN SAVOIR PLUS</button>
            </div>
        </div>
    </div>
}
export default Challenge