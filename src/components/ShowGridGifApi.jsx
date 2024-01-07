//! Este Componente se encarga de crear el grid para mostrar contenido (3)

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const ShowGridGifApi = ({ categoria }) => {
	//! custom Hooks Personalizado.
	const { images, isLoading } = useFetchGifs(categoria);

	// console.log({ isLoading });

	return (
		<>
			<h3 className="my-8">{categoria}</h3>

			{isLoading && (
				<div className="sk-fading-circle">
					<div className="sk-circle1 sk-circle"></div>
					<div className="sk-circle2 sk-circle"></div>
					<div className="sk-circle3 sk-circle"></div>
					<div className="sk-circle4 sk-circle"></div>
					<div className="sk-circle5 sk-circle"></div>
					<div className="sk-circle6 sk-circle"></div>
					<div className="sk-circle7 sk-circle"></div>
					<div className="sk-circle8 sk-circle"></div>
					<div className="sk-circle9 sk-circle"></div>
					<div className="sk-circle10 sk-circle"></div>
					<div className="sk-circle11 sk-circle"></div>
					<div className="sk-circle12 sk-circle"></div>
				</div>
			)}

			<div className="grid grid-cols-3 gap-5">
				{images.map((image) => (
					// <ul key={id}> <li> {title} </li> </ul>
					<GifGridItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
