import React from 'react';
import {useEffect} from 'react';


export default function ProgresBar(props){

  useEffect(()=>{
    window.onscroll = function() {ScrollFunction()};
  })


  const ScrollFunction=()=>{
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("ProgresBar").style.width = scrolled + "%";
  }


  return(
        <div id='ProgresBar'></div>
  )

}
