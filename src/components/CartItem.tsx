import { useDispatch } from 'react-redux'
import { PlusCircleFill, DashCircleFill, TrashFill } from 'react-bootstrap-icons'
import { decrease, increase, remove } from '../features/cartSlice'
import '../styles/cartItem.scss'

const CartItem = ({ id, image, title, description, price, amount }: any) => {
  const dispatch = useDispatch()
  return (
    <div className='item-container'>
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
        <div className='amount-container'>
          <button className="add-amount" onClick={() => dispatch(increase(id))}>
            <PlusCircleFill />
          </button>
          <h4>{amount}</h4>
          <button className="sub-amount" onClick={() => dispatch(decrease(id))}>
            <DashCircleFill />
          </button>
        </div>
      </div>
    </div>
  )
}
export default CartItem