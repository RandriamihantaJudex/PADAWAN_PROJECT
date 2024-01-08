

const VideoTuto=()=>{
    return <div className="w-[310px] h-[330px] flex flex-col justify-between shadow-md shadow-slate-500 hover:shadow-xl hover:shadow-slate-500  rounded-md cursor-pointer">
        <div className="w-full h-[240px]">
                <div className=" absolute p-1 bg-[#008F64] px-[20px] border-b-2 border-r-2 border-white rounded-br-md rounded-tl-md text-white tracking-widest">Design</div>
            <div className="absolute mt-[210px] text-[#008F64] ml-[230px] h-[30px] bg-white tracking-widest w-[80px] rounded-tl-md border-white border-t-2 border-l-2 flex justify-center items-center"><p>12:00</p></div>
            <img
                src="./images/study.jpg"
                alt="formation "
                className="object-cover w-full h-full rounded-t-md"
            />
            
        </div>
        <p className="px-3  truncate font-semibold text-[15px]  tracking-wide text-[#202020] ">Maîtriser Figma : Guide complet pour les débutants et les professionnels</p>
        <div className="w-full h-[60px] px-3 flex items-center justify-between border-t border-slate-300">
                <div className="flex gap-3 items-center w-2/3">
                    <img
                        src="./images/study.jpg"
                        alt="formation "
                    className="object-cover  rounded-full h-[42px] w-[42px] min-w-[42px] min-h-[42px] p-[2px] border border-[#008F64]"
                    />
                    <p className="truncate text-sm">Ronald richards</p>
                </div>
                <div className="flex gap-2">
                <img
                    src="./images/loveBlack.png"
                    className="max-md:ml-0 h-[25px] w-[25px]  my-1.5 flecheDroiteFormation"
                    alt="chat"
                ></img>
                <img
                    src="./images/ellipsisMenu.png"
                    className="max-md:ml-0 h-[25px] w-[25px]  my-1.5 flecheDroiteFormation"
                    alt="chat"
                ></img>
                </div>
        </div>
    </div>
}

const FormationVideo=()=>{
    return <div className="px-[150px] w-full flex flex-wrap mb-[60px] justify-between gap-y-[30px]">
        <VideoTuto/>
        <VideoTuto />
        <VideoTuto />
        <VideoTuto />
        <VideoTuto />
        <VideoTuto />
    </div>
}
export default FormationVideo