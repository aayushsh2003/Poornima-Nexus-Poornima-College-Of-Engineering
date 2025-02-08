import React from 'react';
import SEO from '../components/SEO';
import { Book, Code, GitPullRequest, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = [
  {
    name: 'Getting Started',
    description: 'Learn the basics and get up and running quickly',
    icon: Book,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Development Guide',
    description: 'Detailed information for developers',
    icon: Code,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Contribution Guidelines',
    description: 'How to contribute to our projects',
    icon: GitPullRequest,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Community Resources',
    description: 'Connect with other developers',
    icon: Users,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export default function Documentation() {
  // Filter projects that have documentation
  const projectsWithDocs = projects.filter(project => project.docsUrl);

  return (
    <>
      <SEO 
        title="Documentation | Poornima Nexus"
        description="Comprehensive documentation for Poornima Nexus projects. Learn how to contribute and get started with our open-source initiatives."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Documentation
              </h1>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                Everything you need to know about our projects, from getting started to advanced development guides.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Documentation Categories */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className={`${category.bgColor} p-3 inline-flex rounded-lg`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          {/* Project Documentation */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Project Documentation
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsWithDocs.map((project) => (
                <Link
                  key={project.id}
                  to={project.docsUrl}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                      View Documentation
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Need Help?
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Can't find what you're looking for? Our community is here to help. Join our Discord server or check out our community forums.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Link
                  to="/community"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Join Community
                </Link>
                <Link
                  to="/docs/faq"
                  className="inline-flex items-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}