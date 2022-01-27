import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
    //input
    const [inputvalue, setInputvalue] = useState('');
    //detectar lo que pasa en el input
    const handlerInputChange = (e) => {
        //identificar el evento con target.value
        //renderizar el input
        setInputvalue( e.target.value );
    }
    //agregar una categoria al presionar ENTER
    const handlerCategoryAdd = (e) => {
        //evitar el refresco de la pagina
        e.preventDefault();
        //verificar que no este vacio el input o que tenga menos de 2 caracteres
        if ( inputvalue.trim().length > 2 ) {
            //añadimos la categoria
            setCategories( cats => [ inputvalue, ...cats ] );
            //limpiamos el input
            setInputvalue('');
        }
    }
    
    return (
        <form onSubmit={ handlerCategoryAdd }>
            <input 
                type='text'
                value={ inputvalue }
                onChange={ handlerInputChange }
            />
        </form>
    );
};
