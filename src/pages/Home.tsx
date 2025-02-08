import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import { ArrowRight, Star, Users, GitFork, Code2, Briefcase, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const featuredProjects = projects.slice(0, 3);

const teamMembers = [
  {
    name: 'Aayush Sharma',
    role: 'Main Developer and Technical Lead',
    image: '/team/b.jpg',
    responsibilities: [
      'Lead Development',
      'Architecture and Design',
      'Feature Implementation',
      'Code Review and Quality Assurance'
    ],
    icon: Code2
  },
  {
    name: 'Shivanjali Gautam',
    role: 'Community Engagement Coordinator',
    image: '/team/Shivanjali.jpg',
    responsibilities: [
      'Community Building',
      'Event Organization',
      'Outreach Efforts',
      'Support and Resources'
    ],
    icon: Heart
  },
  {
    name: 'Utkarsh Batham',
    role: 'Project Manager',
    image: '/team/Utkarsh.jpg',
    responsibilities: [
      'Project Planning',
      'Team Coordination',
      'Risk Management',
      'Stakeholder Communication'
    ],
    icon: Briefcase
  },
  {
    name: 'Mohit Soni',
    role: 'Marketing Specialist',
    image: '/team/Mohit.jpg',
    responsibilities: [
      'Marketing Strategy',
      'Content Creation',
      'Social Media Management',
      'Analytics Tracking'
    ],
    icon: MessageSquare
  }
];

export default function Home() {
  return (
    <>
      <SEO />
      <div className="bg-white">
        <Hero />
        
        {/* Stats Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Star className="h-8 w-8 text-yellow-400 mb-3" />
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-500 mt-1">Active Projects</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Users className="h-8 w-8 text-primary-500 mb-3" />
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-500 mt-1">Contributors</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <GitFork className="h-8 w-8 text-green-500 mb-3" />
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500 mt-1">Contributions</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Code2 className="h-8 w-8 text-purple-500 mb-3" />
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-500 mt-1">Technologies</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Projects Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold tracking-wide uppercase">Our Work</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most impactful open-source projects that are making a difference in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex-shrink-0 relative">
                  <img
                    className="h-56 w-full object-cover"
                    src={project.thumbnail}
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6">
                  <p className="text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Updated {new Date(project.lastUpdated).toLocaleDateString()}
                    </div>
                    <Link
                      to={project.docsUrl}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center group"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 hover:scale-105"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary-600 font-semibold tracking-wide uppercase">Our Team</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet the Minds Behind Poornima Nexus
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A dedicated team of professionals working together to create innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-90" />
                    <member.icon className="absolute top-4 right-4 h-6 w-6 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium mt-1">{member.role}</p>
                    <ul className="mt-4 space-y-2">
                      {member.responsibilities.map((resp) => (
                        <li key={resp} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Make an Impact?
              </h2>
              <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
                Join our community of developers and contribute to open-source projects that matter
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  to="/docs"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white transition-all duration-200 hover:scale-105"
                >
                  Read Documentation
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white transition-all duration-200 hover:scale-105"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}