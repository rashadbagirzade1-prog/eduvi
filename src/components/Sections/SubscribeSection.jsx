import React from 'react'
import Ellipse1 from '../../assets/Ellipse 166.png'
import Ellipse2 from '../../assets/Ellipse 167.png'
import Ellipse3 from '../../assets/Ellipse 168.png'
import Daire1 from '../../assets/daire1.png'
import Daire2 from '../../assets/daire2.png'
import Daire3 from '../../assets/daire3.png'

const SubscribeSection = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center relative'>
      <div className='w-[85%] h-[80%] bg-[#0A033C] rounded-[20px] flex flex-col justify-center items-center text-center relative overflow-hidden px-4'>
        <img src={Ellipse3} alt="sekil" className='absolute top-15 left-10 w-[60px] h-[60px] object-cover rounded-full' />
        <img src={Ellipse1} alt="sekil" className='absolute bottom-15 left-17 w-[60px] h-[60px] object-cover rounded-full' />
        <img src={Ellipse2} alt="sekil" className='absolute bottom-45 left-[15%] w-[60px] h-[60px] object-cover rounded-full' />
        <img src={Daire1} alt="sekil" className='absolute top-15 right-17 w-[60px] h-[60px] object-cover rounded-full' />
        <img src={Daire3} alt="sekil" className='absolute bottom-15 right-10 w-[60px] h-[60px] object-cover rounded-full' />
        <img src={Daire2} alt="sekil" className='absolute top-45 right-[15%] w-[60px] h-[60px] object-cover rounded-full' />
        <div className='max-w-[600px] flex flex-col items-center justify-center gap-[23px] z-10'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-[55px] tracking-wide'>
            Subscribe For Get Update <br /> Every New Courses
          </h1>
          <p className='text-[#FFFFFFB2] font-normal text-base leading-[30px] tracking-normal'>
            20k+ students daily learn with Eduvi. Subscribe for new courses.
          </p>
          <div className='w-full max-w-[450px] h-[50px] flex items-center justify-between border border-solid border-white/0 rounded-[10px] pl-4 overflow-hidden bg-[#FFFFFF]/20'>
            <input type="email" placeholder='enter your email' className='w-full h-full text-[#FFFFFF] text-base bg-transparent border-none placeholder-white pr-2 outline-none' />
            <button className='bg-[#9C4DF4] text-white h-full cursor-pointer px-6 flex items-center justify-center font-medium shrink-0 border-none outline-none'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection