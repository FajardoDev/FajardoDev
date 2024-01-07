import { useState } from "react";

// setCategorias,setResultado
export const AddCategory = ({
	onNewCategory,
	setResultado,
	error,
	setError,
}) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(inputValue);
		// if (inputValue.trim().length <= 1) return;  Si no está vacio
		if (inputValue.trim().length <= 1) {
			setError("Agrega algo");

			setTimeout(() => {
				setError(false);
			}, 4000);
			return;
		}

		setError(false);
		// setCategorias((categoria) => [inputValue, ...categoria]);
		onNewCategory(inputValue.trim());
		setResultado(inputValue);
		setInputValue(""); //  se borra cuando doy enter
	};

	return (
		<div>
			<form className="my-5 mx-auto max-w-3xl" onSubmit={handleSubmit}>
				<label className="relative block max-w-full">
					<span className="sr-only ">Search</span>
					<button
						type="submit"
						className={` absolute inset-y-0 right-0 flex items-center pl-6 focus:outline-none rounded-full py-4 px-6 cursor-pointer duration-200 bg-fuchsia-300 hover:bg-fuchsia-400 ${
							error
								? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600 "
								: "focus:border-sky-500 focus:ring-sky-500 border border-white"
						}
						  `}
					>
						<i
							className={`fa-solid fa-magnifying-glass duration-200 text-[1.3rem] mt-1 ${
								error ? "text-red-600/90" : "text-sky-600/90 hover:text-yellow-400"
							} `}
						></i>
					</button>

					<input
						className={`hover:bottom-5 placeholder:italic  block bg-white w-full  rounded-full py-3 pl-12 pr-3 shadow-md shadow-black/50 focus:outline-none  focus:ring-1 sm:text-sm ${
							error
								? "placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: "focus:border-sky-500 focus:ring-sky-500 placeholder:text-sky-600/60 border border-white"
						}`}
						type="text"
						name="search"
						value={inputValue}
						onChange={onInputChange}
						placeholder={
							error
								? "Este campo no puede tener nombre existente, ó ir vacío "
								: "Buscar gifs..."
						}
					/>
				</label>
				{/* {error && "Hola mundo"} */}
			</form>
		</div>
	);
};
