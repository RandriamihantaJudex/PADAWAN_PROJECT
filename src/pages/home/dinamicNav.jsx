import { useRef } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = ({ disapear }) => {
    const dinamicNav = useRef();
    document.addEventListener("scroll", () => {
        if (dinamicNav.current != null) {
            dinamicNav.current.style.display = "none";
        }

    });
    document.addEventListener("scrollend", () => {
        if (dinamicNav.current != null) {
            if (document.children[0].clientWidth > 700) {
                if (window.scrollY > 50) {
                    dinamicNav.current.style.display = "flex";
                }
            }

        }
    });
    
    return (
        <div
            className="dinamicNav showNav fixed maxIndex flex w-full h-[50px] justify-between items-center  shadow bg-emerald-600 px-4" ref={dinamicNav}>
            <h1 className="text-4xl bold text-white ">P</h1>
            <ul className="w-auto  flex  tracking-wide max-md:hidden text-white">
                <li ><NavLink to='/' className="mx-10 pb-1 hoverLink text-md" > Accueil</NavLink></li>
                <li ><NavLink to='/formation' className="mx-10 text-md hoverLink pb-1" >Formation</NavLink></li>
                <li > <NavLink to='/home' className="mx-10 text-md pb-1 my-0 flex hoverLink" >
                    Compte
                    <img
                        src="./images/chevronDownWhite.png"
                        className="h-4 w-4 mt-1.5  ml-2 transform m-0"
                        alt="down"
                    />
                </NavLink></li>

            </ul>
            <img
                src="./images/menu.png"
                className="h-7 w-7 cursor-pointer menuAnimate"
                alt="menu"
                onClick={() => disapear()}
            ></img>
        </div>
    );
};

export default NavigationBar