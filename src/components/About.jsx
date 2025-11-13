const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Container - 3 Tables: 1 Left, 2 Right Stacked */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Table 1 - Left Video Only */}
          <div className="bg-white/5 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm">
            {/* Profile Video */}
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-4 border border-purple-500/30 transform group-hover:scale-105 transition-all duration-500 overflow-hidden">
                <video 
                  src="/images/profil.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-[737px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - 2 Tables Stacked */}
          <div className="space-y-8">
            {/* Table 2 - Accounts */}
            <div className="bg-white/5 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">My other accounts</h3>
                <span className="text-purple-400 text-sm">🔗 5 link</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">📧 s22310471@student.unklab.ac.id</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform">
                    Connected
                  </button>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">📷 @starliedoranggie</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform">
                    Connected
                  </button>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">💬 +6285348600507</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform">
                    Connected
                  </button>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">🎵 @Starlie</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform">
                    Connected
                  </button>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">🔗 linktr.ee/starlie</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform">
                    Connected
                  </button>
                </div>
              </div>
            </div>

            {/* Table 3 - About Me */}
            <div className="bg-white/5 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Tentang Saya</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                 Halo! Saya Doranggie Starlie, mahasiswa Informatika semester 5 yang memiliki minat besar di bidang pengembangan web dan kecerdasan buatan.
Saya senang mempelajari hal baru, membangun solusi berbasis teknologi, dan terus mengasah kemampuan saya dalam dunia pemrograman modern.
Fokus saya saat ini adalah mengembangkan website interaktif dan chatbot berbasis expert system yang dapat membantu banyak orang di bidang kesehatan dan edukasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;