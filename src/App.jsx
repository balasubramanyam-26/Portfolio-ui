import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Assets/css/BaseTheme.css'
import './Assets/css/App.css'
import './Assets/css/Common.css'
import './Assets/css/Style.css'
import './Assets/css/Style.css'

import Header from './Pages/Header'
import AboutMe from './Pages/AboutMe'
import Services from './Pages/Services'

function App() {

  return (
    <>
      <div className="container" style={{ marginTop: '35px' }}>
        <Header />

        <AboutMe />

        <Services />
      </div>
    </>
  )
}

export default App
