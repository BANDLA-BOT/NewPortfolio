import "./App.css"
import Hero from './components/Hero/Hero'
import Scroll from './components/scroller/Scroll'
import Work from './components/work/Work'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Numbers from './components/numbers/Numbers'
import Education from './components/education/Experience'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Scroll/>
      <Work/>
      <Services/>
      <Numbers/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default App