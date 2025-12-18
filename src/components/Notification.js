import React, { useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

const Notification = () => {
  const { notification } = useBooking();

  if (!notification) return null;

  const getNotificationStyles = (type) => {
    const styles = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500'
    };
    return styles[type] || styles.info;
  };

  const getIcon = (type) => {
    if (type === 'success') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    if (type === 'error') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    if (type === 'warning') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-up">
      <div className={`${getNotificationStyles(notification.type)} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 min-w-[300px]`}>
        <div className="flex-shrink-0">
          {getIcon(notification.type)}
        </div>
        <p className="font-medium">{notification.message}</p>
      </div>
    </div>
  );
};

export default Notification;
