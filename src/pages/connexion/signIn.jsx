import {InputPersonnaliser ,ModelSelect, ModelPassword2, AddExp, InputModel4} from "./composantConnexion"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faLocation,faCalendar,faHatCowboy,faTransgender,faMountain,faLanguage,faClock,faPlus} from "@fortawesome/free-solid-svg-icons"
import {useRef, useState } from "react"
import { SignProvider, } from "./connectionContext"

const InscriptionPage=({slideGreen})=>{
    const formRef=useRef()
    let colorRef=useRef()
    let verificationNbr=0

    const Premier=()=>{
        const listeGenre=['Masculin','Feminin','Autre']
        return <div className="gap-[20px] flex flex-col">
                <InputPersonnaliser name={'nom'} type={'text'} icon={faUser} id={'nom'} placeholder={'Nom'}/>
            <InputPersonnaliser name={'prenom'} type={'text'} icon={faUser} id={'prenom'} placeholder={'Prenom'}/>
            <ModelSelect name={'genre'} liste={listeGenre} icon={faTransgender} placeholder={'Masculin'}/>
            <InputPersonnaliser name={'age'} type={'text'} icon={faCalendar} id={'age'} placeholder={'Age'}/>
        </div>
    }

    const Deuxieme=()=>{
        let listeDomaine=['Informatique','Design','Reseau','Bureautique','Art','Autre']
        let listeVille=['Antananarivo','Toamasina','Mahajanga','Toliara','Fianarantsoa','Antsiranana']
        let listeLangue=['Francais','Anglais','Malgache']

        return <div className="hidden gap-[20px] flex-col">
            <ModelSelect name={'domaine'} liste={listeDomaine} icon={faHatCowboy} placeholder={'Domaine'} />
            <ModelSelect name={'localisation'} liste={listeVille} icon={faLocation} placeholder={'Ville'}/>
            <InputPersonnaliser name={'niveau'} type={'text'} icon={faMountain} id={'niveau'} placeholder={'Niveau'}/>
            <ModelSelect name={'langue'} liste={listeLangue} icon={faLanguage} placeholder={'Langue'}/>

        </div>
    }

    const Troisieme=()=>{
        const [choix,setChoix]=useState(false)
        const choixRef=useRef()
        const choixHandler=(e)=>{
            e.preventDefault()
            if(e.target.innerHTML==='Mentor'){
                setChoix(true)
            }
            else{
                setChoix(false)
            }
            for (let index = 0; index < 2; index++) {
                choixRef.current.children[index].classList.remove('green2')
                choixRef.current.children[index].classList.add('noGreen2')
            }
            e.target.classList.remove('noGreen2')
            e.target.classList.add('green2')
    }

        return <div className="hidden gap-[20px] flex-col">
            <InputPersonnaliser name={'email'} type={'text'} icon={faCalendar} id={'email'} placeholder={'Email'}/>
            <ModelPassword2 name={'password'} icon={faClock} id={'password'} placeholder={'Mot de passe'} />
            <p className="text-[#717171] -mt-[10px]">S'inscrire en tant que :</p>
            <div className="w-full flex justify-between gap-[20px] -mt-[10px]" ref={choixRef}>
                <button type="button" onClick={(e)=>choixHandler(e)} className="w-1/2 h-[44px]  green2 text-white rounded-lg">Etudiant</button>
                <button type="button" onClick={(e)=>choixHandler(e)} className="w-1/2 h-[44px] noGreen2 text-[#717171] rounded-lg">Mentor</button>
            </div>
            {choix?<MentorChoice/>:''}
        </div>
    }

   
    

    const MentorChoice=()=>{
        let listeExp=['1-2ans','3-5ans','+6ans']
        return <>
            <ModelSelect name={'experience'} liste={listeExp} icon={faHatCowboy} placeholder={"Annee d'experience"} />
            <InputModel4   icon={faClock} placeholder={'Poste deja occupe'} icon2={faPlus}/>
            <InputPersonnaliser name={'description'} type={'text'} icon={faCalendar} id={'description'} placeholder={'Description'}/>
        </>
    }    
    const suivant=(e)=>{
        e.preventDefault()
        verificationNbr<2? verificationNbr++:console.log('');
        for (let index = 0; index < 3; index++) {
            colorRef.current.children[index].classList.remove('green')
            colorRef.current.children[index].classList.add('noGreen')
            formRef.current.children[verificationNbr].classList.remove('flex')
            formRef.current.children[index].classList.add('hidden')
        }
        colorRef.current.children[verificationNbr].classList.remove('noGreen')
        colorRef.current.children[verificationNbr].classList.add('green')
        formRef.current.children[verificationNbr].classList.remove('hidden')
    formRef.current.children[verificationNbr].classList.add('flex')
    }
    const retour=(e)=>{
        e.preventDefault()
        verificationNbr>0? verificationNbr--:console.log('');
        for (let index = 0; index < 3; index++) {
            colorRef.current.children[index].classList.remove('green')
            colorRef.current.children[index].classList.add('noGreen')
            formRef.current.children[verificationNbr].classList.remove('flex')
            formRef.current.children[index].classList.add('hidden')
        }
        colorRef.current.children[verificationNbr].classList.remove('noGreen')
        colorRef.current.children[verificationNbr].classList.add('green')
        formRef.current.children[verificationNbr].classList.remove('hidden')
    formRef.current.children[verificationNbr].classList.add('flex')
    }
    return <>
    <div className="w-1/2 h-full flex justify-center items-center max-md:w-full max-md:bg-[#008f64] max-md:py-[20px] max-md:h-auto max-md:hidden">
        <div className="h-auto flex flex-col items-center  text-white gap-[15px]" >
            <h1 className="text-center text-[30px] w-65 mb-[20px]">Nous somme content de vous retrouvez.</h1>
            <p className="w-80 text-center">Entrer vos informations de connection pour qu'on puisse vous identifiez.</p>
            <button onClick={()=>slideGreen()} className="text-[20px] border border-white rounded-full p-[10px] w-[200px]">Se connecter</button>
        </div>
    </div>
    <SignProvider>
    <div className="w-1/2 h-full flex justify-center max-md:w-full max-md:py-[20px] max-md:h-auto">
        <div className="w-full h-full flex flex-col items-center justify-center">
            <AddExp/>
            <h1 className="text-[#008f64] text-[30px] mb-[20px]">Cree un compte</h1>
            <form className="w-7/12 h-auto flex justify-center flex-col gap-[20px] max-md:w-10/12">
            
                    <div ref={formRef}>
                        <Premier/>
                    <Deuxieme/>
                        <Troisieme/>
                    </div>
                    <div className="flex gap-[10px]" ref={colorRef}>
                        <div className="w-1/3 h-[5px] green rounded-full"></div>
                        <div className="w-1/3 h-[5px] noGreen rounded-full"></div>
                        <div className="w-1/3 h-[5px] noGreen rounded-full"></div>
                    </div>

                    <div className="w-full flex justify-between gap-[20px] mt-[15px]">
                            <button onClick={(e)=>retour(e)} className="w-1/2 h-[44px] bg-[#e9e9e9] text-[#717171] rounded-lg">Annuler</button>
                            <button onClick={(e)=>suivant(e)} className="w-1/2 h-[44px]  bg-[#008f64] text-white rounded-lg">Suivant</button>
                    </div>
                
            </form>
        </div>
           
    </div>
    </SignProvider>
    <div className="w-1/2 h-full  justify-center items-center max-md:w-full max-md:bg-[#008f64] max-md:py-[20px] max-md:h-auto hidden max-md:flex">
        <div className="h-auto flex flex-col items-center  text-white gap-[15px]" >
            <h1 className="text-center text-[30px] w-65 mb-[20px] max-md:text-[25px]">Nous somme content de vous retrouvez.</h1>
            <p className="w-80 text-center">Entrer vos informations de connection pour qu'on puisse vous identifiez.</p>
            <button onClick={()=>slideGreen()} className="text-[20px] border border-white rounded-full p-[10px] w-[200px]">Se connecter</button>
        </div>
    </div>
    </>
}

export default InscriptionPage