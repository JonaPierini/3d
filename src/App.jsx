import { Routes, Route } from "react-router-dom";
import { ProductsList } from "./components/Products/ProductsList";
import { Footer } from "./components/Footer/Footer";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { NavBar } from "./components/NavBar/NavBar";
import { ViewMoreProducts } from "./components/ViewMoreProducts/ViewMoreProducts";
import { ProductsDetail } from "./components/ProductsDetail/ProductsDetail";
import { Auth } from "./components/Auth/Auth";
import { Merchandaising } from "./components/Merchandaising/Merchandaising";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ComputersCanvas } from "./components/Computer/Computer";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<ProductsList />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/product" element={<ViewMoreProducts />} />
        <Route path="/detail" element={<ProductsDetail />} />
        <Route path="/merchandaising" element={<Merchandaising />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/3d" element={<ComputersCanvas />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
