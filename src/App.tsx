import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import CertificateOne from './Pages/Certificate/CertificateOne'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certone" element={<CertificateOne />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
