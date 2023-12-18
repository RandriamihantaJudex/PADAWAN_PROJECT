import { createContext, useContext, useRef, useState } from "react";
import { suggestionMentor } from "./variablesHome";

import PresentationVideo from "./homeVideo";
import Couverture from "./homeCouverture";
import Challenge from "./homeChallenge";
import Temoignage from "./homeTemoignage";
import Question from "./homeQuestion";
import FAQ from "./homeFAQ";
import AllMentorList from "./homeAllMentor";
import Don from "./homeDon";
import Footer from "./footer";



// STRUCTURE DU FICHIER //
function Home() {
  return (
    <>
      <ProviderHomeContext>
        <PopUp />
        <Couverture />
        <PresentationVideo />
        <AllMentorList/>
        <Challenge />
        <Temoignage />
        <Question />
        <FAQ />
        <Don/>
        <Footer/>
        <div className="w-full bg-[#1f1f1f] centrer p-3 text-[#737373] max-md:text-[12px]">2023 Team Padawan All right Reserved.</div>
      </ProviderHomeContext>
    </>
  );
}


const PopUp = () => {
  const providerData = useContext(homeContext);
  return (
    <div
      className="popUpDemande h-[50px] w-[300px] bg-[#1f1f1f] fixed rounded-md flex items-center justify-center p-2 text-white text-[13px]"
      ref={providerData.popupRef}
    >
      "DEMANDE ENVOYE A "
    </div>
  );
};



export const homeContext = createContext();
const ProviderHomeContext = ({ children }) => {
  const popupRef = useRef();
  let IdMentorCible = {};
  let [divAnimateOnShow, setDivAnimateOnShow] = useState([]);
  document.addEventListener("DOMContentLoaded", () => {
    setDivAnimateOnShow(document.querySelectorAll(".anime-on-show"));
  });
  document.addEventListener("scroll", () => {
    divAnimateOnShow.forEach((itemAnimate) => {
      if (window.scrollY < itemAnimate.getBoundingClientRect().bottom) {
        itemAnimate.classList.add("opacityZero");
      }
      else if (window.scrollY > itemAnimate.getBoundingClientRect().bottom - 100) {
        itemAnimate.classList.remove("opacityZeror");
        itemAnimate.style.display = "none";
        itemAnimate.style.display = "flex";
        itemAnimate.classList.add("divAnimateOnShowSelector");
        itemAnimate.style.display = "flex";
      }
      else {
        console.log('');
      }
    });
  });

  const uptadeMentor = (id) => {
    let mentorGet = suggestionMentor.filter(function (item) {
      return item.nom === id;
    });
    IdMentorCible = mentorGet;
    popupRef.current.innerHTML = "Demande envoyé a " + IdMentorCible[0].nom
    popupRef.current.style.display = 'flex'
    setTimeout(() => {
      popupRef.current.style.display = 'none'
    }, 2000);
  };
  return (
    <homeContext.Provider
      value={{ divAnimateOnShow, IdMentorCible, uptadeMentor, popupRef }}
    >
      {children}
    </homeContext.Provider>
  );
};


export default Home;
