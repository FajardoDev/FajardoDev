export const getGifs = async (categoria) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=80LDV8eMdmII2ENt1Q37vZhF27MxsD86&q=${categoria}&limit=12`;

	const resp = await fetch(url);

	const { data } = await resp.json();
	// console.log(data);

	//! Desestructurar solo lo que me intereza de la Api
	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
	// console.log(gifs);
	return gifs;
};
