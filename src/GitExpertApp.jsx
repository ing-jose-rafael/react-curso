 import {useState} from 'react'
import { AddCategories,GifGrid } from './components';

export const GitExpertApp = () => {
  const [ categories, setCategories ] = useState([ 'Dragon Boll']);
  // console.log(categories);
  // const onAddCategory = () => setCategories((c) => c.concat('Valorant'));
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  }
  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategories 
        // setCategories={setCategories}
        onNewCategory = {value => onAddCategory(value)}
      />
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {/* Listado de Git, la key la debe tener el elemento que esta iterando */}
      { 
        categories.map( category => (
          <GifGrid key={category} category={ category }/>
        ))
      }
    </>
  )
}
