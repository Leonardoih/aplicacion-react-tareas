import React from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import { useState } from 'react';
import Tarea from './Tarea';

const ListaDeTareas = () => {
	const [tareas, setTareas] = useState([]);
	const agregarTarea = tarea => {
		console.log('Tarea agregada: ');
    console.log(tarea);
	};

	return (
		<>
			<TareaFormulario />
			<div className='tareas-lista-contenedor'>
				{tareas.map((tarea) => 
					<Tarea
						texto={tarea.texto}
						completada={tarea.completada}
					></Tarea>
				)}
			</div>
		</>
	);
};

export default ListaDeTareas;
