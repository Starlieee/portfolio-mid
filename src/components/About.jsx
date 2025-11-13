const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '20+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-900 via-deep-purple to-royal-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-bright-purple to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image/Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative group">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-royal-purple to-deep-purple rounded-3xl p-8 border border-bright-purple/30 transform group-hover:scale-105 transition-all duration-500">
                <div className="text-center text-8xl mb-4">🎨</div>
                <div className="grid grid-cols-3 gap-4">
                  {['💻', '🎯', '⚡', '🚀', '✨', '🔥'].map((emoji, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-white">
              Passionate Developer & Creative Designer
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Hello! I'm a passionate full-stack developer with a love for creating 
              beautiful and functional web applications. With over 5 years of experience, 
              I specialize in modern web technologies and always strive to deliver 
              exceptional user experiences.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in web development started with a curiosity about how things work 
              on the internet. Today, I've had the privilege of working on diverse projects, 
              from small business websites to large-scale enterprise applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🎓', label: 'Education', value: 'Computer Science' },
                { icon: '📍', label: 'Location', value: 'Manado, Indonesia' },
                { icon: '💼', label: 'Status', value: 'Available for Hire' },
                { icon: '✉️', label: 'Email', value: 'hello@example.com' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-xl border border-bright-purple/20 hover:border-bright-purple/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-bright-purple/50 transform hover:scale-105 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-bright-purple/30 group-hover:border-bright-purple group-hover:scale-105 transition-all duration-300 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-bright-purple to-pink-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;