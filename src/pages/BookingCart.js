import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const BookingCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, getTotalPrice, clearCart } = useBooking();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleCheckout = () => {
    alert('🎉 Booking Confirmed! Thank you for your purchase. You will receive a confirmation email shortly.');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 text-lg">Start exploring amazing events and add them to your cart!</p>
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
            >
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Browse Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Booking Cart</h1>
          <p className="text-gray-600">Review your selected events before checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((event, index) => (
              <div
                key={event.bookingId}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:flex">
                  {/* Event Image */}
                  <div className="md:w-48 h-48 md:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(event.date)} at {event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right ml-4">
                        <p className="text-2xl font-bold text-primary-600">${event.price}</p>
                        <p className="text-sm text-gray-500">per ticket</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <button
                        onClick={() => navigate(`/event/${event.id}`)}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-300"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => removeFromCart(event.bookingId)}
                        className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-20 animate-scale-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({cart.length})</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Service Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Processing Fee</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-primary-600">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full btn-primary mb-4"
              >
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/')}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start text-gray-600 text-sm mb-3">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure SSL encrypted payment</span>
                </div>
                <div className="flex items-start text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <span>Money-back guarantee within 48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCart;
