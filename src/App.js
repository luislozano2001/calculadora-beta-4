import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';

function App() {
  return (
    <div className="App">
      <div className='contenedor-calculadora'>

        <div className='contenedor-pantalla'>
          <Pantalla/>
        </div>

        <div className='fila-botones'>
          <Boton/>
          <Boton/>
          <Boton/>
          <Boton/>

        </div>
        <div className='fila-botones'>
          <Boton/>
          <Boton/>
          <Boton/>
          <Boton/>

        </div>
        <div className='fila-botones'>
          <Boton/>
          <Boton/>
          <Boton/>
          <Boton/>

        </div>
        <div className='fila-botones'>
          <Boton/>
          <Boton/>
          <Boton/>
          <Boton/>

        </div>
          
        <div className='BotonClear'>
          <BotonClear/>
        </div>
          
      </div>
    </div>
  );
}

export default App;
