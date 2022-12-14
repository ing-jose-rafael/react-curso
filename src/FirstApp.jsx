import PropTypes from 'prop-types'
// No renderiza lo que este fuera del componente
const newMessage = 'Jose';
/* se puede enviar todo tipo de variable menos el objeto, 
** se pueden enviar las propiedades, para enviar el objeto
** se tiene que convertir a string 
*/
const newObject = {
    messegae: "Hola Mundo!!!",
    title: "Titulo desde Object"
}

const getResult = ( a ,b ) => a + b;


export const FirstApp = ( {title} ) => {
    
    return (
        <>
            <h1>{ newMessage }</h1>
            <h2>{ title }</h2>
            {/* funciones que no sean async  */}
            <h3>Resultado de 2 + 4 = { getResult(2,4) }</h3>
            <p>Soy un subtitulo</p>
            <p>{ newObject.messegae }</p>
            <code>{ JSON.stringify( newObject ) }</code>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

// DefaultProps
FirstApp.defaultProps = {
    name: "Jose Rafael",
    title: "No hay titulo",
}


// export default FristApp;