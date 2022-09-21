import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { XCircleFill } from 'react-bootstrap-icons'
import CartItem from '../components/CartItem'
import { clearCart, getCartTotal } from '../features/cartSlice'

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  }, [items])
  if (items.length === 0) {
    return (
      <>
        <div>Your shopping cart is empty!</div>
      </>)
  }
  return (
    <>
      <div className="cart-container">
        <h2 className="cart-title">Your cart</h2>
        {items.map((item: any) => {
          return <CartItem key={item.id} {...item} />
        })}

        <div className="total-price"><h4>{totalAmount}</h4></div>
        <button className="clear-cart" onClick={() => dispatch(clearCart())}><XCircleFill /></button>
      </div>
    </>
  )
}
export default CartContainer