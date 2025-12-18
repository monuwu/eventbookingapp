import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import eventsData from '../data/events';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useBooking();

  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
          <button onClick={() => navigate('/')} className="btn-primary">
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleBookNow = () => {
    const success = addToCart(event);
    if (success) {
      setTimeout(() => navigate('/cart'), 1500);
    }
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
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Event Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-2">{event.title}</h1>
            <p className="text-xl text-gray-200">{event.organizer}</p>
          </div>
        </div>
      </div>

      {/* Event Details Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 animate-slide-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
            </div>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Date & Time</h3>
                    <p className="text-gray-600">{formatDate(event.date)}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">{event.venue}</p>
                    <p className="text-gray-600">{event.city}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Capacity</h3>
                    <p className="text-gray-600">{event.capacity.toLocaleString()} attendees</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Organizer</h3>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slide-up">
              <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-8 sticky top-20 animate-scale-in">
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-primary-600">${event.price}</span>
                  <span className="text-gray-600 ml-2">per ticket</span>
                </div>
                <p className="text-sm text-gray-500">Taxes and fees included</p>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full btn-primary mb-4"
              >
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Instant Confirmation</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">E-ticket Delivery</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Free Cancellation</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
