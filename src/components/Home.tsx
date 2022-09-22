import NavBar from './NavBar'
import '../styles/home.scss'
import items from '../stuffs'
import ShoppingItem from './ShoppingItem'
// TODO : adding elements from shopping list

const ShoppingList = () => {
  return (
    <div className='home'>
      <NavBar />
      <h4 className='list-title'>Available items</h4>
      <div className='list'>
        {items.map((item: any) => {
          return <ShoppingItem key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
export default ShoppingList