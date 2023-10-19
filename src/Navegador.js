import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';

const NewPost = ({ NewPost }) =>{
  return <button className="btnsucces" onClick ={() => NewPost++}> {NewPost} New Post!!</button>
 };

function Navegador() {
return (
<BrowserRouter>
  <nav className="dos">
   <ul>
    <li className="boton"><Link to="/Home" >Home</Link></li>
    <li className="boton"><Link to="/admin">Admin</Link></li>
    <NewPost />
    </ul>
 </nav>
</BrowserRouter>
);
}
export default Navegador; 