import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { XCircleFill, CartFill,ArrowLeftCircleFill } from 'react-bootstrap-icons'
import CartItem from '../components/CartItem'
import { clearCart, getCartTotal } from '../features/cartSlice'
import '../styles/cartContainer.scss'

const CartContainer = () => {
  const { totalCount } = useSelector((state: any) => state.cart)
  const { items, totalAmount } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  }, [items])
  if (items.length === 0) {
    return (
      <>
        <div className='container'>Your shopping cart is empty!</div>
      </>)
  }
  return (
    <>
      <div className="cart-container">
        <div className='title-bar'>
          <Link to='/'><h3 className="back"><ArrowLeftCircleFill/></h3></Link>
          <h2 className="cart-title"> Your cart</h2>
          <h3><CartFill />{`( ${totalCount} )`}</h3>
        </div>
        {items.map((item: any) => {
          return <CartItem key={item.id} {...item} />
        })}

        <footer>
          <div className="total-price"><h4>{`Total Amount: $${totalAmount}`}</h4></div>
          <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear cart &nbsp;<XCircleFill /></button>
        </footer>
      </div>
    </>
  )
}
export default CartContainer