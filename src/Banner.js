import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

const Banner=()=>{
     const [movie, setMovie]= useState([]);

     useEffect (()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflix0riginals);
            setMovie(
                request.data.results
            [Math.floor(Math.random() * request.data.results.length-1)]
            );
            return request;
        } 
        fetchData()

     },[] );

     console.log(movie)


    return(
        <header>
            {/* {Backround image} */}
            {/* {Title} */}
            {/* {div 2 button} */}
            {/* {Decriptioons} */}
        </header>

    )

};


export default Banner;