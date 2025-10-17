import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Rathod Ashish</h3>
              <p className="text-slate-400 leading-relaxed">
                Information Technology Student & Full-Stack Developer passionate about creating innovative solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ashish-1710/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rathod-ashish-46172626b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:ashishrathod9640@gmail.com"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Rathod Ashish
              <span className="mx-2">•</span>
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
