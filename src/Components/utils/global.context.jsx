import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";


export const initialState = {
    dentist: {},
    data: [],
    theme: "",
    fav: JSON.parse(localStorage.getItem('favs')) || []
  }

  export const ContextGlobal = createContext(initialState);


const dentReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CARDS_DENT':
      return {...state, data: action.payload}
    case 'GET_DENT':
      return {...state, dentist: action.payload}
    case 'ADD_FAV':
      return {...state, fav: [...state.fav, action.payload]}
    case 'DELETE_FAV':
          return {...state, fav: action.payload}
    case 'DARK':
      return {...state, theme: 'dark'}
    case 'LIGHT':
      return {...state, theme: 'light'}
    default:
      throw new Error();
  }
};


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const url = 'https://jsonplaceholder.typicode.com/users' 
    const [dentState, dentDispatch] = useReducer(dentReducer, initialState)  

    useEffect(() => {
      axios(url)
        .then((res) => {
          dentDispatch({ type: 'GET_CARDS_DENT', payload: res.data}); 
        })
        .catch((error) => {
          new error
        });
    }, []);



  useEffect(() => {
    
      localStorage.setItem('favs', JSON.stringify(dentState.fav))
}, [dentState.fav])

  return (
    <ContextGlobal.Provider value={{
      
      dentState, dentDispatch,    
      


    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)

