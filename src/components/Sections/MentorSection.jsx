import React from 'react'
import Image from "../../assets/Image.png"

const MentorSection = () => {
  return (
    <section className='h-[100vh] flex'>
      <div className='w-[50%] flex justify-end items-center pr-[50px]'>
        <img src={Image}/>
      </div>
      <div className='w-[50%] pl-[50px] pt-[180px] pr-[200px]'>
        <div className='flex flex-col  gap-y-[30px]'>
          <h3 className='text-[#0A033C] text-[50px] font-[inter] font-[700] leading-[60px]'>Want to share your knowledge? Join us a Mentor</h3>
          <p className='text-[#5D5A6F] text-[18px] leading-[35px]'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
          <button className='cursor-pointer w-[200px] h-[60px] bg-[#9C4DF4] text-white rounded-[10px] hover:bg-[#6a33a9] hover:font-[600]'>Career Information</button>
        </div>
      </div>
    </section>
  )
}

export default MentorSection
