import React from 'react';

function Post(props) {
return (
<div className='texto'>
<h3>{props.titulo}</h3>
<p>{props.descipcion} </p>
<button className='coment'>Comentar</button>
<h6 className='ver'>Ver comentarios</h6>
</div>
);
}
export default Post;
