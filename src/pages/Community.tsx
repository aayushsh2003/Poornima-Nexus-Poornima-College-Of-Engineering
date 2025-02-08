import React from 'react';
import SEO from '../components/SEO';
import { Calendar, MessageSquare, Users } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Open Source Workshop',
    date: '2024-03-25',
    time: '14:00',
    location: 'Main Campus Auditorium',
    description: 'Learn how to contribute to open-source projects effectively.',
  },
  {
    id: 2,
    title: 'Hackathon 2024',
    date: '2024-04-15',
    time: '09:00',
    location: 'Innovation Hub',
    description: '24-hour coding challenge to build innovative solutions.',
  },
];

const discussionTopics = [
  {
    id: 1,
    title: 'Best Practices for React Development',
    author: 'John Doe',
    replies: 23,
    category: 'Development',
  },
  {
    id: 2,
    title: 'Getting Started with Open Source',
    author: 'Jane Smith',
    replies: 15,
    category: 'Beginners',
  },
];

export default function Community() {
  return (
    <>
      <SEO
        title="Community | Poornima Nexus"
        description="Join our vibrant community of developers, designers, and innovators. Collaborate, learn, and grow with Poornima Nexus."
        type="website"
      />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Community Hub
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Connect, collaborate, and grow with fellow developers
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Events Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                      <p>Time: {event.time}</p>
                      <p>Location: {event.location}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{event.description}</p>
                    <button className="mt-3 text-primary-600 hover:text-primary-500 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Discussions Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <div className="space-y-6">
                {discussionTopics.map((topic) => (
                  <div key={topic.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{topic.author}</span>
                      <span className="mx-2">•</span>
                      <span>{topic.replies} replies</span>
                    </div>
                    <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {topic.category}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                Start a Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}