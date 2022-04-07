import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import Tarea from './componentes/Tarea';
function App() {
	return (
		<div className='aplicacion-tareas'>
			<div className='freecodecamp-logo-contenedor'>
				<img
					src={freecodecampLogo}
					alt=''
					className='freecodecamp-logo'
				/>
			</div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
		<Tarea texto="aprender a realizar"></Tarea>
      </div>
		</div>
	);
}

export default App;
