import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import Footer from "./components/Footer";
// import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";


function App() { // Llamar a cada componente para ver como se van renderizando
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      {/* <Destacado /> */}
      <PromoApp />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
