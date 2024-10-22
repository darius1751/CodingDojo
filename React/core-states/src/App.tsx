import { useEffect, useState } from 'react'
import { ToogleTheme } from './components/ToogleTheme/ToogleTheme'
import { Card } from './components/Card/Card'
import './App.css'

export const App = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)'))
      setTheme(true);
  }, [])
  return (
    <div className='page'>
      <ToogleTheme theme={theme} setTheme={setTheme} />
      <h1 className='title'>TechStore - Tu Destino para la Mejor Tecnología</h1>
      <div className='container'>
        <Card
          title='Laptop'
          price={1500}
          description='Una potente laptop para trabajar y jugar.'
          initialStock={10}
        />
        <Card
          title='Smartphone'
          price={800}
          description='Un Smartphone de ultima generacion con una de las mejores camaras'
          initialStock={0}
        />
        <Card
          title='Auriculares'
          price={200}
          description='Auriculares con cancelacion de ruido. No escucharás nada a tu alrededor'
          initialStock={5}
        />
        <Card
          title='Monitor'
          price={300}
          description='Monitor 4K para una experiencia visual increible.'
          initialStock={7}
        />
      </div>
    </div>
  )
}

