import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // peticion API
  const getImages = async (category) => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false)
  }
  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading
  }
}
