import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { teamMembers } from '../../data/team';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Documentation', href: '/docs' }
];

const resources = [
  { name: 'Getting Started', href: '/docs' },
  { name: 'Contribution Guide', href: '/docs/contributing' },
  { name: 'Code of Conduct', href: '/docs/code-of-conduct' },
  { name: 'FAQ', href: '/docs/faq' }
];

const contact = {
  email: 'contact@poornimanexus.org',
  phone: '+91 141 2345678',
  address: 'Poornima College of Engineering, Plot No. IS-2027 to 2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur, Rajasthan 302022'
};

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/aayushsh2003', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Brand and Social Links */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Poornima Nexus</span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Empowering open-source innovation at Poornima College. Building the future through collaboration and code.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center text-gray-500 hover:text-gray-900"
                >
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <span>{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center text-gray-500 hover:text-gray-900"
                >
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <span>{contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-500">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
            Our Team
          </h3>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="text-sm font-medium text-gray-900">{member.name}</h4>
                <p className="text-xs text-gray-500">{member.role}</p>
                <div className="flex justify-center space-x-2 mt-2">
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-base text-gray-400">
              &copy; {currentYear} Poornima Nexus. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
              <a 
                href="https://www.poornima.edu.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-900"
              >
                Poornima College <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}