import Aos from "aos"
import { Player } from '@lottiefiles/react-lottie-player';
Aos.init()
const FormationAstuce = () => {
    return <div className="w-full px-[150px] mb-[40px]  " data-aos="fade-up">
        
        <div className="flex justify-between w-full items-center">
            <div className="w-1/2 ">
                <p className="text-xl font-bold flex gap-1 items-center">
                    Conseils
                    <img 
                        src="./images/etoile.png"
                        className="max-md:ml-0 h-[25px] w-[25px]  my-1.5 "
                        alt="Etoile"
                    ></img>
                </p>
                <p className="text-justify">Duis amet consequat fugiat sint laboris ex dolor irure voluptate ullamco amet do eiusmod irure aute in anim aute lorem sunt officia consequat nostrud adipiscing dolore incididunt in non Excepteur aliquip aute exercitation consequat sed aliquip cillum Duis nisi commodo enim dolor est eu nostrud dolore id aliquip tempor irure anim tempor elit fugiat esse do ipsum</p>
            </div>
            
         <div className=" w-1/2 ">
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