import { useRef } from "react"
import { Link,NavLink } from "react-router-dom"
const MobileNav = ({lien,activer}) => {
    const refMobile=useRef()  
    
    setTimeout(() => {
        refMobile.current.children[activer].classList.add("navMobileActive")
    }, 100);
    
    
    
    return <div ref={refMobile} className="w-full  h-[50px] fixed bg-[#212121]  maxIndex mobileNav flex items-center justify-evenly rounded-t-md md:hidden">
        <NavLink to='/formation' className="p-2 rounded-full">
            <img src={`${lien}/images/homeWhite.png`} alt="icone" className="h-[22px] w-[22px]">
            </img>
        </NavLink>
        <Link to='/formation/recherche'  className="p-2 rounded-full">
            <img src={`${lien}/images/rechercheW.png`} alt="icone" className="h-[22px] w-[22px]">
            </img>
        </Link>
        <Link className="p-2 rounded-full">
            <img src={`${lien}/images/homeWhite.png`} alt="icone" className="h-[22px] w-[22px]">
            </img>
        </Link>
        <Link  className="p-2 rounded-full">
            <img src={`${lien}/images/love.png`} alt="icone" className="h-[22px] w-[22px]">
            </img>
        </Link>
    </div>
}

export default  MobileNav