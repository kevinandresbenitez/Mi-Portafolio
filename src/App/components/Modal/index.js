import React from 'react';


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
            <div className='modal  animate__animated animate__fadeInUp' id='modal'>
                <button className='close_button' onClick={()=>{offDetails()}}>&#88;</button>

            </div>
            {props.children.id}
        </div>

    )
}