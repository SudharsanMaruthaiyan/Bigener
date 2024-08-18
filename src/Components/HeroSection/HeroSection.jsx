import ReactPlayer from "react-player"
import { Library, GraduationCap, Clock, RefreshCw } from "lucide-react"
import CourseCard from "../CouseCard/CourseCard"
import Accordion from "../Accordion/Accordion"
import { SuganthCardApi } from "../../assets/api/SuganthCardApi"
import SuganthCard from "../SuganthCard/SuganthCard"
import { profileimg1 } from "../../assets/api/imagekit"
import Carousel from "../Carousel/Carousel"
const HeroSection = () => {
    // const [ show, setShow] = useState(true)
    // const response = true;
  return (
    <>
      <div className=" 2xl:container mx-auto">
        <div className=" xl:w-[80%] w-[90%] mx-auto pt-10">
          <div className=" grid grid-cols-1 lg:grid-cols-3">
            <div className=" pt-6 col-span-2">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=yGDwk4z9EEg&t=1s"}
                width={"lg:100%"}
                height={400}
              />
              <div className=" pt-6">
                <ul className=" flex gap-10 border-b flex-wrap">
                  <li className=" font-[LexendDec] font-bold text-[#39557e] text-[19px] hover:text-[#1363DF] hover:border-b-2  hover:border-b-[#1363DF] w-fit">
                    Course Info
                  </li>
                  <li className=" font-[LexendDec] font-bold text-[#39557e] text-[19px] hover:text-[#1363DF] hover:border-b-2  hover:border-b-[#1363DF] w-fit">
                    Curriculam
                  </li>
                  <li className=" font-[LexendDec] font-bold text-[#39557e] text-[19px] hover:text-[#1363DF] hover:border-b-2  hover:border-b-[#1363DF] w-fit">
                    Announcements
                  </li>
                  <li className=" font-[LexendDec] font-bold text-[#39557e] text-[19px] hover:text-[#1363DF] hover:border-b-2  hover:border-b-[#1363DF] w-fit">
                    Reviews
                  </li>
                </ul>
              </div>
              <div className=" pt-10">
                <Accordion />
              </div>
              
              <div>
                <Carousel/>
              </div>
              
              <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
                {SuganthCardApi.map((e, index) => {
                  return (
                    <>
                      <div key={index}>
                        <SuganthCard
                          name={e.name}
                          college={e.college}
                          description={e.description}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

            </div>
            <div className=" lg:absolute lg:top-44 lg:right-14 xl:top-36 xl:right-36 col-span-3 lg:mt-0 mt-12">
              <div className="">
                <div className=" shadow-lg bg-[#F4F6F9] px-3 rounded-lg">
                  <div className=" border border-b-2 border-t-0 border-x-0 p-5 ">
                    <h2 className=" font-[Hind-r] font-bold text-[#39557e] py-7 text-[24px]">
                      Free
                    </h2>
                    <div className=" flex justify-center">
                      <button className=" bg-[#1363df] hover:bg-[#0c3e8c] py-2 px-16 rounded-lg mb-4 text-white">
                        Enroll now{" "}
                      </button>
                    </div>
                    <p className=" font-[Hind-r]  text-[#595a5d] text-center">
                      Free access this course
                    </p>
                  </div>
                  <div className=" p-5">
                    <div className=" flex items-center gap-3">
                      <Library className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind-r]">
                        {" "}
                        All Levels
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 py-3">
                      <GraduationCap className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind-r]">
                        {" "}
                        119 Total Enrolled
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 pb-3">
                      <GraduationCap className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind-r]"> English </p>
                    </div>
                    <div className=" flex  gap-3 pb-3">
                      <Clock className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind-r]">
                        12 <span>hours </span> 30 <span> minutes</span> <br />{" "}
                        Duration
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 pb-3">
                      <RefreshCw className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind-r]">
                        <time datetime="2023-07-20">
                          July 20, 2023 Last Updated
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection