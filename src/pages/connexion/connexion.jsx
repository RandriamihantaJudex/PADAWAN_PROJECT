import { useRef, useState } from "react"
import './connexion.css'
import ConnexionPage from "./login"
import InscriptionPage from "./signIn"
import { Axios } from "axios"

// const Login = () => {
//     const [userLogin,setUserLogin]=useState()
//     const handleChange=(e)=>{
//         let {value,name}=e.target
//         setUserLogin((valeur) => ({ ...valeur ,[name]:value}))
//     }

//     const handleSubmit=(e)=>{
//         let endPointConnexion=''
//         e.preventDefault()
//         let {password } = userLogin
//         if (password.length>7){
//             // Axios.post(endPointConnexion, userLogin)
//             //     .then(response => {
//             //         console.log('Authentification réussie:', response.data);
//             //     })
//             //     .catch(error => {
//             //         console.error('Erreur d\'authentification:', error.message);
//             //     });
//             localStorage.setItem('isConnected', 'true')
//         }
//         else{
//             localStorage.setItem('isConnected', 'false')
//             console.log('Mot de passe trop court');
//         }
       
//     }

   
//     return <div className="h-auto w-full py-[20px] ">
//         <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col text-[#212121]">
//             <label htmlFor="email" className="mb-[0px] text-[#494949] max-md:text-[12px]">Email</label>
//             <input type="text" name="email" onChange={(e) => handleChange(e)} className="h-[25px] border-b border-[#494949]  mb-[10px] outline-none focus:border-[#008f64] focus:border-b-2"/>
//             <label htmlFor="password" className="mb-[0px] text-[#494949] max-md:text-[12px]">Mot de passe</label>
//             <input type="password" name="password" onChange={(e) => handleChange(e)} className="h-[25px] border-b border-[#494949] mb-[10px] outline-none focus:border-[#008f64] focus:border-b-2" />
//             <div className="w-full flex justify-end"> <button className="text-[13px]">Mot de passe oublie</button></div>
//             <button type="submit" className="mt-[20px] bg-[#008f64] text-white h-[35px] rounded-md max-md:text-[13px]">Se connecter</button>
//             <div className="flex w-full justify-between items-center text-[10px] mt-[30px]">
//                <div className="h-[1px] w-2/5 bg-[#494949] opacity-50"></div> 
//                <p>ou</p>
//                <div className="h-[1px] w-2/5 bg-[#494949] opacity-50"></div> 
//             </div>
//             <div className="flex flex-col items-center gap-[10px] mt-[30px]">
//                 <button className="w-full border py-[6px] pl-[40px] gap-[20px] flex items-center bg-[#1877F2] rounded-md text-white hover:opacity-90 max-md:text-[12px]">  <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 max-md:w-4 max-md:h-4 my-1.5" />Se connecter avec facebook</button>
//                 <button className="w-full border py-[6px] pl-[40px] gap-[20px] flex items-center bg-[#DB4437] rounded-md text-white hover:opacity-90 max-md:text-[12px]"><FontAwesomeIcon icon={faGoogle} className="h-5 w-5 max-md:w-4 max-md:h-4 my-1.5" /> Se connecter avec google</button>
//                 <button className="w-full border py-[6px] pl-[40px] gap-[20px] flex bg-[#1DA1F2]  items-center rounded-md text-white hover:opacity-90 max-md:text-[12px]"  ><FontAwesomeIcon icon={faTwitter} className="h-5 w-5 max-md:w-4 max-md:h-4 my-1.5" /> Se connecter avec twitter</button>
//             </div>
//         </form>
//     </div>
// }

// const SignUp=()=>{
//     return <div>
       
//     </div>
// }


const Connexion = () => {
    // const switchRef=useRef()
    // const [switchB,setSwitchB]=useState(true)
    // const switchLogin=(e)=>{
    //     setSwitchB(!switchB)
    //     let {children}=switchRef.current
    //     let { classList } = e.target
    //     for (let index = 0; index < 2 ;index++) {
    //         children[index].classList.remove('switchActive')
    //         children[index].classList.add('switchNotActive')
    //     }
    //     classList.remove('switchNotActive')
    //     classList.add('switchActive')
       
    // }
    let slideRef=useRef()
    let parentRef=useRef()
    let [echange,setEchange]=useState(true)
    const slideGreen=()=>{
        parentRef.current.style.opacity=0
        setTimeout(() => {
            parentRef.current.style.opacity=1
            setEchange(!echange)
        }, 1000);
  
        if (slideRef.current.classList.contains('greenSwitch')) {
            slideRef.current.classList.remove('greenSwitch')
            slideRef.current.classList.add('greenSwitch2')
        }
        else{
            console.log(slideRef);
            slideRef.current.classList.remove('greenSwitch2')
            slideRef.current.classList.add('greenSwitch')
        }
    }

    
    


    return <div className="h-[100vh]  w-full flex  max-md:h-auto max-md:py-[20px] ">
        {/* <div className="w-1/2 h-full  flex items-center justify-center max-md:hidden">
            <img src="./images/loginIllu.png" alt="illustration" className="w-[400] h-[400px]" />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-[#008f64] max-md:w-full">
            <div className="h-auto w-8/12 bg-white rounded-lg p-[15px] px-[35px] max-md:px-[10px] max-md:w-10/12">
                <div className="flex" ref={switchRef}>
                    <button onClick={(e) => switchLogin(e)} className="w-1/2   h-[35px] switchActive border-b-2 max-md:text-[12px]">Connexion</button>
                    <button onClick={(e) => switchLogin(e)} className="w-1/2 h-[35px] border-b-2 switchNotActive max-md:text-[12px]">Inscription</button>
                </div>
              
            </div>
        </div> */}



        <div className="ConnectionMoove h-[60px] w-[60px] fixed bg-white opacity-30  -z-10 ml-[50px] mt-[70px]"></div>
        <div className="ConnectionMoove h-[60px] w-[60px] fixed rounded-full bg-white opacity-30 -z-10 ml-[30vw] mt-[30vh]"></div>
        <div className="ConnectionMoove h-[60px] w-[60px] fixed bg-white  opacity-30 rotate-45 -z-10 ml-[40vw] mt-[70vh]"></div>
        <div className="ConnectionMoove h-[350px] w-[350px] rounded-full fixed bg-white opacity-30 -z-10 -ml-[160px] mt-[80vh]"></div>
       
        <div className="ConnectionMoove w-0 h-0 -mt-[40px] -z-10  ml-[30vw] rotate-180 fixed border-l-[50px] border-l-transparent border-t-[75px] border-t-white opacity-30  border-r-[50px] border-r-transparent"></div>
        <div className="ConnectionMoove w-0 h-0 mt-[50vh] -z-10  ml-[15vw] rotate-180 fixed border-l-[40px] border-l-transparent border-t-[65px] border-t-white opacity-30  border-r-[40px] border-r-transparent"></div>

        <div className="ConnectionMoove h-[60px] w-[60px] fixed bg-white opacity-30  -z-10 ml-[55vw] mt-[70px]"></div>
        <div className="ConnectionMoove h-[60px] w-[60px] fixed rounded-full bg-white opacity-30 -z-10 ml-[70vw] mt-[30vh]"></div>
        <div className="ConnectionMoove h-[60px] w-[60px] fixed bg-white  opacity-30 rotate-45 -z-10 ml-[90vw] mt-[70vh]"></div>
        <div className="ConnectionMoove h-[350px] w-[350px] rounded-full fixed bg-white opacity-30 -z-10 ml-[90vw] mt-[80vh]"></div>
        <div className="ConnectionMoove w-0 h-0 -mt-[40px] -z-10  ml-[70vw] rotate-180 fixed border-l-[50px] border-l-transparent border-t-[75px] border-t-white opacity-30  border-r-[50px] border-r-transparent"></div>
        <div className="ConnectionMoove w-0 h-0 mt-[50vh] -z-10  ml-[55vw] rotate-180 fixed border-l-[40px] border-l-transparent border-t-[65px] border-t-white opacity-30  border-r-[40px] border-r-transparent"></div>
        <div className="ConnectionMoove h-[60px] w-[60px] fixed rounded-full bg-white opacity-30 -z-10 ml-[60vw] mt-[90vh]"></div>

        

        <div className="w-1/2 fixed bg-[#008f64] h-[100vh] -z-20 greenSwitch max-md:h-[100vh] max-md:hidden" ref={slideRef}>
        </div>
       
        <div className="w-full h-[100vh] flex max-md:flex-col max-md:bg-white" ref={parentRef}>
             {echange?<ConnexionPage slideGreen={slideGreen}/>:<InscriptionPage slideGreen={slideGreen}/>}
        </div>
      
    </div>
}

export default Connexion