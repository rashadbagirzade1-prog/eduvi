import React from 'react'
import kitabImg from '../../assets/kitab.png'

const FooterSection = () => {

    const handleClick = (name) => {
        console.log(name + ' klikləndi!')
    }

    return (
        <footer className='w-full bg-[#fbfbfd] border-t border-gray-200 pt-[60px] pb-[45px] px-6'>
            <div className='max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[40px]'>


                <div className='flex flex-col gap-[20px]'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[42px] h-[42px] bg-[#ff5722] rounded-[10px] flex items-center justify-center'>
                            <img src={kitabImg} alt="Eduvi logo" className='w-[25px] h-[25px] object-contain' />
                        </div>
                        <h2 className='text-[24px] font-bold text-[#0A033C]'>Eduvi</h2>
                    </div>


                    <div className='flex gap-3'>
                        <button type="button" onClick={() => handleClick('Facebook')} className='w-[34px] h-[34px] rounded-full bg-[#0A033C] text-white flex items-center justify-center hover:bg-[#ff5722] duration-200'>
                            <i className='fa-brands fa-facebook-f text-xs'></i>
                        </button>
                        <button type="button" onClick={() => handleClick('Instagram')} className='w-[34px] h-[34px] rounded-full bg-[#ff5722] text-white flex items-center justify-center hover:opacity-80 duration-200'>
                            <i className='fa-brands fa-instagram text-xs'></i>
                        </button>
                        <button type="button" onClick={() => handleClick('Twitter')} className='w-[34px] h-[34px] rounded-full bg-[#0A033C] text-white flex items-center justify-center hover:bg-[#ff5722] duration-200'>
                            <i className='fa-brands fa-twitter text-xs'></i>
                        </button>
                        <button type="button" onClick={() => handleClick('LinkedIn')} className='w-[34px] h-[34px] rounded-full bg-[#0A033C] text-white flex items-center justify-center hover:bg-[#ff5722] duration-200'>
                            <i className='fa-brands fa-linkedin-in text-xs'></i>
                        </button>
                    </div>

                    <div className='text-sm text-gray-500 leading-[25px]'>
                        <p>©2021 Eduvi.co</p>
                        <p className='text-xs'>Eduvi is a registered trademark</p>
                    </div>
                </div>


                <div>
                    <h3 className='text-[#0A033C] text-[17px] font-semibold mb-[20px]'>Courses</h3>
                    <ul className='flex flex-col gap-[13px] text-sm text-gray-500'>
                        <li><button type="button" onClick={() => handleClick('Classroom courses')} className='hover:text-[#ff5722]'>Classroom courses</button></li>
                        <li><button type="button" onClick={() => handleClick('Virtual classroom courses')} className='hover:text-[#ff5722]'>Virtual classroom courses</button></li>
                        <li><button type="button" onClick={() => handleClick('E-learning courses')} className='hover:text-[#ff5722]'>E-learning courses</button></li>
                        <li><button type="button" onClick={() => handleClick('Video Courses')} className='hover:text-[#ff5722]'>Video Courses</button></li>
                        <li><button type="button" onClick={() => handleClick('Offline Courses')} className='hover:text-[#ff5722]'>Offline Courses</button></li>
                    </ul>
                </div>


                <div>
                    <h3 className='text-[#0A033C] text-[17px] font-semibold mb-[20px]'>Community</h3>
                    <ul className='flex flex-col gap-[13px] text-sm text-gray-500'>
                        <li><button type="button" onClick={() => handleClick('Learners')} className='hover:text-[#ff5722]'>Learners</button></li>
                        <li><button type="button" onClick={() => handleClick('Partners')} className='hover:text-[#ff5722]'>Partners</button></li>
                        <li><button type="button" onClick={() => handleClick('Developers')} className='hover:text-[#ff5722]'>Developers</button></li>
                        <li><button type="button" onClick={() => handleClick('Transactions')} className='hover:text-[#ff5722]'>Transactions</button></li>
                        <li><button type="button" onClick={() => handleClick('Blog')} className='hover:text-[#ff5722]'>Blog</button></li>
                        <li><button type="button" onClick={() => handleClick('Teaching Center')} className='hover:text-[#ff5722]'>Teaching Center</button></li>
                    </ul>
                </div>


                <div>
                    <h3 className='text-[#0A033C] text-[17px] font-semibold mb-[20px]'>Quick links</h3>
                    <ul className='flex flex-col gap-[13px] text-sm text-gray-500'>
                        <li><button type="button" onClick={() => handleClick('Home')} className='hover:text-[#ff5722]'>Home</button></li>
                        <li><button type="button" onClick={() => handleClick('Professional Education')} className='hover:text-[#ff5722]'>Professional Education</button></li>
                        <li><button type="button" onClick={() => handleClick('Courses')} className='hover:text-[#ff5722]'>Courses</button></li>
                        <li><button type="button" onClick={() => handleClick('Admissions')} className='hover:text-[#ff5722]'>Admissions</button></li>
                        <li><button type="button" onClick={() => handleClick('Testimonial')} className='hover:text-[#ff5722]'>Testimonial</button></li>
                        <li><button type="button" onClick={() => handleClick('Programs')} className='hover:text-[#ff5722]'>Programs</button></li>
                    </ul>
                </div>


                <div>
                    <h3 className='text-[#0A033C] text-[17px] font-semibold mb-[20px]'>More</h3>
                    <ul className='flex flex-col gap-[13px] text-sm text-gray-500'>
                        <li><button type="button" onClick={() => handleClick('Press')} className='hover:text-[#ff5722]'>Press</button></li>
                        <li><button type="button" onClick={() => handleClick('Investors')} className='hover:text-[#ff5722]'>Investors</button></li>
                        <li><button type="button" onClick={() => handleClick('Terms')} className='hover:text-[#ff5722]'>Terms</button></li>
                        <li><button type="button" onClick={() => handleClick('Privacy')} className='hover:text-[#ff5722]'>Privacy</button></li>
                        <li><button type="button" onClick={() => handleClick('Help')} className='hover:text-[#ff5722]'>Help</button></li>
                        <li><button type="button" onClick={() => handleClick('Contact')} className='hover:text-[#ff5722]'>Contact</button></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default FooterSection