import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loguearse from './pages/loguearse'
import AdminDash from './pages/AdminDash'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loguearse />} />           
        <Route path="/Alexito" element={<AdminDash />} />              
      </Routes>
    </Router>
  )
}