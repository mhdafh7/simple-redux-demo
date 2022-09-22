import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles/App.scss';
import CartContainer from './components/CartContainer'
import ShoppingList from './components/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ShoppingList />} />
        <Route path='/cart' element={<CartContainer />} />
      </Routes>
    </div>
  );
}

export default App;
