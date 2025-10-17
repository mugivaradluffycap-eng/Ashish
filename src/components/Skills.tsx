import { Code, Globe, Database, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Flask", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      skills: [
        { name: "Scikit-learn", level: 82 },
        { name: "Pandas", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 83 }
      ]
    },
    {
      icon: Wrench,
      title: "Other Tools",
      skills: [
        { name: "GitHub", level: 88 },
        { name: "Figma", level: 75 },
        { name: "Google Cloud", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
