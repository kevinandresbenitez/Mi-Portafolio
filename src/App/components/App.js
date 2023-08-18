import React from 'react';
import { useState} from 'react';

import Header from './Header';
import {PageLoader} from './PageLoader';
import Modal from './Modal'
import Proyects from './Proyects';
import Others_proyects from './Proyects/Others_proyects.js';
import Contact from './Contact';
import ProgresBar from './ProgresBar';
import Footer from './Footer';
import MisProyectos from '../../Proyectos';


import 'animate.css';
import 'normalize.css';
import '../less/main.less';

export default function App (){

    const[Showdetails,setShowDetails] = useState(false);
    const[details,setDetails] = useState(false);
    const[Typedetails,setTypedetails] = useState();


    const allProyect = MisProyectos;

    const offDetails=()=>{
        setShowDetails(false);
    }

    const Details =(typeProyect,id)=>{
        let type = (`allProyect.${typeProyect}`);
        type = eval(type);

        var detailsProyects = type.filter((obj,key)=>{
            if(obj.id == id){
                return (obj);
            }
        });

        if( typeProyect != Typedetails || (typeProyect == Typedetails && detailsProyects[0].id != details.id )  ){
            setDetails(detailsProyects[0]);
        }
        setShowDetails(true);
        setTypedetails(typeProyect);
    }



    return(

        <div>
            {Showdetails && details ? <Modal offDetails={offDetails}>{details}</Modal>:false}

            <Header/>
            <PageLoader />

            <div id='proyects'>
                <Proyects Details={Details}>{allProyect.first_proyects}</Proyects>
                <Others_proyects Details={Details} >{allProyect.Others_proyects}</Others_proyects>
            </div>

            <Contact />
            <ProgresBar />
            <Footer />
        </div>
    )


}
