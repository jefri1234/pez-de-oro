import './header.css'
import {BotonWatsap} from './botonWatsap'

export function Header(){

    return <div className="header-image">
      <div className='container-navvar'>
          <div>
            <h5>Pez de oro</h5>
          </div>
           
          <div>
          <a className='boton-numero' href="https://wa.me/51910047226?text=quiero%20mas%20imformacion" target="_blank" rel="noopener noreferrer"><p>910047226</p></a>
          </div>
      </div>

      <div className="container-letras">
        
        <h1 className='pezDeOro'>Pez de oro</h1>
        <h3 className='letras'>Restaurante - Cevicheria</h3>
        <BotonWatsap/>
        <p className='letras2'>Ubicado frente a la Backus restaurante variedad
        de platillos<br/>Menus-Bebidad-Postres</p>
      </div>
  </div>
}