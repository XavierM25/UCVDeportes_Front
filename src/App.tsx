import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loguearse from './pages/loguearse'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loguearse />} />
        <Route path="/login" element={<Loguearse />} />
      </Routes>
    </Router>
  )
}