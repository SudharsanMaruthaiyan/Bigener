import { Library, GraduationCap, Clock, RefreshCw } from "lucide-react"
import { profileimg1 } from "../../assets/api/imagekit"

const CourseCard = () => {
  return (
    <>
        <div className=" 2xl:container mx-auto">
            <div className="lg:w-72 ">
                <div className=" shadow-lg bg-[#F4F6F9] px-3 rounded-lg mt-8 border-2"> 
                    <div className=" border border-b-2 border-t-0 border-x-0 p-5 ">
                        <h6 className=" font-[LexendDec] font-bold text-[#39557E] pb-5">A Course By</h6>
                        <div className=" flex items-center gap-4">
                            <img className=" h-14" src={profileimg1} alt="Profileimg" />
                            <p className=" font-[Hind-r] font-bold text-[16px] text-center text-[#3d5f91] ">Eduvalt</p>
                        </div>
                        
                    </div>
                    <div className=" p-5 ">
                        <div className="">
                            <h6 className="font-[LexendDec] font-bold text-[#39557E] pb-5">Audience</h6>
                            <p className=" font-[Hind-r] text-wrap text-[#39557E] leading-7">Anyone wanting to learn the truth about dieting & meal planning</p>
                            <p className=" pt-3 font-[Hind-r] text-wrap text-[#39557E] leading-7">Anyone with an open mind towards dieting</p>
                        </div>
                        <div className=" pt-10">
                            <h6 className="font-[LexendDec] font-bold text-[#39557E] pb-5">Material Includes</h6>
                            <p className=" font-[Hind-r] text-wrap text-[#39557E] leading-7">Anyone wanting to learn the truth about dieting & meal planning</p>
                            <p className=" pt-3 font-[Hind-r] text-wrap text-[#39557E] leading-7">Anyone with an open mind towards dieting</p>
                        </div>
                        <div className=" pt-10">
                            <h6 className="font-[LexendDec] font-bold text-[#39557E] pb-5">Requirements</h6>
                            <p className=" font-[Hind-r] text-wrap text-[#39557E] leading-7">Anyone wanting to learn the truth about dieting & meal planning</p>
                            <p className=" pt-3 font-[Hind-r] text-wrap text-[#39557E] leading-7">Anyone with an open mind towards dieting</p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CourseCard