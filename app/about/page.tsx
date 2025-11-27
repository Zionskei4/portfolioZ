import Link from "next/link"
import { Code, GraduationCap, User, Award, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
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
                  className="text-yellow-400 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-yellow-400"
                >
                  About Me
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            About <span className="text-yellow-400">Me</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Passionate Computer Science student dedicated to learning and creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 sticky top-24">
              <div className="text-center mb-6">
                <div className="mb-8">
                  <img
                    src="/me.JPG" 
                    alt="Kenan Ben G. Polgo"
                    className="w-48 h-48 rounded-full mx-auto border-4 border-yellow-400 shadow-2xl"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white">Kenan Ben G. Polgo</h2>
                <p className="text-yellow-400 font-semibold">Computer Science Student</p>
                <p className="text-blue-200 text-sm mt-2">Central Philippine University</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-blue-100">
                  <GraduationCap className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>BS Computer Science</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <BookOpen className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>3rd Year Student</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <Target className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Software Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="h-6 w-6 text-yellow-400 mr-3" />
                My Story
              </h3>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p>
                  Hello! I'm Kenan Ben G. Polgo, a dedicated Computer Science student at Central Philippine University.
                  My journey in technology began with a curiosity about how software works and has evolved into a
                  passion for creating innovative solutions that can make a difference.
                </p>
                <p>
                  Currently in my third year of studies, I've been focusing on web development, software engineering,
                  and theoretical algorithms. I believe in the power of technology to solve real-world problems and am
                  constantly learning new skills to stay current with industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new programming languages, contributing to open-source
                  projects, or collaborating with fellow students on exciting tech projects. I'm always eager to take on
                  new challenges and expand my knowledge in the ever-evolving field of computer science.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-yellow-400 mr-3" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                  <p className="text-yellow-400 font-medium">Central Philippine University</p>
                  <p className="text-blue-200">2021 - Present (Expected 2026)</p>
                  <p className="text-blue-100 mt-2">
                    Relevant Coursework: Data Structures & Algorithms, Web Development, Database Systems, Software
                    Engineering, Object-Oriented Programming, Computer Networks
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Senior High School - TVL Track</h4>
                  <p className="text-yellow-400 font-medium">CNCHS Senior High School</p>
                  <p className="text-blue-200">2019 - 2021</p>
                  <p className="text-blue-100 mt-2">
                    Graduated with Honors. Strong foundation in Mathematics, Problem Solving, and Computer Programming.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="h-6 w-6 text-yellow-400 mr-3" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">Programming Languages</h4>
                  <div className="space-y-2">
                    {[
                      { name: "JavaScript", level: 85 },
                      { name: "Python", level: 80 },
                      { name: "TypeScript", level: 75 },
                      { name: "C#", level: 70 },
                      { name: "SQL", level: 65 },
                    ].map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-blue-100 mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-navy-800 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">Technologies & Tools</h4>
                  <div className="space-y-2">
                    {[
                      { name: "React/Next.js", level: 80 },
                      { name: "Node.js", level: 75 },
                      { name: "MySQL/PostgreSQL", level: 70 },
                      { name: "Git/GitHub", level: 85 },
                      { name: "Tailwind CSS", level: 90 },
                    ].map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-blue-100 mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-navy-800 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="h-6 w-6 text-yellow-400 mr-3" />
                Achievements & Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">Dean's List</h4>
                    <p className="text-yellow-400">Academic Year 2022-2023, 2023-2024</p>
                    <p className="text-blue-200 text-sm">Maintained high academic standing</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">DevCon</h4>
                    <p className="text-yellow-400">Runner Up</p>
                    <p className="text-blue-200 text-sm">Game Development</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">Google Developer Student Club </h4>
                    <p className="text-yellow-400">Active Participant</p>
                    <p className="text-blue-200 text-sm">Hackathons and any Tech events</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">Open Source Contributor</h4>
                    <p className="text-yellow-400">GitHub Projects</p>
                    <p className="text-blue-200 text-sm">Contributing to community projects</p>
                  </div>
                </div>
              </div>
            </div>
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
