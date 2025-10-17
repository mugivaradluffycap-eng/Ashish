import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      status: "2021 - 2025",
      description: "Pursuing B.Tech in Information Technology at Sreenidhi Institute of Science and Technology with a CGPA of 8.05. Comprehensive curriculum covering software engineering, data structures, algorithms, web development, and artificial intelligence.",
      highlights: [
        "CGPA: 8.05",
        "Focus on practical application development",
        "Active participation in coding competitions"
      ]
    },
    {
      icon: BookOpen,
      degree: "Intermediate (12th Standard)",
      field: "MPC (Mathematics, Physics, Chemistry)",
      status: "Completed",
      description: "Completed intermediate education at Narayana Junior College with strong foundation in mathematics, physics, and chemistry, scoring 966 marks.",
      highlights: [
        "Marks: 966",
        "Strong analytical and problem-solving skills",
        "Excellent foundation in mathematics"
      ]
    },
    {
      icon: Award,
      degree: "SSC (10th Standard)",
      field: "Secondary Education",
      status: "Completed",
      description: "Completed secondary education at Indur High School with outstanding academic performance, achieving a GPA of 9.2.",
      highlights: [
        "Grade: 9.2",
        "Outstanding academic record",
        "Early interest in technology"
      ]
    }
  ];

  const certifications = [
    "Built SkillMate project for professional skill recommendation",
    "Completed multiple AI/ML & Web Development mini-projects",
    "Participated in coding challenges and hackathons",
    "Strong problem-solving abilities demonstrated through competitive programming"
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="space-y-8 mb-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-br from-blue-500 to-cyan-500 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                      <edu.icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">{edu.status}</span>
                  </div>

                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-500 font-semibold mb-4">{edu.field}</p>
                    <p className="text-slate-700 mb-4 leading-relaxed">{edu.description}</p>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start text-slate-600">
                          <span className="text-blue-500 mr-2 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-12 h-12 text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Achievements & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white leading-relaxed">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
