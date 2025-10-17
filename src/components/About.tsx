import { Code2, Rocket, Users, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Proficient in building end-to-end web applications with modern technologies"
    },
    {
      icon: Rocket,
      title: "AI Enthusiast",
      description: "Experienced in machine learning and data-driven application development"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaborator with excellent communication and problem-solving skills"
    },
    {
      icon: Award,
      title: "Quick Learner",
      description: "Constantly exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                I'm a passionate Information Technology student pursuing my B.Tech at Sreenidhi Institute of Science and Technology (2021-2025) with a CGPA of 8.05. My journey in tech has been driven by
                curiosity and a desire to create solutions that make a real impact.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                With expertise spanning from web development to machine learning, I've worked on diverse
                projects that combine technical excellence with user-centric design. I believe in writing
                clean, maintainable code and building applications that solve real-world problems.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons,
                or contributing to open-source projects. I'm always eager to learn and grow as a developer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <item.icon className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
