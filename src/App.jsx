import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Layout from './Components/Layout'
import ContactUs from './pages/ContactUs/ContactUs'
import ChatPage from './pages/ChatPage/ChatPage'


import BookingDates from './Components/BookingDates'
import { UserContextProvider } from './UserContext'
import IndexPage from './pages/IndexPage/IndexPage'

import PlacesPage from './pages/PlacesPage/PlacesPage'
import PlacesFormPage from './pages/PlacesFormPage/PlacesFormPage'
import PlacePage from './pages/PlacePage/PlacePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

import BookingsPage from './pages/BookingsPage/BookingsPage'
import BookingPage from './pages/BookingPage/BookingPage'


function App() {


  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}>

          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/chatapp" element={<ChatPage />} />

          <Route path="/account" element={<ProfilePage />} />
          <Route path='bookingdates' element={<BookingDates />} />

          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/place/:id" element={<PlacePage />} />

          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />

          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />

        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
