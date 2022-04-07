import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';
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
				<ListaDeTareas></ListaDeTareas>
			</div>
		</div>
	);
}

export default App;
