const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      icon: '💼',
      color: 'from-purple-600 to-pink-600',
      achievements: [
        'Increased app performance by 40%',
        'Implemented CI/CD pipeline',
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2024-present',
      location: 'Manado, Indonesia',
      description: 'Started my professional journey building websites and learning industry best practices.',
      icon: '🌱',
      color: 'from-green-600 to-blue-600',
      achievements: [
        'Completed 3+ projects',
        'Learned full-stack development',
        'Contributed to open-source',
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-royal-purple via-deep-purple to-purple-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-bright-purple/5"
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-bright-purple to-pink-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 hidden md:block"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Content Card */}
                <div className="flex-1 group">
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-bright-purple/30 group-hover:border-bright-purple group-hover:scale-105 transition-all duration-500">
                    {/* Period Badge */}
                    <div className="inline-block mb-4">
                      <span className={`px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full text-white text-sm font-semibold shadow-lg`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-bright-purple transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-pink-400 text-lg font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 mb-4 flex items-center gap-2 justify-end md:justify-start">
                      <span>📍</span> {exp.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-bright-purple font-semibold mb-3">Key Achievements:</p>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex relative z-10">
                  <div className="group">
                    {/* Glowing Ring */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full blur-lg opacity-50 group-hover:opacity-100 animate-glow transition-opacity duration-500`}></div>
                    
                    {/* Icon Container */}
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      {exp.icon}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-bright-purple/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            <span className="text-2xl">📄</span>
            Download Resume
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;