import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
const tarea = ({ texto, completada }) => {
	return (
		<div
			className={
				completada
					? 'tarea-contenedor completada'
					: 'tarea-contenedor'
			}
		>
			<div className='tarea-texto'>{texto}</div>
			<div className='tarea-contrenedor-icono'>
				<RiDeleteBin5Line className='tarea-icono' />
			</div>
		</div>
	);
};

export default tarea;
