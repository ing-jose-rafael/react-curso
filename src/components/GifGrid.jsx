import GitItem from "./GitItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        // if corto
        isLoading &&  <h2>Cargando...</h2>
      }
     
      <div className="card-grid">
        {
          images.map((image) => (
            <GitItem key={image.id} {...image}/>
            ))
        }
      </div>
    </>
  )
}
