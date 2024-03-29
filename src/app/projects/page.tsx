"use client"
// components/ProjectSection.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Reform',
    description: 'Create and share beautiful form with Webflow s user-friendly prototype feature.',
    githubLink: 'https://github.com/project1',
  },
  {
    id: 2,
    title: 'My tube',
    description: 'Led the development of My_tube, an innovative YouTube clone. ',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 3,
    title: 'Student management system',
    description: 'Engineered a resilient system for seamless control: effortlessly read, update, and delete.',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 4,
    title: 'Github finder',
    description: 'GitHub Finder, a web app, simplifies searching for GitHub accounts and repositories. ',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 5,
    title: 'Right Draw',
    description: 'This platform is designed for crafting whiteboards and infinite canvas experiences. ',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 6,
    title: 'IMDB Clone',
    description: 'An IMDb clone, providing a comprehensive database of films, TV shows, and celebrities.',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 7,
    title: 'Quiz-App',
    description: 'A Quiz-App clone offering an engaging and interactive platform for users to test their knowledge.',
    githubLink: 'https://github.com/project2',
  },
];

const Project = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto px-4 py-8" style={{ maxWidth: '800px' }}>
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-[800px] mx-auto">
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            placeholder="Search projects name"
            className="px-2 py-2 w-[400px] bg-transparent  rounded-md border focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project