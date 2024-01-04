import { Link } from "react-router-dom";


function Footer() {
    return <div className="h-auto w-full flex max-md:flex-col items-center bg-[#1f1f1f] px-12 pb-6">
        <div className="w-11/12 ">
            <h1 className="text-white  mt-16 text-3xl tracking-wide  max-md:text-center font-extralight max-md:w-auto"><span className="text-[#008F64] text-5xl">P</span>adawan</h1>
            <div className="flex gap-[200px] w-full text-white max-md:flex-col max-md:gap-[20px]">
                <div className="mt-3  flex flex-col gap-2">
                    <h2 className="text-2xl">Pages</h2>
                    <Link className="petit">Accueil</Link>
                    <Link className="petit">Formation</Link>
                    <Link className="petit">Partages</Link>
                    <Link className="petit">Forum</Link>
                    <Link className="petit">Inscription</Link>
                    <Link className="petit">Connexion</Link>

                </div>
                <div className="mt-3 flex flex-col gap-2">
                    <h2 className="text-2xl">Termes et informations legales</h2>
                    <Link className="petit">Politique de confidentialité</Link>
                    <Link className="petit">Conditions d'utilisation</Link>


                </div>
                <div className="mt-3 flex flex-col gap-2 w-[200px] ">
                    <h2 className="text-2xl">A propos</h2>
                    <Link className="petit">L'equipe</Link>
                    <Link className="petit">Ses partenaires</Link>
                    <Link className="petit">Les evenements</Link>


                </div>
                <div className="mt-3 flex flex-col gap-2">
                    <h2 className="text-2xl">Communauté</h2>
                    <Link className="petit">Discord</Link>
                    <Link className="petit">Facebook</Link>
                    <Link className="petit">LinkedIn</Link>


                </div>
            </div>
        </div>
        <div className="h-full w-1/12 max-md:w-full max-md:items-center flex flex-col items-end justify-center pt-20">
            <a href="#">
                <img
                    src="./images/goUp.png"
                    className="marginFleche max-md:ml-0 h-[100px] w-[100px] animate-bounce my-1.5 rotate-90 "
                    alt="chat"
                ></img>
            </a>
            <div className="flex w-auto max-md:gap-[20px] lg:flex-col">
                <Link>
                    <img
                        src="./images/facebook.png"
                        className="h-6 w-6 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                </Link>

                <Link>
                    <img
                        src="./images/whatsapp.png"
                        className="h-6 w-6 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                </Link>
                <Link>
                    <img
                        src="./images/discord.png"
                        className="h-6 w-6 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                </Link>
                <Link>
                    <img
                        src="./images/gmail.png"
                        className="h-5 w-5 iconeRs my-1.5"
                        alt="chat"
                    ></img>
                </Link >
            </div>
            
        </div>
    </div>
}
export default Footer;