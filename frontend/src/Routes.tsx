import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './containers/Home.tsx'
import Login from './containers/Login.tsx'
import NotFound from './containers/NotFound.tsx'

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />;
    </Routes>
  )
}
