import Aos from "aos"
import { Player } from '@lottiefiles/react-lottie-player';
Aos.init()
const FormationAstuce = () => {
    return <div className="w-full px-[150px] mb-[40px]  max-md:px-[25px] max-md:flex max-md:justify-center " data-aos="fade-up">
        
        <div className="flex justify-between w-full  items-center  ">
            <div className="w-1/2 max-md:w-full max-md:px-[7px] ">
                <p className="text-xl font-bold flex gap-1 items-center max-md:text-[14px]">
                    Conseils
                    <img 
                        src="./../images/etoile.png"
                        className="max-md:ml-0 h-[25px] w-[25px] max-md:h-[15px] max-md:w-[15px]  my-1.5 "
                        alt="Etoile"
                    ></img>
                </p>
                
                <p className="text-justify max-md:text-[12px]">  dolore incididunt in non Excepteur aliquip aute exercitation consequat sed aliquip cillum Duis nisi commodo enim dolor est eu nostrud dolore id aliquip tempor irure anim tempor elit fugiat esse do ipsum</p>
            </div>
            
            <div className=" w-2/3 max-md:flex max-md:flex-col max-md:items-center" >
                <Player
                    src='https://lottie.host/c91e2448-1abe-4a9e-ab67-50ad20085960/788mDQlJgS.json'
                    className="player"
                    loop
                    autoplay
                />
                
         </div>
        </div>
    </div>
}
export default FormationAstuce