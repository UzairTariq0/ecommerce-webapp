import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import DetailsPage from './Components/DetailsPage'
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/details/:id' element={<DetailsPage />} />
          </Routes>
          <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
