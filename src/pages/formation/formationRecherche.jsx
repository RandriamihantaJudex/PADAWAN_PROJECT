import { useRef } from "react"
import MobileNav from "./navmobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart ,faXmark,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
const VideoFind = () => {
    return <div className="h-[120px] w-full rounded-md flex shadow-md shadow-slate-500 mb-[10px] justify-between">
        <img src="./../images/study.jpg" alt="miniature" className="w-3/12 h-full object-cover rounded-l-md" />
        <div className="h-full flex flex-col justify-evenly ml-[10px] w-7/12 text-[#212121]">
            <h2 className="text-[14px]">TITRE</h2>
            <p className="text-[11px]">Description</p>
            <div className="flex gap-[5px]">
                <img src="./../images/study.jpg" alt="mentor" className="rounded-full p-[1px] border border-[#008F64] bg-white w-[20px] h-[20px]" />
                <p className="text-[12px]">Nom mentor</p>
            </div>
            <button className="px-[10px] bg-[#008F64] py-[3px] text-white text-[12px] rounded-md w-5/12">Regarder</button>
        </div>
        <div className="flex h-auto items-start ml-100  w-2/12 py-[10px] gap-[3px] text-[#212121]">
            <FontAwesomeIcon icon={faHeart} className="h-[15px] w-[15px] mt-[3px]" />
            <p className="text-[12px]">1k</p>
        </div>
    </div>
}
const FormationRecherche = () => {
    const inputRef=useRef()
    const nullValue=()=>{
        inputRef.current.value=''
    }
    return <div className="w-full h-auto  ">
        <MobileNav activer={1} />
        
        <div className="w-full h-auto px-[25px] py-[15px]">
            <form className=" h-[40px] w-full bg-[#008F64] rounded-md flex items-center justify-evenly px-[8px] gap-[10px]">
                <FontAwesomeIcon icon={faXmark} className="h-[15px] w-[15px] text-white" onClick={() => nullValue()}/>
                <input type="text" ref={inputRef} placeholder="Recherche" className="h-10/12 bg-transparent p-[3px] text-[12px] w-9/12 placeholder:text-white text-white tracking-wide" />
                <button type="submit"> 
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-[15px] w-[15px] text-white"/>
                </button>
            </form>
            <div className="mt-[30px]">
                <VideoFind />
                <VideoFind />
                <VideoFind />
                <VideoFind />
                <VideoFind />
                <VideoFind />
            </div>
        </div>
        
    </div>
}
export default FormationRecherche