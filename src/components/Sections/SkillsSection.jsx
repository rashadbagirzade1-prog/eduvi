
import heroImg from '../../assets/hero.jpg'
const HeroSection = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-pink-300'>
      SECCAT-HeroSection

      <section className='w-full px-4 md:px-12 py-4 bg-[#f6f5fa]'>
        <div className='w-full min-h-[370px] bg-[#C8C3DD] overflow-hidden flex items-center'>

    
          <div className='w-full md:w-1/2 p-6 md:pl-10 flex flex-col items-start gap-5'>
            <span className='bg-violet-100 text-violet-600 px-4 py-2 rounded-lg text-sm font-medium'>
              College Level
            </span>

            <h1 className='text-3xl md:text-4xl leading-tight font-bold text-indigo-950'>
              Don’t waste time in COVID-19 pandemic. Develop your skills.
            </h1>

            <p className='text-xs leading-relaxed text-gray-500 max-w-sm'>
              High-definition video is video of higher resolution and quality than
              standard-definition. While there is no standardized meaning for
              high-definition, generally any video.
            </p>

            <button className='bg-violet-500 hover:bg-violet-600 transition text-white px-6 py-3 text-sm cursor-pointer'>
              Registation Now
            </button>
          </div>

    
          <div className='hidden md:flex w-1/2 self-stretch items-end justify-end'>
            <img
  src={heroImg}
  alt='hero'
              className='h-full max-h-[400px] w-full object-contain object-bottom mix-blend-multiply'
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default HeroSection