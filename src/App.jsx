import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Markets from './pages/Markets'
import Analysis from './pages/Analysis'
import EconomicCalendar from './pages/EconomicCalendar'
import Community from './pages/Community'
import Education from './pages/Education'
import Tools from './pages/Tools'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/calendar" element={<EconomicCalendar />} />
          <Route path="/community" element={<Community />} />
          <Route path="/education" element={<Education />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

