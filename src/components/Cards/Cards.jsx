import { IoMdCheckmark } from "react-icons/io";
import { toast } from 'react-toastify';

export const Cards = ({AllCards ,cart , setcart , setselectType , selectType}) => {
  const CardData = AllCards

  const AddToCart = (card) => {
    const filtered = cart.filter(item => item.id !== card.id)
    setcart([...filtered , card])
  }

  const notify = () => toast.success("Added to cart");

  return (
    <> 
    <div className='text-center space-y-2.5 mt-4 px-4'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>Premium Digital Tools</h1>

      <p className='text-[14px] text-[#627382]'>
        Choose from our curated collection of premium digital products designed <br className="hidden sm:block"/>
        to boost your productivity and creativity.
      </p>

      <div className='flex text-center justify-around px-2 py-2 m-auto shadow-2xl rounded-2xl w-[200px] h-[58px] border-white border-1'>
        <button 
          onClick={() => setselectType("products")}
          className={`${selectType === "products" ? "bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white" : "text-gray-700"} px-3 py-1 rounded-xl font-semibold`}>
          Products
        </button>
        <button 
          onClick={() => setselectType("cart")} 
          className={`${selectType === "cart" ? "bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white" : "text-gray-700"} px-3 py-1 rounded-xl font-semibold`}>
          Cart({cart.length})
        </button>  
      </div>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2.5 px-4 place-items-center">
      {
        CardData.map((card) => {
          return(
            <div key={card.id} className='h-[440px] w-full max-w-[340px] rounded-3xl relative shadow-2xl hover:scale-105'>

              <div className='flex items-center'>
                <h4 className={`px-1 py-1 absolute top-2 right-2 mt-2.5 rounded-[11px] 
                ${card.tag === "Best Seller" ? "bg-[#FEF3C6] text-yellow-800" :
                card.tag === "New" ? "bg-green-200 text-green-800" :
                card.tag === "Popular" ? "bg-purple-200 text-purple-800" :""}`}>
                  {card.tag}
                </h4>
              </div>

              <div className='mt-[55px] space-y-3 pl-4'>
                <img src={card.image}></img>
                <h2 className='font-bold text-[20px]'>{card.title}</h2>
                <p className='text-[14px] text-[#627382] w-[300px]'>{card.description}</p>
                <h1><span className='font-bold text-[25px]'>${card.price}</span>/{card.billing}</h1>

                <ul className='Checkmark flex flex-col space-y-2 text-sm text-gray-600 mb-8'>
                  <li><IoMdCheckmark className='text-green-400' /> {card.features[0]}</li>
                  <li><IoMdCheckmark className='text-green-400' /> {card.features[1]}</li>
                  <li><IoMdCheckmark className='text-green-400' /> {card.features[2]}</li>
                </ul>
                <div>
                  <button type="button"
                    onClick={() => { AddToCart(card); notify(); }}
                    className='px-30 py-2 rounded-xl bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white font-semibold'>
                    Buy Now
                  </button> 
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}