import React, { useState, useMemo } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/events';

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  // Get unique categories
  const categories = ['All', ...new Set(eventsData.map(event => event.category))];

  // Filter and sort events
  const filteredAndSortedEvents = useMemo(() => {
    let filtered = eventsData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Sort events
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 animate-slide-up">
            Discover Amazing Events
          </h1>
          <p className="text-xl text-blue-100 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Find and book the perfect events for you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field appearance-none cursor-pointer"
              >
                <option value="date">Sort by Date</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Sort by Name</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium">
            Showing <span className="text-primary-600 font-bold">{filteredAndSortedEvents.length}</span> events
          </p>
        </div>

        {/* Events Grid */}
        {filteredAndSortedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
