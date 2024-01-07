
// FONCTIONNALITE LIGNE 16 : ENVOIE DE MESSAGE A L'ADMIN
import Aos from "aos";
Aos.init();

const sendQuestion = (e) => {
    e.preventDefault()
}


function Question() {
    return <div data-aos="fade-up" className="anime-on-show w-full flex justify-center mt-24 px-16 max-md:px-4  mb-16 max-md:mt-10 max-md:mb-8 " >
        <div className=" h-[250px] max-md:h-auto w-full rounded-lg bg-[#1f1f1f] flex max-md:flex-col justify-between items-center px-24 max-md:px-6">
            <form className="text-white max-md:h-auto max-md:flex max-md:flex-col max-md:items-center">
                <label htmlFor="question" className="text-3xl max-md:text-sm mt-3 max-lg:text-xl">AVEZ VOUS DES QUESTION ?</label>
                <div className="flex mt-5">
                    <input type="test" name="question" className="max-lg:py-2 text-[#1f1f1f] w-[500px] py-4 outline-none max-md:py-2 rounded-bl-md rounded-tl-md max-lg:w-[230px] px-2 max-md:text-[10px] " placeholder="Posez les ici ..." />
                    <button type="submit" onClick={(e) => sendQuestion(e)} className="centrer max-lg:w-[110px] hover:bg-emerald-600 w-[150px]  max-md:w-[50px] rounded-br-md rounded-tr-md bg-[#008F64]">
                        <span className="max-md:hidden">Envoyer</span>
                        <img src="./images/send.png" alt="love" className="h-5 w-5  md:hidden rotate-45"></img>
                        </button>
                </div>
            </form>
            <img src="./images/question.png" alt="illustartion question" className="h-[200px] w-[200px] max-md:h-[140px] max-md:w-[140px] max-lg:h-[160px] max-lg:w-[160px]" />
        </div>

    </div>
}
export default Question