import { useDispatch } from 'react-redux'
import { PlusCircleFill, DashCircleFill, TrashFill } from 'react-bootstrap-icons'
import { increment, decrement, remove } from '../features/cartSlice'
import '../styles/cartItem.scss'

const CartItem = ({ id, image, title, description, price, qty=0 }) => {
  const dispatch = useDispatch()
  return (

    <div className="item">
      <img src={image} alt={title} />
      <div className="title-and-desc">
        <h4 className='title'>{title}</h4>
        <h5 className='description'>{description}</h5>
      </div>
      <h4 className="price">{`$${price}`}</h4>
      <button className="delete" onClick={() => {
        dispatch(remove(id))
      }}>
        <TrashFill />
      </button>
      <div className='qty-container'>
        <button className="add-qty" onClick={() => dispatch(increment(id))}>
          <PlusCircleFill />
        </button>
        <h4>{qty}</h4>
        <button className="sub-qty" onClick={() => dispatch(decrement(id))}>
          <DashCircleFill />
        </button>
      </div>
    </div>
  )
}
export default CartItem