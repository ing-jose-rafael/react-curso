import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
   
    const [ counter, setCounter ] = useState( value );

    const handleAdd = ( event ) => {
        setCounter( counter + 1 ); // opt 1
        // setCounter( (c) => c + 100 ); // opt 2
    }
    
    const handleReset = () => setCounter(  value ); // opt 2

    const handleSubstract = () => setCounter( (c) => c - 1 )
    
    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}