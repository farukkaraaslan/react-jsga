import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CarList from "./pages/CarList/CarList";
import Rental from "./pages/Rental/Rental";
import { Route, Routes } from "react-router-dom";
import AddCar from "./pages/AddCar/AddCar";

// JSX - JavaScript XML
// HTML & JS
// class => className

// Frontend Framework => SPA (Single Page Application)

// SSR => Server Side Rendering - Next.js - SEO gelişmiş
// CSR => Client Side Rendering - Default - SEO zayıf

function App() {
  // Component
  // React kodları
  // let, var, const
  // let count = 10; // Veritabanı bğalantısı - API
  const [count, setCount] = useState(0);
  // use effect sayfa acıldıgında calışır yada useState  değişkenlerini izlemek için kullanılır. genelde ai istekleri use effect ile atılır.
  useEffect(() => {
    console.log(count);
  }, [count]);
  const increase = () => {
    setCount(count + 1);
  };
  const decrase = () => {
    setCount(count - 1);
  };
  // use State// react  hooks
  // two way data binding hem html hem js de değişiklik etkilenir
  // one way data binding hmtl de yapılan değişiklik jsi etkiler
  // two way data binding istiyorsak değişkenler useState ile tanımlanmalıdır.

  // JSX de iteration yaparken map kullanılır
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/car-list" element={<CarList />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/add-car" element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
