import MainProyects from "./Main_proyects";
import OthersProyects from "./Others_proyects";
import Modal from '../../components/Modal'
import MisProyectos from '../../../Proyectos';
import {useState} from 'react';
import React from 'react'

export default function Proyects(){

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
        <div id='proyects'>
            {Showdetails && details ? <Modal offDetails={offDetails}>{details}</Modal>:false}
            <MainProyects Details={Details}>{allProyect.first_proyects}</MainProyects>
            <OthersProyects Details={Details} >{allProyect.Others_proyects}</OthersProyects>
        </div>
    )
}