import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './layouts/header';
import ProductsList from './pages/products list';
import ProductsInBasget from './pages/products in basget';
import ProductsListDetail from './pages/products list/detail';
function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
    <Route path="/productslist" element={<ProductsList />} />
    <Route path="/productsinbasget" element={<ProductsInBasget/>}/>
    
    <Route path="/productslist/:id" element={< ProductsListDetail/>} />
    </Routes>
    </div>
  );
}

export default App;
