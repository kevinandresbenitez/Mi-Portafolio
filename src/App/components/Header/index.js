import React from 'react';
import {useState,useEffect} from 'react';

import UserImg from '../../img/Img.png';


export default function Header(){

    return(
        <header className='header'>
            {<Navbar />}



                <div className='header_info'>

                    <div className='content_info'>
                        <h1>Titulodas dasdasdasd</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button>Dowload CV</button>
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
                        <a href='#'>Inicio</a>
                        <a href='#'>Proyectos</a>
                        <a href='#'>Contacto</a>
                    </div>

            </nav>
        )


}