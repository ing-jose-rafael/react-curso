import {useState} from 'react'

// recibe una function
export const AddCategories = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({target}) => {
    // console.log(target.value);
    setInputValue( target.value );
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    // console.log(inputValue);
    const value = inputValue.trim();
    if (value.length <= 1) return
    
    // setCategories(category => [inputValue,...category]);
    onNewCategory(value);
    setInputValue('');
  }
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder='Buscar Gits'
        value={inputValue}
        // onChange = {(event) => onInputChange(event)}
        onChange = { onInputChange }
      />
    </form>
  )
}
