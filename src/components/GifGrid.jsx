import GitItem from "./GitItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFecthGifs(category);

  

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map((image) => (
          <GitItem key={image.id} {...image}/>
        ))}
      </ol>
    </>
  )
}
