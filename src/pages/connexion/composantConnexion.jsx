import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useRef, useState } from "react"
import { faEyeSlash ,faEye, faChevronDown,faClose} from "@fortawesome/free-solid-svg-icons"
import { connexionContext, signContext } from "./connectionContext"


export const InputPersonnaliser=({name,id,placeholder,icon,type})=>{
    let context=useContext(signContext)
    const handleChange=(e)=>{
        let {name,value}=e.target
        context.setSignInfo((element)=>({...element,[name]:value}))
        console.log(context.signInfo);
    }

    return <div className=" flex w-[400px] items-center gap-[15px] bg-[#e9e9e9] h-[44px] justify-between rounded-lg px-[20px]">
    <FontAwesomeIcon icon={icon} className=" text-[#717171]"/>
    <input onChange={(e)=>handleChange(e)} type={type} name={name} id={id}placeholder={placeholder}className="text-[#717171]  placeholder:text-[#717171] outline-none w-8/12 h-full bg-[#e9e9e9] rounded-r-lg"/>
    <FontAwesomeIcon icon={icon} className="ml-[20px] text-transparent"/>
</div>
}

export const InputMOdel2=({name,id,placeholder,icon,type,icon2})=>{
   return  <div className="flex w-full items-center gap-[15px] bg-[#e9e9e9] h-[44px] rounded-lg justify-between px-[20px]">
    <FontAwesomeIcon icon={icon} className=" text-[#717171] "/>
    <input type={type} name={name} id={id} placeholder={placeholder} disabled className=" text-[#717171]  placeholder:text-[#717171] outline-none w-8/12 h-full bg-[#e9e9e9] rounded-r-lg"/>
    <FontAwesomeIcon icon={icon2} className="ml-[20px] text-[#717171]" />
</div>
}


export const ModelSelect=({placeholder,icon,liste,name})=>{
    const selectRef=useRef()
    const selectedRef=useRef()
    let context=useContext(signContext)
    
    const handleClick=()=>{
        handleOut()
        selectRef.current.style.marginTop=selectRef.current.clientHeight+44+'px'
        
    }
    const handleOut=()=>{
        if( selectRef.current.classList.contains('flex')){
            selectRef.current.classList.remove('flex')
            selectRef.current.classList.add('hidden')
        }
        else{
            selectRef.current.classList.remove('hidden')
            selectRef.current.classList.add('flex')
        }
    }
    const handleSelect=(value)=>{
        selectedRef.current.innerHTML=value
        context.setSignInfo((element)=>({...element,[name]:value}))
        handleOut()
    }
    const handleLeave=()=>{
        selectRef.current.classList.remove('flex')
        selectRef.current.classList.add('hidden')
    }
    
    
    return  <div onClick={(e)=>handleClick(e)}  onMouseLeave={()=>handleLeave()} className="hover:cursor-pointer flex w-[400px] items-center gap-[15px] bg-[#e9e9e9] h-[44px] rounded-lg justify-between px-[20px]">
     <FontAwesomeIcon icon={icon} className=" text-[#717171] "/>
     <h1 ref={selectedRef} className="flex items-center text-[#717171] w-8/12 h-full bg-[#e9e9e9]">{placeholder}</h1>
     <FontAwesomeIcon  icon={faChevronDown} className="ml-[20px] text-[#717171]" />
     <div ref={selectRef} onClick={(e)=>handleOut()} className="CCent rounded-b-lg absolute w-[400px] h-auto  bg-[#008f64] -ml-[20px] text-white hidden flex-col" >
        {
            liste.map(element=>{
                return <p key={element} onClick={(e)=>handleSelect(element)} className="py-[5px] px-[10px] flex items-center border-b border-[#c4c4c470] hover:text-white hover:bg-[#717171]">{element}</p>
            })
        }
     </div>
 </div>
 }

export const InputMOdel3=({name,id,placeholder,icon,type,icon2,ref})=>{
    return  <div className="flex w-full items-center gap-[15px] bg-[#e9e9e9] h-[44px] rounded-lg justify-between px-[20px]">
     <FontAwesomeIcon icon={icon} className=" text-[#717171] "/>
     <input ref={ref} type={type} name={name} id={id} placeholder={placeholder}  className=" text-[#717171]  placeholder:text-[#717171] outline-none w-8/12 h-full bg-[#e9e9e9] rounded-r-lg"/>
     <FontAwesomeIcon icon={icon2} className="ml-[20px] text-[#717171]" />
 </div>
 }

 export const InputModel4=({placeholder,icon,icon2})=>{
    let context=useContext(signContext)

    return  <div onClick={()=>context.handleMore()} className="hover:cursor-pointer flex w-full items-center gap-[15px] bg-[#e9e9e9] h-[44px] rounded-lg justify-between px-[20px]">
     {context.nbrPoste>0?<h1 className="text-[#717171]">{context.nbrPoste+1}</h1>: <FontAwesomeIcon  icon={icon} className=" text-[#717171] "/>}
     <h1 className="flex items-center text-[#717171] w-8/12 h-full bg-[#e9e9e9]">{placeholder}</h1>
     <FontAwesomeIcon   icon={icon2} className="hover:cursor-pointer ml-[20px] text-[#717171]" />
 </div>
 }

 export const ModelPassword=({name,id,placeholder,icon,action})=>{
    let context=useContext(connexionContext)
    const passwordRef=useRef()
    let [iconBool,setIConBool]=useState(true)
    const passwordShow=()=>{
        if(passwordRef.current.type==='password'){
            passwordRef.current.type='text'
            setIConBool(false)
        }
        else{
            passwordRef.current.type='password'
            setIConBool(true)
        }
    }

    const handleChange=(e)=>{
        let { value,name}=e.target
        context.setLoginInfo((element)=>({...element,[name]:value}))
    }

    return  <div className="max-md:h-[38px] flex w-full items-center gap-[15px] bg-[#e9e9e9] h-[44px] rounded-lg justify-between px-[20px]">
     <FontAwesomeIcon icon={icon} className=" text-[#717171] "/>
     <input onChange={(e)=>handleChange(e)} ref={passwordRef} type='password'name={name} id={id} placeholder={placeholder}  className=" text-[#717171]  placeholder:text-[#717171] outline-none w-8/12 h-full bg-[#e9e9e9] rounded-r-lg"/>
{
    iconBool? <FontAwesomeIcon icon={faEye} className="ml-[20px] text-[#717171] cursor-pointer" onClick={()=>passwordShow()} />
    :<FontAwesomeIcon icon={faEyeSlash} className="ml-[20px] text-[#717171] cursor-pointer" onClick={()=>passwordShow()} />
}     
 </div>
 }

 export const ModelEmail=({name,id,placeholder,icon,type})=>{
    let context=useContext(connexionContext)
    const handleChange=(e)=>{
        let {value,name}=e.target
        context.setLoginInfo((element)=>({...element,[name]:value}))
    }
    return <div className="flex w-full items-center gap-[15px] bg-[#e9e9e9] h-[44px] justify-between rounded-lg px-[20px] max-md:h-[38px]">
    <FontAwesomeIcon icon={icon} className=" text-[#717171]"/>
    <input onChange={(e)=>handleChange(e)} type={type} name={name} id={id}placeholder={placeholder}className="text-[#717171]  placeholder:text-[#717171] outline-none w-8/12 h-full bg-[#e9e9e9] rounded-r-lg"/>
    <FontAwesomeIcon icon={icon} className="ml-[20px] text-transparent"/>
</div>
}

export const ConnexionButton=()=>{
    // let context=useContext(connexionContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return <>
    <button type="button" className="max-md:h-[38px] w-1/2 h-[44px] bg-[#e9e9e9] text-[#717171] rounded-lg">Annuler</button>
    <button onClick={(e)=>handleSubmit(e)} type="submit" className="max-md:h-[38px] w-1/2 h-[44px]  bg-[#008f64] text-white rounded-lg">Confirmer</button>
    </>
}


export const ModelPassword2=({name,id,placeholder,icon})=>{
    let context=useContext(signContext)
    const passwordRef=useRef()
    let [iconBool,setIConBool]=useState(true)
    const passwordShow=()=>{
        if(passwordRef.current.type==='password'){
            passwordRef.current.type='text'
            setIConBool(false)
        }
        else{
            passwordRef.current.type='password'
            setIConBool(true)
        }
    }

    const handleChange=(e)=>{
        let { value,name}=e.target
        context.setSignInfo((element)=>({...element,[name]:value}))
    }

    return  <div className="max-md:h-[38px] flex w-full items-center gap-[15px] bg-[#e9e9e9] h-[44px] rounded-lg justify-between px-[20px]">
     <FontAwesomeIcon icon={icon} className=" text-[#717171] "/>
     <input onChange={(e)=>handleChange(e)} ref={passwordRef} type='password'name={name} id={id} placeholder={placeholder}  className=" text-[#717171]  placeholder:text-[#717171] outline-none w-8/12 h-full bg-[#e9e9e9] rounded-r-lg"/>
{
    iconBool? <FontAwesomeIcon icon={faEye} className="ml-[20px] text-[#717171] cursor-pointer" onClick={()=>passwordShow()} />
    :<FontAwesomeIcon icon={faEyeSlash} className="ml-[20px] text-[#717171] cursor-pointer" onClick={()=>passwordShow()} />
}     
 </div>
 }



 export const AddExp=()=>{
    let context=useContext(signContext)
    let [temporary,setTemporary]=useState({})
    let input1=useRef()
    let input2=useRef()

    const handleChange=(e)=>{
        let {name,value}=e.target
        setTemporary((actuel)=>({...actuel,[name]:value}))
    }
    const handleCheck=()=>{
        context.setPostes((item)=>([...item,temporary]))
        context.setNbr(context.childrenRef.current.childElementCount)
        console.log(context.childrenRef.current);
        setTemporary({})
        context.expRef.current.classList.add('hidden')
        input1.current.value=''
        input2.current.value=''
        
    }
    const handleDelete=(id)=>{
        let newValue=context.postes.filter((value)=>value.entreprise!==id)
        context.setPostes(newValue)
    }

    return <div  ref={context.expRef} className="fixed  w-auto h-[100vh] hidden">
        <div className="popExp w-[400px] bg-[#008f64] text-white flex flex-col p-[20px] gap-[10px] rounded-b-lg z-50">
            <h2>Experience professionnel</h2>
            <label>Entreprise</label>
            <input ref={input1} onChange={(e)=>handleChange(e)} type="text" id="entreprise" name="entreprise" className="px-[10px] text-[#717171] h-[35px] outline-none rounded-lg -mt-[5px] "/>
            <label>Poste</label>
            <input ref={input2} onChange={(e)=>handleChange(e)} type="text" id="poste" name="poste" className="px-[10px] text-[#717171] h-[35px] outline-none rounded-lg -mt-[5px]"/>
            <div className="flex justify-between gap-[10px] mt-[10px]">
                <button onClick={()=>context.handleMore()} className="h-[35px] w-1/2 border border-white rounded-lg">Fermer</button>
                <button onClick={()=>handleCheck()} className="h-[35px] w-1/2 bg-white text-[#008f64] rounded-lg">Ajouter</button>

            </div>
            <div ref={context.childrenRef} className="w-auto h-full gap-[10px] mt-[5px]">
            {context.postes.map((poste)=>{
                return <div key={poste.entreprise} className="mb-[10px] h-[15px] w-full rounded-md flex justify-between">- {poste.poste} Chez {poste.entreprise} <FontAwesomeIcon onClick={()=>handleDelete(poste.entreprise)} icon={faClose} className="hover:cursor-pointer hover:text-red-500"/></div>
            })}
            </div>
           
            
        </div>
    </div>
}


