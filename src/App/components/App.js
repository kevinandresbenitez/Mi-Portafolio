import React from 'react';
import Proyects from './Proyects';
import Header from './Header';

import 'animate.css';
import 'normalize.css';
import '../less/main.less';



export default function App (){

    return(

        <div>
            <Header/>
            <Proyects />
        </div>
    )


}