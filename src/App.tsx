import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/NavBar'
import CartContainer from './components/CartContainer'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ShoppingList />} />
        <Route path='/cart' element={<CartContainer />} />
      </Routes>
      <div className="container">
        <Navbar />
        <CartContainer />
      </div>
    </div>
  );
}

export default App;
