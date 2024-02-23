import { ConnexionButton, ModelEmail,ModelPassword} from "./composantConnexion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faGoogle,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope ,faClock} from "@fortawesome/free-regular-svg-icons"
import { ConnexionProvider } from "./connectionContext"




const ConnexionPage=({slideGreen})=>{
    
    return <>
     <div className="w-1/2 h-full flex justify-center items-center animationConnexion max-md:w-full max-md:h-auto max-md:py-[20px]">
        <div className="flex flex-col items-center w-full">
            <h2 className="mb-[30px] text-[30px] text-[#008f64]">Se connecter</h2>
            <ConnexionProvider>
            <form className="w-7/12 h-auto flex justify-center flex-col gap-[20px] max-md:w-10/12" >
                    <ModelEmail type={'text'} icon={faEnvelope} name={'email'} placeholder={'Email'} id={'email'}/>
                    <ModelPassword  name={'password'} icon={faClock} id={'password'} placeholder={'Mot de passe'} />
                    <div className="w-full flex justify-between gap-[20px] mt-[15px]">
                         <ConnexionButton/>
                    </div>
                    <div className="flex w-full items-center mt-[15px] justify-between text-[#717171]">
                        <div className="h-[1px] w-2/5 bg-[#e9e9e9]"></div>
                        <p>ou</p>
                        <div className="h-[1px] w-2/5 bg-[#e9e9e9]"></div>
                    </div>
                    <div className="flex justify-evenly items-center w-full">
                        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#e9e9e9] rounded-full hover:bg-[#008f64] text-[#717171] hover:text-white cursor-pointer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#e9e9e9] rounded-full hover:bg-[#008f64] text-[#717171] hover:text-white cursor-pointer">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#e9e9e9] rounded-full hover:bg-[#008f64] text-[#717171] hover:text-white cursor-pointer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
            </form>
            </ConnexionProvider>
        </div>
    </div>
    <div className="w-1/2 h-full flex justify-center items-center max-md:w-full max-md:h-auto max-md:bg-[#008f64] max-md:py-[20px]">
        <div className="h-auto flex flex-col items-center  text-white gap-[15px]" >
            <h1 className="text-center text-[30px] w-65 mb-[20px] max-md:text-[20px]">Nouveau chez Padawan? Bienvenue.</h1>
            <p className="w-80 text-center">Entrer vos informations personnels et commencez l'aventure avec nous.</p>
            <button onClick={()=>slideGreen()} className="hover:mr-[20px] text-[20px] border border-white rounded-full p-[8px] w-[200px]">S'inscrire</button>
        </div>
    </div>    
    </>
}

export default ConnexionPage