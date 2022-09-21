import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/navbar.scss'
import { CartFill } from 'react-bootstrap-icons'
import items from '../stuffs'

const NavBar = () => {
  const { totalCount } = useSelector((state: any) => state.cart)
  return (
    <div className="nav-container">
      {/* <Link to="/">
        <h3>
          Shopping App
        </h3>
      </Link> */}
      Shopping App
      <button className="cart-btn">Cart ({`${totalCount}`}) <CartFill /></button>
    </div>
  )
}
export default NavBar