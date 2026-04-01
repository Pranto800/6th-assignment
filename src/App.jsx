import { Suspense, useState } from 'react'
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchCard = async () => {
  const res = await fetch("/data.json");
  const data = await res.json()
  return data ;
}

function App() {
  const AllCards = fetchCard()
  const  [ cart , setcart] = useState([])
  const [selectType , setselectType] = useState("products")

  return (
    <>
    <div >
     <Navbar  
       cart={cart} 
       setselectType={setselectType} 
     />
      <ToastContainer />
     <Hero></Hero>
     <Rating/>

     {
      selectType ==="products" && (
        <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
          <Cards 
            AllCards={AllCards} 
            setselectType={setselectType} 
            selectType={selectType}
            cart={cart} 
            setcart={setcart}
          />
        </Suspense>
      )
     }

     {
      selectType ==="cart" && (
       <Cart cart={cart} setcart={setcart} setselectType={setselectType} />
      )
     }

     <MidSection/>
     <Pricing/>
     <Geadient/>
     <Footer/>
    </div>
    </>
  )
}

export default App