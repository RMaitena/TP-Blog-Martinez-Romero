import React from "react";

function Navegador(props) {
return (
<div>
  <nav className="dos">
   <ul>
    <li><a href="/inicio">Home</a></li>
    <li><a href="/admin">Admin</a></li>
    <li><button className="btnsucces">New Post!!</button></li>
  </ul>
 </nav>
</div>
);
}
export default Navegador;
