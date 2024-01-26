import { useRef } from "react"


const VideoFind = () => {
    return <div className="h-[120px] w-full rounded-md flex shadow-md shadow-slate-500 mb-[10px] justify-between">
        <img src="./../images/study.jpg" alt="miniature" className="w-3/12 h-full object-cover rounded-l-md" />
        <div className="h-full flex flex-col justify-evenly ml-[10px] w-7/12">
            <h2 className="text-[14px]">TITRE</h2>
            <p className="text-[11px]">Description</p>
            <div className="flex gap-[5px]">
                <img src="./../images/study.jpg" alt="mentor" className="rounded-full p-[1px] border border-[#008F64] bg-white w-[20px] h-[20px]" />
                <p className="text-[12px]">Nom mentor</p>
            </div>
            <button className="px-[10px] bg-[#008F64] py-[3px] text-white text-[12px] rounded-md w-5/12">Regarder</button>
        </div>
        <div className="flex h-auto items-start ml-100  w-2/12 py-[10px]">
            <img src="./../images/flecheBlack.png" alt="miniature" className="h-[15px] w-[15px] mt-[3px]"></img>
            <p className="text-[12px]">1k</p>
        </div>
    </div>
}
const FormationRecherche = () => {
    const inputRef=useRef()
    const nullValue=()=>{
        inputRef.current.value=''
    }
    return <div className="w-full h-auto px-[25px] py-[15px] ">
        <form className="h-[40px] w-full bg-[#008F64] rounded-md flex items-center justify-evenly px-[8px] gap-[10px]">
            <img onClick={() => nullValue()} src="./../images/close.png" alt="recherche" className="h-[15px] w-[15px]" />
            <input type="text" ref={inputRef} placeholder="Recherche" className="h-10/12 bg-transparent p-[3px] text-[12px] w-9/12 placeholder:text-white text-white tracking-wide" />
            <button type="submit"> <img src="./../images/rechercheW.png" alt="recherche" className="h-[18px] w-[18px]" /></button>
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
}
export default FormationRecherche