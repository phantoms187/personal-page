import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import About from './routes/about/about.component';
// import Checkout from './routes/checkout/checkout.component';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='about' element={<About />}  />
      </Route>
    </Routes>
  );
}

export default App;
