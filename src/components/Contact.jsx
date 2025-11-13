import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 's22310471@student.unklab.ac.id',
      value: 's22310471@student.unklab.ac.id',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: '📱',
      title: '+6285348600507',
      value: '+6285348600507',
      color: 'from-pink-600 to-purple-600'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Manado, Indonesia',
      color: 'from-green-600 to-blue-600'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#', color: 'from-gray-600 to-gray-800' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-pink-600 to-purple-600' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-900 via-deep-purple to-royal-purple relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-300 font-bold text-white">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group relative block"
                >
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-bright-purple/30 group-hover:border-bright-purple group-hover:scale-105 transition-all duration-300 flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                      <p className="text-white font-semibold text-lg">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group relative"
                    title={social.name}
                  >
                    {/* Glowing Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>

                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 shadow-lg`}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-bright-purple/30">
                <p className="text-black-300 text-center italic">
                  "The only way to do great work is to love what you do." ✨
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
             

              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-bright-purple/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/10 border border-bright-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-bright-purple focus:bg-white/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/10 border border-bright-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-bright-purple focus:bg-white/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/10 border border-bright-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-bright-purple focus:bg-white/20 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-black/10 border border-bright-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-bright-purple focus:bg-white/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-bright-purple/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <span>✓</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-xl">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;