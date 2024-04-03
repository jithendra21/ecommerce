import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Product from './component/Product'
import SpecificProduct from './component/SpecificProduct';
import Signup from './component/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/product' Component={Product} />
        <Route exact path='/product/:id' Component={SpecificProduct} />
        <Route exact path='/signup' Component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
