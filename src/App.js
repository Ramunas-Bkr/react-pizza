import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

import { Header } from './components';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Cart from './pages/Cart';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {

  const dispatch = useDispatch();
  const {items} = useSelector(({ pizzas, filter }) => {
    return {
      items: pizzas.items,
      sortBy: filter.sortBy
    }
  });

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
