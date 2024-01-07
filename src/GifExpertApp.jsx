import { useState } from "react";
import { AddCategory, ShowGridGifApi, Error } from "./components";

export const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(["Valorant"]);
	const [error, setError] = useState(false);
	const [resultado, setResultado] = useState("");

	const onAddCategory = (newCategory) => {
		// if (categorias.includes(newCategory)) return;  no repite mismo name
		if (categorias.includes(newCategory)) {
			setError("Verifique que el nombre no exista");

			setTimeout(() => {
				setError(false);
			}, 4000);
			return;
		}

		setError(false);
		setCategorias([newCategory, ...categorias]); //add copy y Si escribo se agrega
		// categorias.push(newCategory)
		// setCategorias((cat) => [...cat, "Valorant"]);
		// setCategorias([...categorias, 'Valorant']);
		setTimeout(() => {
			setResultado("");
		}, 4000);
	};

	return (
		<div className="space-y-4">
			<div className="font-semibold text-center py-2 bg-gradient-to-r from-violet-500 from-10% via-sky-800 via-30% to-gray-500 to-90% shadow-md shadow-black">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-fuchsia-500 md:max-w-md mx-auto">
					App Experto en Gifs
				</h1>
			</div>
			{/* {resultado && (
				<p className="mx-4 border border-slate-700 inline-block p-1 text-amber-600">
					Contenido cargado con exito!
				</p>
			)} */}

			<div className="container mx-auto">
				{error && <Error>{error}</Error>}
				<AddCategory
					// setCategorias={setCategorias}
					onNewCategory={(e) => onAddCategory(e)}
					setResultado={setResultado}
					error={error}
					setError={setError}
				/>

				<div className="mt-6">
					{categorias.map((categoria) => (
						// <li key={categoria}> {categoria}</li>
						<ShowGridGifApi key={categoria} categoria={categoria} />
					))}
				</div>
			</div>
		</div>
	);
};
{
	/* <ul role="list" key={categoria} className="marker:text-sky-400 list-disc pl-5">
	<li className="mt-1">{categoria}</li>
</ul>; */
}
