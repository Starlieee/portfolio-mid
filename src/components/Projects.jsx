import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      image: '🛒',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-purple-600 to-blue-600',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI with message translation and sentiment analysis.',
      image: '💬',
      category: 'AI/ML',
      technologies: ['React', 'OpenAI', 'Socket.io', 'Express'],
      color: 'from-pink-600 to-purple-600',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Content management system for portfolios with drag-and-drop builder and theme customization.',
      image: '📱',
      category: 'Web App',
      technologies: ['Next.js', 'Tailwind', 'PostgreSQL'],
      color: 'from-orange-600 to-pink-600',
      link: '#',
      github: '#',
    },
  ];

  const categories = ['All', 'Web App', 'Mobile', 'AI/ML', 'Web3'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-900 via-deep-purple to-royal-purple relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white-600 font-bold">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work and latest creations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-bright-purple/50 scale-105'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-bright-purple/30 overflow-hidden group-hover:border-bright-purple transition-all duration-500 h-full flex flex-col">
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500`}>
                  {project.image}
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
                      title="View Project"
                    >
                      <span className="text-2xl">🔗</span>
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
                      title="View Code"
                    >
                      <span className="text-2xl">💻</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-bright-purple text-sm font-semibold border border-bright-purple/50">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bright-purple transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-lg text-gray-300 text-sm hover:bg-bright-purple hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className={`h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-bright-purple/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            View All Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;