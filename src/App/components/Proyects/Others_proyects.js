import React from 'react';

export default function OthersProyects (props){

    return(
        <article  className='article '>

            <div className='article_header_info'>
                <strong>OTROS PROYECTOS</strong>
                <div></div>
            </div>
            
            <h2>Otros Proyectos</h2>


            <div className='article_others_proyects'>

                <div className='cont_text'>
                        <p>A short blurb about a relevant hobby to design, career, or something work related that transferred to your job.</p>
                </div>

                <div className='content'>

                {props.children.map((obj,key)=>{
                        return(
                    <button key={key} className='item' onClick={()=>{props.Details('Others_proyects',obj.id)}}>
                        <div className='img_item'>
                            <img src={obj.img} draggable='false'></img>
                        </div>
                        <div className='info_item'>
                            <h5>{obj.titulo}</h5>
                            <p>{(obj.descripcion)}</p>
                        </div>
                    </button>
                        )
                })}

                </div>


                
            </div>

            <h3>Conocimientos</h3>

            <div  className='Conocimientos'>        

            <div>
                <h5>Front-End</h5>

                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                    <li>Less</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Jquery</li>
                </ul>

            </div>

            <div>
                <h5>Back-End</h5>
                <ul>
                    <li>Node (Express)</li>
                    <li>Sails</li>
                    <li>PHP</li>
                </ul>
            </div>

            <div>
                <h5>Bases-De-Datos</h5>
                <ul>
                    <li>MongoDB</li>
                    <li>Mysql</li>
                    <li>Postgres</li>                    
                </ul>

            </div>



            </div>

            



        </article>
    )


}