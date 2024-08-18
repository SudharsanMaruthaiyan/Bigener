
const SuganthCard = (props) => {
  return (
    <>
        <div>
            <div className="my-10 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <h1 className=" pt-8 font-bold font-[LexendDec]">{props.name}</h1>
                <p className=" text-slate-400 ">{props.college}</p>
                <p className=" text-slate-400 pt-2">{props.description}</p>
            </div>
        </div>
        <br />
        

            










    </>
  )
}

export default SuganthCard