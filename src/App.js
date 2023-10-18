import './index.css';
import Encabezado from "./Encabezado";
import Menu from "./Menu";
import Post from './Post';
import Navegador from './Navegador';

export default function App() {
return (
<div className="App">
<Navegador/>
<Encabezado/>
<div className="posteos">
<Post titulo='El sapito pepe' descripcion='Salta y salta sin parar'/>
<Post titulo='Gatitos poderoso' descripcion='Tienen capas y van por la ciudad rescatando gatitos de los arboles'/>
<Post/>
<Post/>
</div>
<Menu/>
</div>
);
}
