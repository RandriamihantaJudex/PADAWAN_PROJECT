import { createContext,useRef,useState } from "react"

export const connexionContext=createContext()
export const ConnexionProvider=( {children})=>{
    const [loginInfo,setLoginInfo]=useState({})
    return <connexionContext.Provider value={{loginInfo,setLoginInfo}}>
        {children}
    </connexionContext.Provider>
}


export const signContext=createContext()
export const SignProvider=( {children})=>{
    const [signInfo,setSignInfo]=useState({})
    const [postes,setPostes]=useState([])
    const [nbrPoste,setNbr]=useState(0)
    let expRef=useRef()
    let childrenRef=useRef()
    const handleMore=()=>{
        expRef.current.classList.contains('hidden')?expRef.current.classList.remove('hidden'):expRef.current.classList.add('hidden')
    }
   
  
   
    return <signContext.Provider value={{signInfo,setSignInfo,expRef,handleMore,postes,setPostes,childrenRef,nbrPoste,setNbr}}>
        {children}
    </signContext.Provider>
}