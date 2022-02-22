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



import 'animate.css';
import 'normalize.css';
import '../less/main.less';

export default function App (){

    const[Showdetails,setShowDetails] = useState(false);
    const[details,setDetails] = useState(false);
    const[Typedetails,setTypedetails] = useState();


    const allProyect = {

        first_proyects : [
            {
                id : 1,
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/Pelicula.png',
                titulo:'Peliculas',
                descripcion:'Aplicacion de peliculas creada con react y una Api ,para buscar informacion sobre peliculas',
                github:'https://github.com/kevinandresbenitez/Pelis_react',
                pagina:'https://kevinandresbenitez.github.io/Pelis_react/'
            },
            {
                id : 2,
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/Mapa.png',
                titulo:'Mapa',
                descripcion:'Aplicacion de busqueda de lugares con react y una api de google maps ,google places y google routes, cuenta con un buscador para localizar lugares-establecimientos, calcular la duracion de el viaje, buscar lugares cercanos, y obtener informacion de un sitio',
                github:'https://github.com/kevinandresbenitez/React_proyect_maps',
                pagina:'https://kevinandresbenitez.github.io/React_proyect_maps/'
            },
            {
                id : 3,
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/Tienda.jpg',
                titulo:'Tienda de Camisetas',
                descripcion:'Tienda de camisetas creada con PHP,Bootstrap , con programacion orientada a Modelo Vista Controlador,el usuario administrador puede agregar productos ,gestionar categorias y pedidos,tiene un carrito para ir guardando los pedidos y hacerlos',
                github:'https://github.com/kevinandresbenitez/tiendaMVC',
            }
        ],

        Others_proyects : [
            {
                id : 1,
                titulo:'Tienda de Imagenes',
                descripcion:'Tienda de imagenes creado con Sails un framework de node para entornos MVC ,tambien use bootstrap para el maquetado',
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/TiendaFotos.png',
                github:'https://github.com/kevinandresbenitez/Proyecto-sails-tienda',
            },
            {
                id : 2,
                titulo:'Blog de Videojuegos',
                descripcion:'Blog de videojuegos creado con php sin seguir una metodologia ,es mi primer proyecto con php e hice el diseño en figma',
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/BlogPHP.png',
                pagina:'https://unpurchased-subprog.000webhostapp.com/index.php',
                github:'https://github.com/kevinandresbenitez/TuResena',


            },
            {
                id : 3,
                titulo:'Json Web Token',
                github:'https://github.com/kevinandresbenitez/JsonWebToken',
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/Json.png',
                descripcion:'Aplicacion de autenticacion creada con react , json web token ,crea una api y verifica la session , tanto en la cabezera de la peticion como en una cookie',
            },
            {
                id : 4,
                titulo:'Game circle',
                github:'https://github.com/kevinandresbenitez/Game-Circle',
                pagina:'https://kevinandresbenitez.github.io/Game-Circle/',
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/GameCircle.png',
                descripcion:'Un juego sencillo en el que se tienen que eliminar los bloques , me parecio muy interesante el sistema de coliciones con los bloques y paredes',
            },
            {
                id : 5,
                titulo:'Instagram',
                github:'https://github.com/kevinandresbenitez/Instagram',
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/Instagram.png',
                descripcion:'Apliacion similar a instagram, se pueden crear publicaciones,comentar,dar like , eliminar, bucar usuarios.Aplicacion creada con laravel , un framework de PHP para entornos MVC , Maquetado con boostrap y less para las trancisiones',
            },
            {
                id : 6,
                titulo:'Juego de Plataformas',
                github:'https://github.com/kevinandresbenitez/Plataform-Game',
                img:'https://kevinandresbenitez.github.io/Almacen_imagenes/Mi-Portafolio/GamePlataformer.png',
                descripcion:'Un juego de plataformas creado con js(Esta en desarrollo) , me parecia muy interesante crear un juego con matrizes , asi que lo hice , aunque solo es para aprender , me gustaria seguir aportando',
            },

        ]

    }

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
