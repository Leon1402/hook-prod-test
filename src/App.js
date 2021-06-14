import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Cart } from './Cart/Cart';
import { Header } from './Header/Header';
import { Product } from './Product/Product';
import { changeFavorite, changeCartCount, changeFocus } from './redux/store';


function App(props) {
  return (
    <div className='App'>
      <Header onFocus={props.onFocus}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Product
              items={props.items}
              changeFavorite={props.changeFavorite}
              changeCartCount={props.changeCartCount} />
          </Route>
          <Route path="/cart">
            <Cart items={props.items}
              changeFavorite={props.changeFavorite}
              changeCartCount={props.changeCartCount}
              changeFocus={props.changeFocus}
              onFocus={props.onFocus}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
  onFocus: state.onFocus
})


export default connect(mapStateToProps, { changeFavorite, changeCartCount, changeFocus })(App);
