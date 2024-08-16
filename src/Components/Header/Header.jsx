
import { BigenerLogo, profileimg1 } from '../../assets/api/imagekit'
import { BookText , Star , Clock3 , UserSearch } from 'lucide-react'

const Header = () => {
  return (
    <>
        <div className=' 2xl:container mx-auto bg-[#041734]'>
            <div className=' xl:w-[80%] w-[90%] mx-auto'>
                <div className=' grid grid-cols-1 lg:grid-cols-3 justify-start'>
                    <div className='text-white py-[82px] col-span-2'>
                        <h3 className=' font-[Hind-r] bg-[#04BC53] px-3 py-1 rounded-full w-fit font-bold'>Marketing</h3>
                        <h1 className=' font-[LexendDec] font-bold text-[36px] pt-2'>Bigener Adobe Illustrator for Graphic <br className='lg:hidden xl:block'/> Design</h1>
                        <p className='text-ellipsis overflow-hidden text-nowrap text-[Hind-r] text-[#b2bdcd]'>Learn How To Build The Prefect Diet & Meal Plan For Imporved Health, Better Weight Loss And</p>
                        <div className=' flex gap-4 items-center pt-10 flex-wrap'>
                            <div className=' flex gap-3 items-center'>
                                <img className=' rounded-full h-10 bg-white p-[1.5px]' src={profileimg1} alt="Profile logo" />
                                <p className=' font-[Hind-r] text-[#b2bdcd]'>Eduvalt</p>
                            </div>
                            <div className=' flex gap-1 items-center'>
                                <BookText className=' h-5'/>
                                <p className=' font-[Hind-r] text-[#b2bdcd]'>6</p>
                            </div>
                            <div className=' flex gap-1 items-center'>
                                <Clock3 className=' h-5'/>
                                <p className='text-[#b2bdcd] font-[Hind-r]'>12h 30min</p>
                            </div>
                            <div className=' flex gap-1 items-center'>
                                <UserSearch className=' h-5'/>
                                <p className='text-[#b2bdcd]'>199</p>
                            </div>
                            <div className=' flex gap-[0.5px] items-center'>
                                <Star className=" fill-[#FF9747] text-[#FF9747] h-4" />
                                <Star className=" fill-[#FF9747] text-[#FF9747] h-4"/>
                                <Star className=" fill-[#FF9747] text-[#FF9747] h-4"/>
                                <Star className=" fill-[#FF9747] text-[#FF9747] h-4"/>
                                <Star className="  text-[#FF9747] h-4"/>
                                <p className=' font-[Hind-r] text-[#b2bdcd]'>(4.29)</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-52'>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header