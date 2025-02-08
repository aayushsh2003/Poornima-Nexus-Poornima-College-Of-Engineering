import React, { useState } from 'react';
import SEO from '../components/SEO';
import { useParams } from 'react-router-dom';
import { documentation } from '../data/documentation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDocumentation() {
  const { projectId } = useParams();
  const docs = projectId ? documentation[projectId] : null;
  const [activeSection, setActiveSection] = useState(Object.keys(docs?.sections || {})[0] || '');

  if (!docs) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation Not Found</h1>
          <p className="text-gray-600 mb-8">The requested documentation could not be found.</p>
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${docs.title} | Documentation`}
        description={`Complete documentation and guides for ${docs.title}. Learn about features, installation, and how to contribute.`}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-10">
            <div className="flex items-center space-x-4 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">{docs.title}</h1>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar Navigation */}
              <div className="col-span-12 lg:col-span-3">
                <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6">
                  <nav className="space-y-1">
                    {Object.entries(docs.sections).map(([key, section]) => (
                      <button
                        key={key}
                        onClick={() => setActiveSection(key)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                          activeSection === key
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 lg:col-span-9">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="px-6 py-8">
                    <div 
                      className="prose prose-primary max-w-none"
                      dangerouslySetInnerHTML={{ 
                        __html: docs.sections[activeSection]?.content || ''
                      }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}