import React, { useState, useEffect } from 'react';
import './cardsNosotros.css'

const CardsNosotros = () => {
  const [data, setData] = useState([]);

  // Función para obtener los datos del archivo JSON
  const getData = async () => {
    try {
      const res = await fetch('/json/nosotros.json');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setData(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error('Tienes un error en el consumo del archivo JSON:', error);
    }
  };

  // Llamar a la función getData al montar el componente
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='nosotros'>
      <h1 className='tituloNosotros'>Nuestro equipo de trabajo</h1>
      <div className='contentCardNosotros'>
        {data.map((item, index) => {
          // Generar una clase segura, eliminando espacios y caracteres especiales
          const className = `cardNosotros ${item.nombre.toLowerCase().replace(/\s+/g, '')}`;

          return (
            <div key={index} className={className}>
              <b></b>
              <div className="content">
                <p className="title">
                  {item.nombre} {item.Apellido}
                  <br />
                  <span>{item.cargo}</span>
                </p>
                <ul className="sci">
                  {item.linkedin && (
                    <li>
                      <a href={item.linkedin}>
                        <svg className="fa-brands fa-linkedin-in" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </a>
                    </li>
                  )}
                  {item.github && (
                    <li>
                      <a href={item.github}>
                        <svg className="fa-brands fa-github" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.67 7.67 0 012.01-.27c.68 0 1.36.09 2.01.27 1.52-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsNosotros;