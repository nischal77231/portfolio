import React from 'react';

const skills = [
  { name: 'Html5', level: 95 },
  { name: 'Css3', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'SQL', level: 75 },
  { name: 'React.js', level: 70 },
  { name: 'Node.js', level: 70 },
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills</h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-blue-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}