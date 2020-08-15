import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { Header } from './components';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Cart from './pages/Cart';
import { setPizzas } from './redux/actions/pizzas'
class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {

   return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
