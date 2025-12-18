import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Music: 'bg-purple-100 text-purple-700',
      Technology: 'bg-blue-100 text-blue-700',
      Sports: 'bg-green-100 text-green-700',
      Art: 'bg-pink-100 text-pink-700',
      Food: 'bg-orange-100 text-orange-700',
      Entertainment: 'bg-yellow-100 text-yellow-700',
      Business: 'bg-indigo-100 text-indigo-700',
      Wellness: 'bg-teal-100 text-teal-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <Link to={`/event/${event.id}`} className="block">
      <div className="card overflow-hidden h-full animate-fade-in">
        {/* Event Image */}
        <div className="relative overflow-hidden h-48">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
            <span className="text-primary-600 font-bold text-sm">${event.price}</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors duration-300">
            {event.title}
          </h3>
          
          <div className="space-y-2 mb-4">
            {/* Date */}
            <div className="flex items-center text-gray-600 text-sm">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(event.date)} at {event.time}</span>
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-600 text-sm">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{event.city}</span>
            </div>
          </div>

          {/* View Details Button */}
          <button className="w-full bg-primary-50 text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
