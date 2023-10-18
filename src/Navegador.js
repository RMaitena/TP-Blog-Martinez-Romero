import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';

function Navegador() {
return (
<BrowserRouter>
  <nav className="dos">
   <ul>
    <li className="boton"><Link to="/inicio" >Home</Link></li>
    <li className="boton"><Link to="/admin">Admin</Link></li>
    </ul>
 </nav>
</BrowserRouter>
);
}
export default Navegador;
