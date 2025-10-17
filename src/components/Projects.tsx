import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "SkillMate",
      subtitle: "Real-Time Skill Recommendation System",
      description: "A web-based system that recommends complementary skills to users based on their input skill using AI models and real-time data.",
      features: [
        "Personalized skill recommendations",
        "Skill trends visualization",
        "User-friendly interface",
        "Real-time data processing"
      ],
      techStack: ["Python", "Flask", "HTML/CSS", "ML Algorithms"],
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/Ashish-1710/Skill-Mate"
    },
    {
      title: "Student Attendance System",
      subtitle: "QR + Face Recognition",
      description: "Flask-based attendance tracking app integrating QR code scanning and face recognition for authentication.",
      features: [
        "Role-based access control",
        "QR code scanning",
        "Face recognition authentication",
        "Automated report generation"
      ],
      techStack: ["Python", "Flask", "OpenCV", "MySQL"],
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com"
    },
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Machine Learning Classification",
      description: "Machine learning model that identifies fraudulent transactions using classification algorithms with high accuracy.",
      features: [
        "Advanced ML algorithms",
        "Real-time fraud detection",
        "Data preprocessing pipeline",
        "Model performance metrics"
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Ashish-1710/Credit-Card-Fraud-detection"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  <div className={`md:w-2/5 bg-gradient-to-br ${project.gradient} p-12 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-slate-600 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium"
                      >
                        <Github size={18} />
                        View on GitHub
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
