import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notification from './components/Notification';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import BookingCart from './pages/BookingCart';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Notification />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<EventList />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/cart" element={<BookingCart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
