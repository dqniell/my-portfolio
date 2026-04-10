import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="blog">
          <Blog />
        </section> */}
      </div>
    </>
  )
}

export default App
