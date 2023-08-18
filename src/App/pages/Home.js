import React from 'react';

import Header from '../components/Header';
import {PageLoader} from '../components/PageLoader';
import Proyects from '../components/Proyects/index';
import Contact from '../components/Contact';
import ProgresBar from '../components/ProgresBar';
import Footer from '../components/Footer';


import 'animate.css';
import 'normalize.css';
import '../less/main.less';

export default function Home (){


    return(

        <div>
            <Header/>
            <PageLoader />
            <Proyects/>
            <Contact />
            <ProgresBar />
            <Footer />
        </div>
    )


}
