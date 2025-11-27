import Link from "next/link"
import { Github, Mail, Phone, GraduationCap, MapPin, Calendar, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-navy-900">
      {/* Navigation */}
      <nav className="bg-navy-900/90 backdrop-blur-sm border-b border-yellow-400/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/cpu-logo.png"
                  alt="CPU Logo"
                  className="h-12 w-12 mr-3"
                />
                </Link>
              <span className="text-white font-bold text-xl">Kenan Ben G. Polgo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About Me
                </Link>
                <Link
                  href="/contact"
                  className="text-yellow-400 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-yellow-400"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-yellow-400">Me</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities, collaborations, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-yellow-400 mr-3" />
                Get In Touch
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                I'm currently a Computer Science student at Central Philippine University, always eager to learn and
                collaborate. Whether you have a project idea, want to discuss technology, or just want to connect, feel
                free to reach out!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-blue-200">kenanben.polgo-21@cpu.edu.ph</p>
                    <a
                      href="mailto:kenanben.polgo-21@cpu.edu.ph"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm"
                    >
                      Send me an email →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-blue-200">+63 917 185 8427</p>
                    <p className="text-yellow-400 text-sm">Available for calls and messages</p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Github className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">GitHub</h3>
                    <p className="text-blue-200">github.com/bananaNuggets75</p>
                    <a
                      href="https://github.com/bananaNuggets75?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm"
                    >
                      View my projects →
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-blue-200">Iloilo City, Philippines</p>
                    <p className="text-yellow-400 text-sm">Central Philippine University</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Availability</h3>
                    <p className="text-blue-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-yellow-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/bananaNuggets75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
                <a
                  href="mailto:kenanben.polgo-21@cpu.edu.ph"
                  className="flex items-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
                <a
                  href="tel:+639171858427"
                  className="flex items-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="h-6 w-6 text-yellow-400 mr-3" />
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-navy-800/50 border border-navy-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-navy-800/50 border border-navy-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-navy-800/50 border border-navy-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-navy-800/50 border border-navy-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  placeholder="Tell me about your project, question, or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-navy-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
              <p className="text-yellow-400 text-sm">
                <strong>Note:</strong> This is a portfolio demonstration. The form is for display purposes. Please use
                the direct contact methods above to reach me.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            I'm passionate about technology and always excited to work on new projects. Whether it's web development,
            mobile apps, or exploring emerging technologies, I'm ready to contribute and learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-yellow-400 hover:bg-yellow-500 text-navy-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More About Me
            </Link>
            <a
              href="https://github.com/bananaNuggets75"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-navy-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-blue-200">© 2024 Kenan Ben G. Polgo. All rights reserved.</p>
            <p className="text-blue-300 text-sm mt-2">Central Philippine University - Computer Science Student</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
