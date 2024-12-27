import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Assets/css/BaseTheme.css'
import './Assets/css/App.css'
import './Assets/css/Common.css'
import './Assets/css/Style.css'
import './Assets/css/responsive.css'

import Header from './Pages/Header'
import AboutMe from './Pages/AboutMe'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'

function App() {

  return (
    <>
      <div className="container pt-35 py-xs-20">
        <Header />

        <AboutMe />

        <Services />

        <Projects />

        <Testimonials />

        <Contact />
      </div>

      <div className='container-fluid p-0'>
        <Footer />
      </div>

    </>
  )
}

export default App
