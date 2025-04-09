import React from 'react';
import SEO from '../components/SEO';
import { Github, Linkedin, Twitter, ArrowRight, Code2, BookOpen, Users2, Rocket, Instagram } from 'lucide-react';
import { teamMembers } from '../data/team';

const values = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'We strive for high-quality code and innovative solutions in every project.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'We embrace new technologies and share knowledge within our community.'
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We push boundaries and explore new possibilities in technology.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Poornima Nexus"
        description="Meet the talented team behind Poornima Nexus. We're passionate developers, designers, and innovators working together to create meaningful open-source projects."
        type="website"
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 py-24">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About Poornima Nexus
              </h1>
              <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                We're a team of passionate developers, designers, and innovators working together to create
                meaningful open-source projects at Poornima College of Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and shape our community
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="relative group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                  <value.icon className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The talented individuals behind Poornima Nexus who make it all possible
              </p>
            </div>

            <div className="grid gap-12">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group"
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/3 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-center lg:h-[32rem]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-primary-200 mt-1">{member.role}</p>
                        <div className="flex gap-4 mt-4">
                          {member.socialLinks.github && (
                            <a
                              href={member.socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-200 transition-colors"
                            >
                              <Github className="h-6 w-6" />
                            </a>
                          )}
                          {member.socialLinks.linkedin && (
                            <a
                              href={member.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-200 transition-colors"
                            >
                              <Linkedin className="h-6 w-6" />
                            </a>
                          )}
                          {member.socialLinks.twitter && (
                            <a
                              href={member.socialLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-200 transition-colors"
                            >
                              <Twitter className="h-6 w-6" />
                            </a>
                          )}
                          {member.socialLinks.instagram && (
                            <a
                              href={member.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary-200 transition-colors"
                            >
                              <Instagram className="h-6 w-6" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <div className="prose prose-primary max-w-none">
                        <p className="text-lg text-gray-600 mb-6">{member.bio}</p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h4>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {member.responsibilities.map((resp) => (
                            <div
                              key={resp.title}
                              className="p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors"
                            >
                              <h5 className="font-medium text-gray-900 flex items-center">
                                <ArrowRight className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                                {resp.title}
                              </h5>
                              <p className="mt-1 text-sm text-gray-600">
                                {resp.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}