import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { dentState } = useContextGlobal()


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          dentState.data.map((dentista => <Card key={dentista.id} dentista={dentista}/>))
        
        }


        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home