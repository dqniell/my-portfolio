import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import V1App from "./v1/App"
import V2App from "./v2/App"

// To make v2 the main site: swap the "/" and "/v2" elements below,
// and change the "/v1" route to point at V1App.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V1App />} />
        <Route path="/v2/*" element={<V2App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
