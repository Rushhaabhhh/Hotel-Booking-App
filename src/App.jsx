import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Regsiter'
import Login from './pages/Login/Login'
import Layout from './Components/Layout'
import Account from './pages/Account/Account'
import BookingDates from './Components/BookingDates'
import axios from 'axios'
import { UserContextProvider } from './UserContext'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {


  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
          {/* <Route index element={<IndexPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path='bookingdates' element={<BookingDates />} />

          {/* <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
