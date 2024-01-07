export const GifGridItem = ({ title, url, id }) => {
	// console.log(`Titulo: ${title} Imagen: ${url} Id: ${id}`);

	return (
		<div className="bg-white rounded-md max-w-3xl pb-6 space-y-4">
			<img
				className="w-full h-[15rem] max-w-3xl rounded-t-md"
				src={url}
				alt={title}
			/>
			<p className="text-xl max-w-md text-orange-500 font-semibold text-center">
				{title}
			</p>
		</div>
	);
};
