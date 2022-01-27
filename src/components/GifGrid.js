import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    //gifs/imagenes
    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );
    console.log( loading );
    //useEffect
    /*useEffect( () => {
        //llamamos a getGifs
        getGifs( category )
            .then( cats => setImages( cats ) )
    }, [ category ]);*/
    
    return (
        <>
            <h1 className='animate__animated animate__fadeInUp'>{ category }</h1>
            { loading && <p className='animate__animated animate__flash'>Cargando</p> }
            <ol>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </ol>
        </>
    );
};
