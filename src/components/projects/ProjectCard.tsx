import React from 'react';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import type { Project } from '../../types';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Extract project ID from the docsUrl
  const projectId = project.docsUrl.split('/').pop();

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-md overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={project.thumbnail}
          alt={project.name}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
            <div className="flex space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
                title="View Code"
              >
                <Github className="h-5 w-5" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                  title="Live Demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
              <Link
                to={`/docs/${projectId}`}
                className="text-gray-400 hover:text-gray-500"
                title="Documentation"
              >
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <p className="mt-3 text-base text-gray-500 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex-shrink-0">
            <p className="text-sm text-gray-500">
              Last updated: {new Date(project.lastUpdated).toLocaleDateString()}
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Maintained by: {project.maintainers.join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
}