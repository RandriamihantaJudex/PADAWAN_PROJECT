import { useRef, useState } from "react"
import Aos from "aos"
Aos.init()

const listeFormation = [
    "Design", "trade", "Informatique", "Bureautique"
]
const langues = [
    "Francais", "Anglais", "Malgache"
]

// INPUT SELECT PERSONNALISER
const SelectPersonnalize = ({ listes,titre}) => {
    const [selectedItems, setSelectedItems] = useState(titre)
    const inputRef = useRef()
    const pickFilter=(item,e)=>{
        setSelectedItems(item)
        showSelect(e)
    }
    const showSelect=(e)=>{
        e.preventDefault()
        inputRef.current.classList.contains('hidden') ? 
        inputRef.current.classList.remove("hidden"):
        inputRef.current.classList.add("hidden") 
    }
    setTimeout(() => {
        inputRef.current.style.width = inputRef.current.parentNode.clientWidth + "px"
    }, 1000);
    return <div className="">
        <button className="flex items-center gap-4 text-white bg-[#008F64] px-[20px] h-[40px] rounded-md" onClick={(e) => showSelect(e)}>
            {selectedItems} 
            <img
                src="./images/chevronDownWhite.png "
                className="h-5 w-5 cursor-pointer  "
                alt="menu"

            ></img>
                </button>
                <div className="absolute  bg-[#202020] text-white p-1 hidden" ref={inputRef}>
                    {
                        listes.map((liste) => {
                            return <p key={liste} className="p-1 w-full hover:bg-[#008F64] cursor-pointer" onClick={(e) => pickFilter(liste,e)}>{liste}</p>
                        })
                    }
                </div>
        </div>
}



const FiltreF = () => {
    return <div className="h-auto w-full shadow-xl shadow-gray-300  rounded-md my-[60px]  p-1 " data-aos="fade-up">
        <form className="w-full h-full">
            <div className="h-[60px] flex  w-full   items-center border-b border-slate-400  justify-between">
                <div className="flex gap-3 border-r w-1/3 h-full border-slate-400  items-center py-2">
                    <input className="h-full w-10/12 pl-2" placeholder="Titre du video..." />
                    <img
                        src="./images/flecheBlack.png"
                        className="h-7 w-7 cursor-pointer  "
                        alt="menu"
                    ></img>
                </div>
                <div className="flex gap-3  w-1/3 h-full  items-center py-2">
                    <input className="h-full w-10/12 pl-2" placeholder="Titre du video..." />
                    <img
                        src="./images/chevron_down.png "
                        className="h-5 w-5 cursor-pointer rotate-180 "
                        alt="menu"

                    ></img>
                </div>
                <button type="submit" className="bg-[#008F64] text-white px-[25px] rounded-md h-[45px]">Rechercher</button>
            </div>
            <div className="h-[60px] w-full flex p-2 items-center gap-5">
                    <SelectPersonnalize listes={langues} titre={'Langues'}/>
                    <SelectPersonnalize listes={listeFormation} titre={'Listes des formations'} />
            </div>

        </form>
    </div>
}



const FormationFilter = () => {
    return <div className="flex flex-col items-center px-[150px]">
        <h1 className="text-4xl tracking-widest pb-4" data-aos="fade-up">Commencer votre apprentissage</h1>
        <p className="text-[14px]" data-aos="fade-up">Rechercher les formations que vous voulez suivre, <span className="text-[#008F64] font-thin">developpement web,Figma,Trading</span>...</p>
        <FiltreF />
    </div>
}
export default FormationFilter