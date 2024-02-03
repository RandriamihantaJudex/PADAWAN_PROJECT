import { useRef } from "react"
import { Link,NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faMagnifyingGlass ,faHeart} from "@fortawesome/free-solid-svg-icons"
const MobileNav = ({activer}) => {
    const refMobile=useRef()  
    
    setTimeout(() => {
        refMobile.current.children[activer].classList.add("navMobileActive")
    }, 100);
    
    
    
    return <div ref={refMobile} className="text-white w-full  h-[50px] fixed bg-[#212121]  maxIndex mobileNav flex items-center justify-evenly rounded-t-md md:hidden">
        <NavLink to='/formation' className=" rounded-full  h-[32px] w-[32px] flex justify-center items-center">
            <FontAwesomeIcon icon={faHouse} className="h-[17px] w-[17px]" />
        </NavLink>
        <Link to='/formation/recherche' className=" rounded-full  h-[32px] w-[32px] flex justify-center items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-[17px] w-[17px]" />
        </Link>
        <Link className=" rounded-full  h-[32px] w-[32px] flex justify-center items-center">
            <FontAwesomeIcon icon={faHouse} className="h-[17px] w-[17px]" />

        </Link>
        <Link className=" rounded-full  h-[32px] w-[32px] flex justify-center items-center">
            <FontAwesomeIcon icon={faHeart} className="h-[17px] w-[17px]" />

        </Link>
    </div>
}

export default  MobileNav