import { useRef } from "react";
import { questions } from "./variablesHome";
import Aos from "aos";
Aos.init();
// DONNEE REQUIS LIGNE 74 : TABLEAU CONTENANT LES QUESTION ET SA REPONSE



function FAQ() {
    const testRef = useRef()
    const refParent = useRef()


    const leave = () => {
        testRef.current.classList.remove('afficher')
        testRef.current.classList.add('cacher')
        testRef.current.style.marginTop = '0px'
    }

    const show = (e, reponse) => {
        let marge
        if (e.target.nodeName === 'DIV') {
            marge = (e.target.offsetTop - refParent.current.offsetTop) + 45;
        }
        else {
            marge = (e.target.parentNode.offsetTop - refParent.current.offsetTop) + 45;
        }
        if (testRef.current.style.marginTop === marge + 'px') {
            testRef.current.classList.remove('afficher')
            testRef.current.classList.add('cacher')
        }
        else {
            setTimeout(() => {
                testRef.current.innerHTML = `<p>${reponse}<p>`
                testRef.current.classList.remove('cacher')
                testRef.current.style.marginTop = marge + 'px'
                testRef.current.classList.add('afficher')
            }, 300);
        }
    }




    return <div className="anime-on-show w-auto h-auto flex flex-col text-[#008F64] items-center mb-16">
        <h1 className="text-3xl mb-7 max-md:text-lg max-md:mb-2" >FAQ</h1>
        <div className="w-full flex flex-col items-center gap-3" ref={refParent}>
            <div className="cacher max-md:text-[11px] absolute max-md:w-11/12 h-auto bg-[#1f1f1f] w-9/12 py-4 px-10 max-md:px-5 max-md:py-2 flex items-center rounded-md text-white" ref={testRef}>
                
            </div>
            {
                questions.map(({ question, Reponse }) => {
                    return <div data-aos="zoom-in" key={Reponse} onClick={(e) => show(e, Reponse)} onMouseLeave={(e) => leave()} className="w-8/12 max-md:w-11/12 max-md:text-[11px] max-md:hover:w-11/12 max-md:hover:px-3 max-md:px-4 zIndex2 hover:bg-[#008F64] hover:border-[#008F64] hover:text-white animation2s h-[45px] hover:w-9/12 hover:px-10 cursor-pointer  flex items-center justify-between px-12 bg-white shadow-md shadow-slate-500 border-t border-[#00000049] rounded-md">
                        <p className="h-full flex items-center">{question}</p>
                        <img src="./images/chevronGreen.png" alt="chevron" className="w-5 h-5 max-md:h-3 max-md:w-3" />
                    </div>
                })
            }


        </div>
    </div>

}
export default FAQ