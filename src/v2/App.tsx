import { Routes, Route, Navigate } from "react-router-dom"
import "./v2.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
import Club from "./pages/Club"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Achievements from "./pages/Achievements"
import Learning from "./pages/Learning"

// Routes are relative, so this whole app can be mounted at /v2 or / without changes
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="experience" element={<Experience />} />
      <Route path="education" element={<Education />} />
      <Route path="skills" element={<Skills />} />
      <Route path="club" element={<Club />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="learning" element={<Learning />} />
      <Route path="*" element={<Navigate to=".." replace />} />
    </Routes>
  )
}

export default App
