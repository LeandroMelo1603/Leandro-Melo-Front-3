import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { dentState, dentDispatch } = useContextGlobal();
  const params = useParams();

  const dentista = dentState.data.find(dentista => dentista.id === parseInt(params.id));

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;
    
    axios(url)
      .then(res => dentDispatch({ type: 'GET_DENT', payload: res.data }))
      .catch(error => {
        new error
      });
  }, []);

  return (
    <>
      <div key={params.id}>
        <h1>Detail Dentist ID: {params.id}</h1>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Mail</th>
              <th>Telefono</th>
              <th>Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentista.name}</td>
              <td>{dentista.email}</td>
              <td>{dentista.phone}</td>
              <td>{dentista.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail;
