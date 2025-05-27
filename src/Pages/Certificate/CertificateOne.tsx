import { Navigate, useLocation } from "react-router-dom"



const CertificateOne = () => {
    const location = useLocation()
    if (!location.state?.fromHome) {
        return <Navigate to="/" replace />
    }

    
  return (
    <div>CertificateOne</div>
  )
}

export default CertificateOne