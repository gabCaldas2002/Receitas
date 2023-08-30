import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "./pages/Home";
import Receita from "./pages/Receita";
import NovaReceita from "./pages/NovaReceita";
import Erro from "./pages/Erro";
import Header from "./components/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/receita/:id" element={<Receita />} />
                <Route path="/novareceita" element={<NovaReceita />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;