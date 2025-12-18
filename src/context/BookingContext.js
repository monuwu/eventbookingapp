import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('eventCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('eventCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (event) => {
    const existingEvent = cart.find(item => item.id === event.id);
    
    if (existingEvent) {
      showNotification('This event is already in your cart!', 'warning');
      return false;
    }
    
    setCart([...cart, { ...event, bookingId: Date.now() }]);
    showNotification('Event added to cart successfully!', 'success');
    return true;
  };

  const removeFromCart = (bookingId) => {
    setCart(cart.filter(item => item.bookingId !== bookingId));
    showNotification('Event removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('eventCart');
    showNotification('Cart cleared successfully!', 'info');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getCartCount = () => {
    return cart.length;
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getCartCount,
    notification,
    showNotification
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
