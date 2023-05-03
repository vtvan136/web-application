
import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom";
import ToDo from './pages/ToDo';
import Error from './pages/Error';
import Home from './pages/Home';
import Form from './components/Form';
const App = () => {
  return (
    <>
      <Form/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do" element={<ToDo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App