import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Footer from './routes/footer/footer.component';
import Authentication from './routes/authentication/authentication.component';
import About from './routes/about/about.component';
import { Fragment } from 'react';
// import Checkout from './routes/checkout/checkout.component';


export const App = () => {
  return (
    <Fragment >    
    <Navigation />
    <Routes>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='about' element={<About />}  />
    </Routes>
    <Footer />

    </Fragment>

  );
}

export default App;
