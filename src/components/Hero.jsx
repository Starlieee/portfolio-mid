import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let intervalId;

    if (isTyping) {
      intervalId = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setText('');
            index = 0;
          }, 2000);
        }
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  return (
    <section id="home" className="min-h-screen pt-48 md:pt-40 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-200/30"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

    

      <div className="container mx-auto px-6 pt-20 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-3xl font-bold text-white">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
             <span className="text-purple-600 font-bold">
  Hi, I'm{' '}
</span>

              <span className="text-purple-600 font-bold">
                Starlie
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-gray-700 mb-4 h-12">
              <span className="text-purple-600 font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-300 font-bold text-white">
              Creating stunning digital experiences with modern technologies. 
              Passionate about building beautiful, functional, and user-friendly applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-400/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-purple-600 rounded-full text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              {['github', 'linkedin', 'twitter', 'instagram'].map((social, index) => (
                <a
                  key={index}
                  href={`#${social}`}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-700 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                  <span className="text-xl capitalize">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Avatar/Image */}
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-glow"></div>
              
              {/* Avatar Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 p-2 transform hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                  {/* Ganti src dengan URL foto profil Anda */}
                  <img 
                    src="/images/starlie.jpg" 
                    alt="Starlie Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl animate-float shadow-lg shadow-purple-400/50">
                ⚡
              </div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl animate-float shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}>
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-purple-600 flex justify-center p-2">
            <div className="w-1 h-3 bg-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;