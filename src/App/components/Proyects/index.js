import React from 'react';




export default function Proyects (props){


    return(
        <article  className='article'>

            <div className='article_header_info'>
                <strong>PROYECTOS</strong>
                <div></div>
            </div>

            <h2 >Mis Proyectos</h2>
            <div className='item'></div>

            <div className='article_proyects' >

                <div className='cont_text'>
                    <p>Estos son algunos de los proyectos mas interesantes que tengo , desde una aplicacion de busqueda de lugares con react hasta una tienda con PHP</p>
                    <h5>Tambien</h5>
                    <p>Puedes ver varios proyectos en mi repositorio GithUb ubicado en el apartado de contactos :)</p>
                </div>

                <div className='cont_img'>

                    {props.children.map((obj,key)=>{
                        return(
                            <button className='item'  key={key} onClick={()=>{props.Details('first_proyects',obj.id)}}>
                                <img src={obj.img} draggable='false' />
                            </button>
                        )
                    })}

                </div>

            </div>

        </article>

    )


}
