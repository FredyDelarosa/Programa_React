import React from 'react';
import Card from '../atoms/Card';
import d1 from '../../assets/img/d1.jpg';
import d2 from '../../assets/img/d2.jpg'
import d3 from '../../assets/img/d3.jpg';
import d4 from '../../assets/img/d4.jpg';
import d5 from '../../assets/img/d5.jpg';
import d6 from '../../assets/img/d6.jpg';

const Home = () => (
  <main className="contenedor sombra">
    <h2>Datos curiosos</h2>
    <div className="cards">
      <Card imgSrc={d1} title="Cosechas Reales" text='En "Interstellar", incluso los campos de maíz tienen una historia interesante.' />
      <Card imgSrc={d2} title="Asesoría Científica de Kip Thorne" text='¿Sabías que "Interstellar" contó con la colaboración de un renombrado físico teórico?' />
      <Card imgSrc={d3} title="Simulación del Agujero Negro" text='La creación del agujero negro Gargantúa en "Interstellar" no solo impresionó a las audiencias, sino que también contribuyó al conocimiento científico.' link="/info" />
      <Card imgSrc={d4} title="Una producción ajetreada" text='¿Sabías que la pelicula "Interstellar" casi no llegaba a nuestras pantallas?' />
      <Card imgSrc={d5} title="Algunos Detalles Técnicos" text='¿Sabías que la película no solo cautivó por su historia, sino también por su increíble realización técnica?' />
      <Card imgSrc={d6} title="Las curiosidades de Nolan" text='¿Sabías que Christopher Nolan no solo se enfrentó a interminables discusiones con el físico Kip Thorne, sino que también tomó decisiones curiosas y únicas antes y durante el rodaje?' />
    </div>
  </main>
);

export default Home;

