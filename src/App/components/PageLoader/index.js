import React from 'react';
import { useState ,useEffect} from 'react';


export function PageLoader(){


    const [show,Unshow] = useState(true);

    useEffect(()=>{        
        window.addEventListener('load',()=>{
            Unshow(false)            
                /*Por defecto el body esta en overflow hiddden para ocultar el scroll (Para el loader)y con esto lo habilito de nuevo */
             document.getElementsByTagName('body')[0].style.overflowY = 'auto';
        })
        
    },[])



    if (show){
        return(        
            <div className='PageLoaderContent'>
                <Loader />
            </div>        
        )
    }else{
        return(false)
    }


}

export function Loader(){

    return (
        <div className='dots-flow'></div>
    )




}