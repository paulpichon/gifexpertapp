//getGifs
export const getGifs = async( category ) => {

    //URL
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=P3VQKbACyRoX0m56Ee37cNJ6dcG0m0Hn`;
    //respuesta
    const resp = await fetch( url );
    //DATA
    const { data } = await resp.json();
    console.log( data );
    //CONSTRUIMOS NUESTRO PROPIO OBJETOS
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    //console.log( gifs );
    //setImages( gifs );
    return gifs;

}