import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/navbar.scss'
import { CartFill } from 'react-bootstrap-icons'
import { useEffect } from 'react'
import { totalCount } from '../app/Total'

const NavBar = () => {
  const cart = useSelector(state => state.cart)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCartTotal())
  // }, [items])
  return (
    <div className="nav-container">
      <h3>
        Shopping App
      </h3>
      <Link to='/cart' className="cart-btn"><button >Cart ({`${totalCount}`}) <CartFill /></button></Link>
    </div>
  )
}
export default NavBar