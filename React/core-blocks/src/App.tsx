import { Blue } from './components/Blue/Blue'
import { Rose } from './components/Rose/Rose'
import { SkyBlue } from './components/SkyBlue/SkyBlue'
import { Template } from './components/Template/Template'
import { Yellow } from './components/Yellow/Yellow'
import { Green } from './components/Green/Green'
import './App.css'

export const App = () => {

  return (
    <div className='page'>
      <Template>
        <Yellow />
        <Rose>
          <Blue />
          <Blue />
          <Blue />
          <Green />
        </Rose>
        <SkyBlue />
      </Template>
    </div>
  )
}