import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
              RA
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Rathod Ashish
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-slide-up animation-delay-200">
            Information Technology Student & Full-Stack Developer
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-300">
            Passionate about building innovative web applications and AI-powered solutions.
            Specializing in full-stack development, machine learning, and creating impactful digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up animation-delay-400">
            <a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up animation-delay-500">
            <a href="https://github.com/Ashish-1710/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rathod-ashish-46172626b/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:ashishrathod9640@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Mail size={28} />
            </a>
            <button className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Download size={28} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
