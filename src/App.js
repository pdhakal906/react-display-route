import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import Detail from './pages/Detail'


const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<RootLayout />}>

          <Route index element={<HomePage />} />
          <Route path="detail/:id" element={<Detail />} />

        </Route>


      </Routes>
    </div>
  )
}

export default App
