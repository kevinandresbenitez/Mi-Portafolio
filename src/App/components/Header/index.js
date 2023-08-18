import React from 'react';
import {useState,useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import UserImg from '../../img/User.png';
import CV from '../../../BenitezKevin.pdf';

export default function Header(){

    return(
        <header className='header' id='index'>
            {<Navbar />}



                <div className='header_info' >

                    <div className='content_info'>
                        <h1>Mi Portafolio</h1>
                        <p>
                            Hola , mi nombre es Kevin ,tengo 20 años y soy de Entre Rios. Empecé la Licenciatura en sistemas en 2022 , aprendi desarrollo web previamente y me certifique tanto en el back-end como en el front-end , desarrollo aplicaciones y aprendo por mi cuenta lo que me interesa o me da curiosidad aprender.
                        </p>
                        <a dowload="true" href={CV} target='_blank' >Descargar CV</a>
                    </div>

                    <div className='content_img'>
                        <img src={UserImg}  ></img>
                    </div>

                </div>






        </header>
    )


}

function Navbar(){

    const [count, setCount] = useState(0);

        var navbar = (e)=>{
            setCount(e.checked);
        }

        useEffect(()=>{
            var Nav = document.getElementById('nav_content');

            if(count){
                Nav.classList.add('Nav_active');
            }else{
                Nav.classList.remove('Nav_active');
            }


        })

        const buttonOff =()=>{
            document.getElementById('boton').checked = false
        }


        return(
            <nav className='navbar'>

                <div className='responsive_content'>
                    <div className="nav_buton" >
                        <label className="hamburger_buton">
                            <input type="checkbox" id='boton' onClick={(e)=>{navbar(e.target)}} />
                            <span >
                                <span ></span>
                                <span ></span>
                                <span ></span>
                            </span>
                        </label>
                    </div>

                    <strong>Benitez Kevin</strong>

                </div>




                    <div className='content' id='nav_content'>
                        <Link to='index'  activeClass="active" smooth={true} duration={500} spy={true} name='Inicio'>Inicio</Link>
                        <Link to='proyects' activeClass="active" smooth={true} duration={500} spy={true}>Proyectos</Link>
                        <Link to='contact' activeClass="active" smooth={true} duration={500} spy={true}>Contacto</Link>
                    </div>


                {count?  <div onClick={(e)=>{navbar(false);buttonOff()}} className='opacity'></div> :false}


            </nav>
        )


}
