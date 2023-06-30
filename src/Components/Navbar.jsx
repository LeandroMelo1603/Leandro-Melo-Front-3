import { useContextGlobal } from './utils/global.context';
import { routes } from './utils/routes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  
  const { dentState, dentDispatch } = useContextGlobal();

  const handleThemeChange = () => {
    if (dentState.theme === 'dark') {
      dentDispatch({ type: 'LIGHT' });
    } else {
      dentDispatch({ type: 'DARK' }); 
    }
  };

  

  return (
    <nav>
      <div className='inicio-dh'>
        <img className='loguito' src="../../public/DH.ico" alt="" />
        <h3>ODONTO</h3>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <div className='caja-vacia'>

      </div>
      
      <div className='links'>
      
      <Link to= {routes.home}> <h4>Inicio</h4> </Link>
      <Link to= {routes.contact}> <h4>Contacto</h4> </Link>
      <Link to= {routes.favourite}> <h4>Favoritos</h4> </Link>
      
      <button onClick={handleThemeChange}>Change theme</button>
      </div>



    </nav>
  )
}

export default Navbar