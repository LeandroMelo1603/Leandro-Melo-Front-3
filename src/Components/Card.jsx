import React, { useState } from "react";
import { useContextGlobal } from '../Components/utils/global.context'
import { Link } from "react-router-dom";

const Card = ({ dentista }) => {

const {dentState ,dentDispatch} = useContextGlobal()
const [isFavorito, setIsFavorito] = useState(false);


  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    

    


    e.preventDefault()
    if (dentState.fav.some((dentTraidoFav) => dentTraidoFav.id === dentista.id)){
      
      const newArrFav = dentState.fav.filter((dentEliminarFav) => dentEliminarFav.id !== dentista.id)
      setIsFavorito(false);
      return dentDispatch({ type: 'DELETE_FAV', payload: newArrFav })

    } else {
      dentDispatch({ type: 'ADD_FAV', payload: dentista })
      setIsFavorito(true);
      alert("se agrego a favoritos")
    }


  } 
  
  return (
    

    <div className="card">
    <Link  key={dentista.id} to={`dentist/` + dentista.id}>

      <h3>{dentista.name}</h3>
      <h3>{dentista.username}</h3>
      <h3>{dentista.id}</h3>
      <img style= {{width: '100%', height:'50%'}} src="../../public/images/doctor.jpg" alt="" />


        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <button onClick={addFav} className="favButton"> {isFavorito ? "★" : "☆"} </button>


    </Link>
    </div>
  
  );
};

export default Card;

