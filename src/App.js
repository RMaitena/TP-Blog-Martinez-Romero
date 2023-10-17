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
<Post titulo='SOY UN TITULO'/>
<Post/>
<Post/>
<Post/>
</div>
<Menu/>
</div>
);
}
