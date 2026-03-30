
import './App.css'
import { Geadient } from './components/Geadient/Geadient'
import { Hero } from './components/Hero/Hero'
import { MidSection } from './components/MidSection/MidSection'
import { Navbar } from './components/Navbar/Navbar'
import { Pricing } from './components/Pricing/Pricing'
import { Rating } from './components/Rating/Rating'

function App() {
  

  return (
    <>
    <div className=" " >
     <Navbar/>
     <Hero></Hero>
     <Rating/>
     <Pricing/>
     <Geadient/>
    </div>

    
    </>
  )
}

export default App
