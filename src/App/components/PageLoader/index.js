import React from 'react';
import { useState ,useEffect} from 'react';


export function PageLoader(){


    const [show,Unshow] = useState(true);

    useEffect(()=>{        
        window.addEventListener('load',()=>{
            Unshow(false)
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