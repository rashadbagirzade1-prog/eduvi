import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-[#fbfbfd] py-14 px-6 border-t border-gray-200 font-sans text-gray-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Sol Sütun: Logo, Sosyal Medya ve Telif Hakları */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <span className="bg-[#ff5722] text-white px-2.5 py-1 rounded-lg text-lg">📖</span>
            <span>Eduvi</span>
          </div>
          
          <div className="flex gap-2.5 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs hover:bg-[#ff5722] transition-colors">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center text-xs">📷</a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs hover:bg-[#ff5722] transition-colors">🐦</a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs hover:bg-[#ff5722] transition-colors">in</a>
          </div>

          <div className="text-sm space-y-1 pt-2">
            <p className="text-gray-600 font-medium">©2021 Eduvi.co</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Eduvi is a registered trademark of Eduvi.co
            </p>
          </div>
        </div>

        {/* 1. Sütun: Courses */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4">Courses</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Classroom courses</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Virtual classroom courses</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">E-learning courses</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Video Courses</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Offline Courses</a></li>
          </ul>
        </div>

        {/* 2. Sütun: Community */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4">Community</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Learners</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Parteners</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Developers</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Transactions</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Teaching Center</a></li>
          </ul>
        </div>

        {/* 3. Sütun: Quick links */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4">Quick links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Professional Education</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Courses</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Admissions</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Testimonial</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Programs</a></li>
          </ul>
        </div>

        {/* 4. Sütun: More */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4">More</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Investors</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Help</a></li>
            <li><a href="#" className="hover:text-[#ff5722] transition-colors">Contact</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;