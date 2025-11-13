const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '🎥', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-royal-purple to-deep-purple border-t border-bright-purple/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-bright-purple/5"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-bright-purple to-pink-500 bg-clip-text text-transparent mb-4 animate-glow">
              MyPortfolio
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating stunning digital experiences with passion and precision. 
              Let's build something amazing together! ✨
            </p>
            
            {/* Newsletter Subscription */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-bright-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-bright-purple transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-bright-purple/50 transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-bright-purple hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting', 'SEO Optimization'].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-bright-purple hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-bright-purple to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>© {currentYear} MyPortfolio. Made with ❤️ by <span className="text-bright-purple font-semibold">Your Name</span></p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                title={social.name}
                className="group relative"
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl border border-bright-purple/30 group-hover:border-bright-purple group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <a
            href="#home"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative px-6 py-3 bg-white/10 rounded-full border border-bright-purple/30 group-hover:border-bright-purple group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 text-gray-400 group-hover:text-white transform group-hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Back to Top</span>
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </a>
        </div>

        {/* Extra Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-bright-purple transition-colors duration-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-bright-purple transition-colors duration-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-bright-purple transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-glow"></div>
    </footer>
  );
};

export default Footer;