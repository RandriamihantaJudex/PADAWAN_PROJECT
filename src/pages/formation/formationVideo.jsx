import Aos from "aos"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
Aos.init()

const videoList = [
    {
        id: 1,
        titre: 'Maîtriser Figma : Guide complet pour les débutants et les professionnels',
        auteur: 'Ronald richards',
        domaine: 'Design',
        imageFormateur: 'https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca',
        like: 100
    },
    {
        id: 2,
        titre: 'Maîtriser Figma : Guide complet pour les débutants et les professionnels',
        auteur: 'Ronald richards',
        domaine: 'Javascript',
        imageFormateur: 'https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca',
        like: 100
    },
    {
        id: 3,
        titre: 'Maîtriser Figma : Guide complet pour les débutants et les professionnels',
        auteur: 'Ronald richards',
        domaine: 'Design',
        imageFormateur: 'https://img.freepik.com/free-photo/beautiful-business-woman-with-folder-papers-green-interior_169016-23256.jpg?w=360&t=st=1706891121~exp=1706891721~hmac=12b89502f007d55e849a6942915f6fa88ec5b1c75ea8eefca55485a9e4fa3aca',
        like: 100
    }
]
const VideoTuto = ({ data }) => {
    return <div key={data.id} className="lowIndex w-[310px] h-[330px] flex flex-col justify-between shadow-md shadow-slate-500 hover:shadow-xl hover:shadow-slate-500  rounded-md cursor-pointer">
        <div className="w-full h-[240px]">
            <div className=" absolute p-1 bg-[#008F64] px-[20px] border-b-2 border-r-2 border-white rounded-br-md rounded-tl-md text-white tracking-widest">{data.domaine}</div>
            <div className="absolute mt-[210px] text-[#202020] ml-[230px] h-[30px] bg-white tracking-widest w-[80px] rounded-tl-md border-white border-t-2 border-l-2 flex justify-center items-center"><p>12:00</p></div>
            <img
                src="https://img.freepik.com/free-photo/handsome-bearded-man-freelancer-working-remote-from-outdoor-cafe-programmer-with-laptop-listening-music-focus-work_176420-25722.jpg?w=740&t=st=1706890904~exp=1706891504~hmac=868578002b02365bc971197e64183d2ae70896cf2655573412214d14ad3a9a1e"
                alt="formation "
                className="object-cover w-full h-full rounded-t-md lowIndex"
            />
        </div>
        <p className="px-3  truncate font-semibold text-[15px]  tracking-wide text-[#202020] ">{data.titre}</p>
        <div className="w-full h-[60px] px-3 flex items-center justify-between border-t border-slate-300">
            <div className="flex gap-3 items-center w-2/3">
                <img
                    src={data.imageFormateur}
                    alt="formation "
                    className="object-cover rounded-full h-[42px] w-[42px] min-w-[42px] min-h-[42px] p-[2px] border border-[#008F64]"
                />
                <p className="truncate text-sm">{data.auteur}</p>
            </div>
            <div className="flex gap-2">
                <FontAwesomeIcon icon={faHeart} className="max-md:ml-0 h-[22px] w-[22px]  my-1.5 text-[#212121]" />
                <FontAwesomeIcon icon={faEllipsisVertical} className="max-md:ml-0 h-[22px] w-[22px]  my-1.5 text-[#212121]" />
            </div>
        </div>
    </div>
}

const FormationVideo = () => {
    return <div data-aos="fade-up" className=" px-[150px] max-md:px-[25px] max-md:gap-2 max-md:justify-center w-full flex flex-wrap mb-[60px] justify-between gap-y-[30px]">
        {videoList.map((element) => {
            return <VideoTuto data={element} key={element.id}/>
        })}

    </div>
}
export default FormationVideo