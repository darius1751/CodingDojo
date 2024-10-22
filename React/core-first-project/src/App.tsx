import './App.css'

export const App = () => {

  return (
    <div className='page'>
      <h1 className='title'>¡Bienvenido a mi aplicación de React!</h1>
      <div className='content'>
        <h2 className='subtitle'>Lista de cosas por hacer:</h2>
        <ul className='items'>
          <li className='item'>Aprender React</li>
          <li className='item'>Practicar con Vite</li>
          <li className='item'>Construir proyectos Increíbles</li>
        </ul>

      </div>
    </div>
  )
}
