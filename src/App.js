import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Product from './components/Product';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/product/:productId" element={<Product/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;

