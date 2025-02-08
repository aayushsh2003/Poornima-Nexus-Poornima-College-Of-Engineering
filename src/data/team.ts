import { Code2, Briefcase, MessageSquare, Heart } from 'lucide-react';
import type { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Aayush Sharma',
    role: 'Main Developer and Technical Lead',
    image: '/team/b.jpg',
    bio: 'Lead developer with expertise in React and modern web technologies, focused on creating scalable and efficient solutions.',
    icon: Code2,
    responsibilities: [
      {
        title: 'Lead Development',
        description: 'Oversee the development of the website using frontend technologies (e.g., React, Tailwind CSS).'
      },
      {
        title: 'Architecture and Design',
        description: 'Design the overall architecture of the website, ensuring scalability and performance.'
      },
      {
        title: 'Feature Implementation',
        description: 'Develop and implement new features based on project requirements and user feedback.'
      },
      {
        title: 'Code Review and Quality Assurance',
        description: 'Conduct code reviews and implement testing strategies to ensure code quality.'
      },
      {
        title: 'Documentation',
        description: 'Maintain comprehensive documentation for the codebase and development process.'
      },
      {
        title: 'Collaboration and Mentorship',
        description: 'Work closely with the team and mentor other members in coding practices.'
      },
      {
        title: 'Troubleshooting and Support',
        description: 'Identify and resolve technical issues and provide support as needed.'
      },
      {
        title: 'Continuous Learning',
        description: 'Stay updated with the latest trends in web development and explore new tools.'
      }
    ],
    socialLinks: {
      github: 'https://github.com/aayushsh2003',
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: '2',
    name: 'Utkarsh Batham',
    role: 'Project Manager',
    image: '/team/Utkarsh.jpg',
    bio: 'Experienced project manager with a strong track record of delivering successful web development projects.',
    icon: Briefcase,
    responsibilities: [
      {
        title: 'Project Planning',
        description: 'Develop a project timeline with milestones and deadlines.'
      },
      {
        title: 'Team Coordination',
        description: 'Facilitate communication among team members and ensure everyone is aligned on tasks.'
      },
      {
        title: 'Documentation Management',
        description: 'Keep track of project documentation, including meeting notes and progress reports.'
      },
      {
        title: 'Risk Management',
        description: 'Identify potential risks to the project timeline and develop mitigation strategies.'
      },
      {
        title: 'Progress Tracking',
        description: 'Monitor the progress of tasks and ensure that the project stays on schedule.'
      },
      {
        title: 'Stakeholder Communication',
        description: 'Serve as the primary point of contact for any external stakeholders or collaborators.'
      },
      {
        title: 'Feedback Collection',
        description: 'Gather feedback from team members and users to improve project outcomes.'
      }
    ],
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      instagram:'#'
    }
  },
  {
    id: '3',
    name: 'Mohit Soni',
    role: 'Marketing Specialist',
    image: '/team/Mohit.jpg',
    bio: 'Creative marketing professional specializing in digital promotion and community engagement.',
    icon: MessageSquare,
    responsibilities: [
      {
        title: 'Marketing Strategy Development',
        description: 'Create and implement marketing strategies to promote the website and its projects.'
      },
      {
        title: 'Content Creation',
        description: 'Write and edit engaging content for the website, including project descriptions and blog posts.'
      },
      {
        title: 'Social Media Management',
        description: 'Manage social media accounts, create posts, and engage with the audience to build a community.'
      },
      {
        title: 'User Engagement',
        description: 'Develop strategies to engage users and encourage them to provide feedback and share the website.'
      },
      {
        title: 'Analytics Tracking',
        description: 'Monitor website traffic and social media engagement metrics to assess the effectiveness of marketing efforts.'
      },
      {
        title: 'Promotional Materials',
        description: 'Create promotional materials (e.g., flyers, presentations) for events or outreach efforts.'
      },
      {
        title: 'Networking',
        description: 'Build relationships with other organizations or groups to promote collaboration and increase visibility.'
      }
    ],
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      instagram:'#'
    }
  },
  {
    id: '4',
    name: 'Shivanjali Gautam',
    role: 'Community Engagement Coordinator',
    image: '/team/Shivanjali.jpg',
    bio: 'Passionate community builder focused on creating meaningful connections and fostering collaboration.',
    icon: Heart,
    responsibilities: [
      {
        title: 'Community Building',
        description: 'Foster relationships with students, faculty, and potential collaborators to create a supportive community.'
      },
      {
        title: 'Event Organization',
        description: 'Plan and organize events, workshops, or meetups to promote the project and engage the community.'
      },
      {
        title: 'Feedback Gathering',
        description: 'Actively seek feedback from users and the community to inform project improvements.'
      },
      {
        title: 'Outreach Efforts',
        description: 'Reach out to other student organizations or departments to promote collaboration and participation.'
      },
      {
        title: 'Networking',
        description: 'Attend relevant events or meetings to represent the project and build connections.'
      },
      {
        title: 'Communication',
        description: 'Keep the community informed about project updates, events, and opportunities for involvement.'
      },
      {
        title: 'Support and Resources',
        description: 'Provide support to community members and direct them to resources available through the project.'
      }
    ],
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      instagram:'#'
    }
  }
];