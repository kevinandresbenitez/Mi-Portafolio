import React from 'react';
import ImgUser from '../../img/Img.png';

export default function Proyects (props){


    return(
        <article  className='article'>

            <div className='article_header_info'>
                <strong>PROYECTOS</strong>
                <div></div>
            </div>
            
            <h2>Mis Proyectos</h2>


            <div className='article_proyects'>

                <div className='cont_text'>
                    <p>A short blurb about a relevant hobby to design, career, or something work related that transferred to your job.</p>
                    <h5>Result</h5>
                    <p>What were some interesting take aways from your project?</p>
                </div>

                <div className='cont_img'>

                    {props.children.map((obj,key)=>{
                        return(
                            <button key={key} onClick={()=>{props.Details('first_proyects',obj.id)}}>
                                <img src={ImgUser} />
                            </button>
                        )
                    })}
  
                </div>

            </div>






        </article>
    )


}