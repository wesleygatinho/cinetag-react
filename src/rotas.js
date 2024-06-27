import Favoritos from "./Pages/Favoritos/index.js";
import Inicio from "./Pages/Inicio/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./Pages/Player/index.js";
import NaoEncontrada from "./Pages/NaoEncontrada/index.js";
import PaginaBase from "./Pages/PaginaBase/index.js";


const AppRotas = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRotas;