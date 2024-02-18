import { useRef, useState } from "react"
import './connexion.css'
import { Axios } from "axios"



const Login = () => {

    const [userLogin,setUserLogin]=useState()
    const handleChange=(e)=>{
        let {value,name}=e.target
        setUserLogin((valeur) => ({ ...valeur ,[name]:value}))
    }

    const handleSubmit=(e)=>{
        let endPointConnexion=''
        e.preventDefault()
        let {password } = userLogin
        if (password.length>7){
            // Axios.post(endPointConnexion, userLogin)
            //     .then(response => {
            //         console.log('Authentification réussie:', response.data);
            //     })
            //     .catch(error => {
            //         console.error('Erreur d\'authentification:', error.message);
            //     });
            localStorage.setItem('isConnected', 'true')

        }
        else{
            localStorage.setItem('isConnected', 'false')
            console.log('Mot de passe trop court');
        }
       
    }

   
    return <div className="h-auto w-full py-[20px]">
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col text-[#212121]">
            <label htmlFor="email" className="mb-[10px]">Email</label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} className="h-[32px] border border-[#212121] rounded-md mb-[10px]"/>
            <label htmlFor="password" className="mb-[10px]">Mot de passe</label>
            <input type="password" name="password" onChange={(e) => handleChange(e)} className="h-[32px] border border-[#212121] rounded-md mb-[10px]" />
            <button type="submit" className="mt-[20px] bg-[#008f64] text-white h-[35px] rounded-md">Se conecter</button>
        </form>
    </div>
}

const Connexion = () => {
    const switchRef=useRef()
    const switchLogin=(e)=>{
        let {children}=switchRef.current
        let { classList } = e.target
        for (let index = 0; index < 2 ;index++) {
            children[index].classList.remove('switchActive')
            children[index].classList.add('switchNotActive')
        }
        classList.remove('switchNotActive')
        classList.add('switchActive')
       
    }
    return <div className="h-[100vh]  w-full flex">
        <div className="w-1/2 h-full  flex items-center justify-center">
            <img src="./images/loginIllu.png" alt="illustration" className="w-[400] h-[400px]" />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-[#008f64]">
            <div className="h-auto w-8/12 bg-white rounded-md p-[15px]">
                <div className="flex" ref={switchRef}>
                    <button onClick={(e) => switchLogin(e)} className="w-1/2   h-[35px] switchActive border-b-2">Connexion</button>
                    <button onClick={(e) => switchLogin(e)} className="w-1/2 h-[35px] border-b-2 switchNotActive">Inscription</button>
                </div>
                <Login />
            </div>
        </div>
    </div>
}

export default Connexion