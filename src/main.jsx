import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GifExpertApp />
	</React.StrictMode>,
);
// Como funciona la app

// 1. GifExpertApp.jsx Es como el App es el centro de app y va fuera del componente pero dentro de src.
// 2. AddCategory.jsx es donde va estar el input para escribir onChange, onClick y onSubmit
// 3. GridGifApi.jsx es donde se va a mandar a llamar la Api para eso creo una carpeta llamada helpers y ahí creo getGifs.js pasandole la categoria como argumento.
// 4. Luego creo el GifGridItem.jsx para mostrar las cards y lo mando a llamar en GridGifApi.jsx en el map
