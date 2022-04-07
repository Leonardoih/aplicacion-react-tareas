import React ,{useState}from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {
	const[input, setInput] = useState('');

	const manejarCambio = (e) => {
		setInput(e.target.value);
		console.log(e.target.value);
	}
	const manejarEnvio = e =>{
		const tareaNueva = {
			id: "1564654",
			texto: "hola",
	}}
	return (
		<form className='tarea-fromulario'>
			<input
				type='text'
				className='tarea-input'
				placeholder='Escriba una Tarea'
				name='texto'
				onChange={manejarCambio} 
			/>
			<button className='tarea-boton'>Agregar Tarea</button>
		</form>
	);
};

export default TareaFormulario;
