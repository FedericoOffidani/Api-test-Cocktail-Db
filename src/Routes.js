import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './views/Home/Home'
import Cocktail from "./views/Cocktail/Cocktail";


export default function Rout(){

return <Router>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                <Route path="/Cocktail" element={<Cocktail/>} >Cocktail</Route>
                <Route path="*" element={<h1>Pagina non trovata</h1>}></Route>
            </Routes>

        </Router>

}