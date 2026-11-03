
import React from 'react'
import book from '../../assets/book.png'
import square from '../../assets/square.png'
import bag from '../../assets/bag.png'
import profil from '../../assets/profil.png'
import arrow from '../../assets/arrow.png'
import line from '../../assets/line.png'
import search from '../../assets/search.png'
import bg from '../../assets/bg.png'
import scoolboy from '../../assets/scoolboy.png'
import kvadrat from '../../assets/kvadrat.png'
import brainBook from '../../assets/brain-book.png'
import Rectangle2 from '../../assets/Rectangle2.png'
import lamp from '../../assets/lamp.png'
import Rectangle3 from '../../assets/Rectangle3.png'
import presentation from '../../assets/presentation.png'
import Rectangle4 from '../../assets/Rectangle4.png'
import blocks from '../../assets/blocks.png'

const HeroSection = () => {
  return (
    <section>
      <div
        className="w-[100%] h-[100vh] p-6 font-['Metropolis']"
        style={{ backgroundColor: 'rgba(247, 245, 250, 1)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pl-4 gap-[10px]">
          <div className="flex items-center gap-[10px] ml-[30px]">
            <div className="relative w-8 h-8 flex items-center justify-center gap-[10px]">
              <img src={square} alt="Square" className="w-full h-full object-contain" />
              <img src={book} alt="Book" className="absolute w-4 h-4 object-contain inset-0 m-auto" />
            </div>
            <h1 className="text-2xl font-bold text-[#0f0a3c]">Eduvi</h1>
          </div>

          <div className="-ml-12 font-['Metropolis']">
            <ul className="flex items-center gap-[25px] list-none m-0 p-0 text-[#0f0a3c] font-medium text-sm">
              <li>Shop</li>
              <li>For Kindergarten ▾</li>
              <li>For High School ▾</li>
              <li>For College ▾</li>
              <li>Courses ▾</li>
            </ul>
          </div>

          <div>
            <ul className="flex items-center gap-[15px] list-none m-0 p-0 text-[#0f0a3c] font-medium text-sm font-['Metropolis'] mr-[30px]">
              <li>Get Help</li>
              <li>Cart</li>
              <img src={bag} alt="" />
              <li>My Account</li>
              <img src={profil} alt="" />
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-[180px] items-start ml-[20px] mt-[100px]">
            <h3
              style={{ backgroundColor: '#ffffff' }}
              className="text-[#ff6652] border-0 rounded-[10px] w-[220px] h-[40px] font-medium font-['Metropolis'] flex justify-center items-center text-center"
            >
              Never Stop Learning
            </h3>

            <div className="flex gap-[10px] flex-col">
              <p className="text-[#5d5a6f]">
                Eduvi is a Global training provider based across the UK that specialises in <br />
                accredited and bespoke training courses. We crush the barriers togetting a <br />
                degree.
              </p>

              <div
                style={{ backgroundColor: '#ffffff' }}
                className="w-[450px] h-[50px] rounded-[10px] bg-white flex items-center px-4 gap-3"
              >
                <h4 className="text-[rgba(93,90,111,0.6)] ml-[5px]">Kindergarten</h4>
                <img className="ml-[5px]" src={arrow} alt="" />
                <img className="ml-[10px]" src={line} alt="" />
                <h4 className="ml-[10px] text-[rgba(93,90,111,0.6)]">Class/Course</h4>

                <button className="flex flex-row items-center justify-center gap-[5px] w-[120px] h-[45px] text-[#f5f3f7] bg-[rgba(156,77,244,1)] rounded-[10px] ml-[80px] border-none">
                  <img className="w-[13px]" src={search} alt="" />
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center  mt-[10px] relative right-[60px]">
            <div className="relative">
              <img src={bg} alt="" className="w-[515px]" />
              <img
                src={scoolboy}
                alt=""  
                className="w-[400px] absolute top-0 left-1/2 -translate-x-1/2"
              />
              <div className="relative top-[60px] left-[70px] w-[100px] h-[100px] flex items-center justify-center ">
                <img className=" relative bottom-[690px] right-[190px] w-[180px] h-[180px]  object-contain " src={kvadrat} alt="" />
                <img
                  className="relative bottom-[713px] right-[307px]  w-[55px] h-[55px] object-contain z-10"
                  src={brainBook}
                  alt=""
                />
              </div>

               <div className="">
                <img className='relative bottom-[725px] left-[320px] w-[180px] h-[180px] object-contain z-1 ' src={Rectangle2} alt="" />
                <img className='relative bottom-[810px] left-[205px]  z-3 object-contain' src={lamp} alt="" />

               </div>

               <div className="">
                <img className='relative bottom-[700px] right-[90px] z-4 object-contain  w-[180px] h-[180px]' src={Rectangle3}alt="" />
                <img className='relative bottom-[785px] right-[205px]  z-5 object-contain ' src={presentation} alt="" />
               </div>

               <div className="">
                <img className='relative bottom-[650px] left-[400px] z-4 object-contain  w-[180px] h-[180px]' src={Rectangle4} alt="" />
                <img className='relative bottom-[735px] left-[295px]  z-5 object-contain' src={blocks} alt="" />
               </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
