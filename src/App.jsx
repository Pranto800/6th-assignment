import { useState, useEffect } from 'react'
import './App.css'
import { Cards } from './components/Cards/Cards'
import { Footer } from './components/Footer/Footer'
import { Geadient } from './components/Geadient/Geadient'
import { Hero } from './components/Hero/Hero'
import { MidSection } from './components/MidSection/MidSection'
import { Navbar } from './components/Navbar/Navbar'
import { Pricing } from './components/Pricing/Pricing'
import { Rating } from './components/Rating/Rating'
import { Cart } from './components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
</style>

function App() {

  const [AllCards, setAllCards] = useState([])
  const [cart, setcart] = useState([])
  const [selectType, setselectType] = useState("products")

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setAllCards(data))
  }, [])

  return (
    <>
      <div className='pages'>
        <Navbar cart={cart} setselectType={setselectType} />

        <ToastContainer />

        <Hero />
        <Rating />

        {
          selectType === "products" && (
            <Cards 
              AllCards={AllCards}
              setselectType={setselectType}
              selectType={selectType}
              cart={cart}
              setcart={setcart}
            />
          )
        }

        {
          selectType === "cart" && (
            <Cart 
              cart={cart} 
              setcart={setcart} 
              setselectType={setselectType} 
            />
          )
        }

        <MidSection />
        <Pricing />
        <Geadient />
        <Footer />
      </div>
    </>
  )
}

export default App