import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import CertificateOne from './Pages/Certificate/CertificateOne'
import Biocoding from './Pages/Certificate/Biocoding'




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certone" element={<CertificateOne />} />
          <Route path="/biocoding" element={<Biocoding />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
