import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Hi, I'm [NISCHAL REDDY]
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/nischal77231" className="transform hover:scale-110 transition-transform">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/nischal-reddy-nalla-983494249/" className="transform hover:scale-110 transition-transform">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:nischalreddy.1236@gmail.com" className="transform hover:scale-110 transition-transform">
            <Mail className="w-8 h-8" />
          </a>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
          View My Work
        </button>
      </div>
    </div>
  );
}