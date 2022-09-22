import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import { CartPlusFill } from 'react-bootstrap-icons'
import '../styles/shoppingItem.scss'

const ShoppingItem = ({ id, image, title, description, price, qty }) => {
  const dispatch = useDispatch()
  return (
    <div className='shopping-item'>

      <img src={image} alt={title} />
      <div className="title-and-desc">
        <h4 className='title'>{title}</h4>
        <h5 className='description'>{description}</h5>
      </div>

      <div className='add-to-cart'>
      <h4 className="price">{`$${price}`}</h4>
        <button className="add-to-cart-btn" onClick={() => dispatch(addToCart({id,title,image,price,qty}))}>
          Add to cart <CartPlusFill />
        </button>
      </div>
    </div>

  )
}
export default ShoppingItem