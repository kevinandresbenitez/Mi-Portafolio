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

                </div>

                <div className='modal_info'>
                    {props.children.id}
                </div>


            </div>
        </div>

    )
}