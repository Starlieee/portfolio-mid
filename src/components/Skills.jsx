import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillsData = {
    Frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'TypeScript', level: 85, icon: '🔷' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'HTML/CSS', level: 98, icon: '📝' },
    ],
    Backend: [
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'PostgreSQL', level: 82, icon: '🐘' },
      { name: 'REST API', level: 90, icon: '🔌' },
    ],
    Tools: [
      { name: 'Git', level: 92, icon: '📦' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 85, icon: '🎨' },
      { name: 'Firebase', level: 88, icon: '🔥' },
    ],
    Soft: [
      { name: 'Problem Solving', level: 95, icon: '🧩' },
      { name: 'Teamwork', level: 90, icon: '🤝' },
      { name: 'Communication', level: 88, icon: '💬' },
      { name: 'Time Management', level: 92, icon: '⏰' },
      { name: 'Creativity', level: 94, icon: '💡' },
      { name: 'Adaptability', level: 96, icon: '🔄' },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-royal-purple via-deep-purple to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-bright-purple/10"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
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
              My Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-bright-purple/50 scale-105'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-bright-purple/30 group-hover:border-bright-purple group-hover:scale-105 transition-all duration-300">
                {/* Skill Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-bright-purple font-semibold">{skill.level}%</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full transition-all duration-1000 ease-out animate-glow"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundSize: '200% 100%',
                      animation: 'glow 2s ease-in-out infinite alternate, shimmer 3s linear infinite'
                    }}
                  ></div>
                </div>

                {/* Hover Effect - Sparkles */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-yellow-400 animate-ping">✨</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-bright-purple/30">
            <p className="text-gray-300 text-lg mb-4">
              Always learning and expanding my skill set! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML', 'Web3', 'Mobile Dev', 'DevOps'].map((learning, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-bright-purple font-semibold border border-bright-purple/50 hover:bg-bright-purple hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {learning} 📚
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Skills;