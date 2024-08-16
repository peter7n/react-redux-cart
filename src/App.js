import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartShown = useSelector(state => state.showCart.isCartShown);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://react-redux-project-3db43-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
