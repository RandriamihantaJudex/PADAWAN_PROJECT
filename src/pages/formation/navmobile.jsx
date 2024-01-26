import { useRef } from "react"
import { Link,NavLink } from "react-router-dom"
const MobileNav = () => {
    const refMobile=useRef()
  
    const changeTo = (e)=>{

        e.preventDefault()
        const parDefault=()=>{
            for (let index = 0; index < 4; index++) {
                refMobile.current.children[index].classList.remove("navMobileActive")
            }
        }
        if (e.target.nodeName==="IMG"){
            parDefault()
            e.target.parentNode.classList.add('navMobileActive')
        }
        if (e.target.nodeName === "A"){
            parDefault()
            e.target.classList.add('navMobileActive')
        }
   
    } 
    return <div ref={refMobile} className="w-full  h-[50px] fixed bg-[#212121]  maxIndex mobileNav flex items-center justify-evenly rounded-t-md md:hidden">
        <NavLink to='/formation/home' className="p-2 rounded-full">
            <img src="./images/homeWhite.png" alt="icone" className="h-[22px] w-[22px]">
            </img>
        </NavLink>
        <Link to='/formation/recherche'  className="p-2 rounded-full">
            <img src="./images/rechercheW.png" alt="icone" className="h-[22px] w-[22px]">
            </img>
        </Link>
        <Link onClick={(e)=>changeTo(e)} className="p-2 rounded-full">
            <img src="./images/homeWhite.png" alt="icone" className="h-[22px] w-[22px]">
            </img>
        </Link>
        <Link onClick={(e)=>changeTo(e)} className="p-2 rounded-full">
            <img src="./images/love.png" alt="icone" className="h-[22px] w-[22px]">
            </img>
        </Link>
    </div>
}

export default  MobileNav