import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//! Crear un custom Hooks Personalizado un hooks es una función q regresa algo
export const useFetchGifs = (categoria) => {
	// console.log(categoria);
	//! Desestructurar cada propiedad (3)
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getGifs(categoria);
		setImages(newImages);
		setIsLoading(false);
	};

	//! Todo el objeto de las imagenes Ir al archivo getGifs (2)
	useEffect(() => {
		getImages();
	}, []);

	return {
		images,
		isLoading,
	};
};
