import './App.scss'
import { useState } from 'react'
import Header from './components/Header/Header'
import PersonalCard from './components/PersonalCard/PersonalCard'

const PERSONAS = [
  {
    nombre: 'Alfredo',
    edad: 21,
    email: 'Alfredo@gmail.com',
    telefono: '444-444'
  },

  {
    nombre: 'Pedro',
    edad: 21,
    email: 'pedro@gmail.com',
    telefono: '422-4224'
  },

  {
    nombre: 'Maria',
    edad: 30,
    email: 'maria@gmail.com',
    telefono: '555-444'
  },

  {
    nombre: 'Francisco',
    edad: 17,
    email: 'francisco@gmail.com',
    telefono: '999-999'
  }
]

const NOMBRE = 'Alfredo'

function App() {
  // hook 
  const [value, setValue] = useState(false)
  const [contador, setContador] = useState(0)
  // estado

  // value = true NO ESTA PERMITIDO

  const mostrarYOcultar = () => setValue(!value)
  

  // AGREGAR PARAMETROS PARA AUMENTAR EN FUNCION A UN VALOR 
  const aumentarContador = () => setContador(contador + 1)
  const decrementarContador = () => setContador(contador - 1)


  return (
    <div className='container'>
      <Header nombre={NOMBRE} />

      {/* <section className='cardsContainer'>
        {
          value ?
            PERSONAS.map(persona => <PersonalCard nombre={persona.nombre} edad={persona.edad} email={persona.email} telefono={persona.telefono} />)
            :
            <h1>Personas ocultas</h1>
        }
        <button onClick={() => mostrarYOcultar()}>
          Mostrar
        </button>

      </section> */}

      
      <section>
          <h4>Valor del contador: {contador}</h4>


          <button onClick={() => aumentarContador()}>
            Aumentar
          </button>

          <button onClick={() => decrementarContador()}>
            Disminuir
          </button>
        </section>
    </div>
  )
}

export default App
