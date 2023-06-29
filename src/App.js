import './App.css';
import datosTestimonios from './DatosTestimonios.js';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {datosTestimonios.map((alumno, index) => (
          <Testimonio
            key={index}
            nombre={alumno.nombre}
            pais={alumno.pais}
            imagen={alumno.imagen}
            cargo={alumno.cargo}
            empresa={alumno.empresa}
            testimonio={alumno.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
