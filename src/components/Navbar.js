import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const Navbar = () => {
  const { getCartCount } = useBooking();
  const cartCount = getCartCount();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              EventHub
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
            >
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="/cart" 
              className="relative group"
            >
              <div className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
