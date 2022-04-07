import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Tarea = ({
	id,
	texto,
	completada,
	completarTarea,
	eliminarTarea,
}) => {
	return (
		<div
			className={
				completada
					? 'tarea-contenedor completada'
					: 'tarea-contenedor'
			}
		>
			<div className='tarea-texto' onClick={() => completarTarea(id)}>
				{texto}
			</div>
			<div
				className='tarea-contrenedor-icono'
				onClick={() => eliminarTarea(id)}
			>
				<RiDeleteBin5Line className='tarea-icono' />
			</div>
		</div>
	);
};

export default Tarea;
