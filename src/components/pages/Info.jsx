import React from 'react';
import d3 from '../../assets/img/d3.jpg';
import '../../assets/info.css'
import { Link } from 'react-router-dom';

const Info = () => (
    <main className='contenedor sombra'>
        <div className="contenido-imagen">
            <div className="contenido">
                <p>
                    La visualización del agujero negro Gargantúa en "Interstellar" requirió un inmenso poder de computación.
                    Algunos cuadros de la simulación tardaron hasta 100 horas en renderizarse. Esta dedicación al detalle
                    permitió a los científicos estudiar las simulaciones y hacer descubrimientos sobre la forma en que la
                    luz se curva alrededor de los agujeros negros. La precisión de estos efectos visuales no solo asombró a
                    las audiencias, sino que también contribuyó al conocimiento científico en la vida real.
                </p>
            </div>
            <div className="imagen">
                <img src={d3} alt="Imagen de Info1" />
            </div>
        </div>
        <Link to="/" className="boton-regresar">Regresar al inicio</Link>
    </main>
    
);

export default Info;
