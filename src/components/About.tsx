import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Code2 className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">I write clean, maintainable code following best practices and design patterns.</p>
          </div>
          <div className="text-center p-6">
            <Rocket className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Always learning and implementing cutting-edge technologies.</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">Great team player with excellent communication skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}