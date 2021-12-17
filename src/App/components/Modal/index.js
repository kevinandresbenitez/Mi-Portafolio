import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'


export default function Modal(props){

    const offDetails = ()=>{

        let modal = document.getElementById('modal');
        modal.classList.remove('animate__fadeInUp');
        modal.classList.add('animate__bounceOutDown');

        setTimeout(()=>{
            props.offDetails();
        },1000)
    }



    return(
                
        <div className='modal_content' >
            <div className='modal  animate__animated animate__bounceInDown' id='modal'>
                <button className='close_button' onClick={()=>{offDetails()}} draggable='false'>
                    <FontAwesomeIcon icon={faTimes} size='lg' />
                </button>

                <div className='modal_img'>
                    <img src={props.children.img}></img>
                </div>

                <div className='modal_info'>
                    <div>
                        <h3>{props.children.titulo}</h3>
                    </div>

                    <div>
                    {props.children.descripcion}
                    </div>

                    <div>
                        <h5>Repositorio Github : </h5>
                        <a target='_blank' href={props.children.github}> {props.children.github} </a>
                    </div>


                    {!props.children.pagina ? false :
                        <div>
                            <h5>Ver Pagina : </h5>
                            <a target='_blank' href={props.children.pagina}> {props.children.pagina} </a>
                        </div>
                    }

                </div>


            </div>
        </div>

    )
}
