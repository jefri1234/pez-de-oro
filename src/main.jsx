import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './header'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Article1} from './article1'
import { Article } from './article'
import { Mapa } from './mapa'
const jefertodo=[
  {
    path:"/",
    element:<>
    <Header/>
    <Article/>
    <Article1/>
    <Mapa/>    
    </>
  }
];
const  jefer =createBrowserRouter(jefertodo)
ReactDOM.createRoot(document.getElementById('root')).render(
  //usar esta etiqueta una especie de codigo q se va ejecutar en desarollo 
  //para saver si estas escriendo codigo correcto en REACT 😱😅
  //TE DA UNAS RECOMENDACIONES EL PROPIO ENTORNO DE DESAROLLO para corregir unos errores😊👌 
  //DEJARLO AHI ES BUENA PRACTICA 👌👌😊
  <React.StrictMode>   
    <RouterProvider router={jefer} />
  </React.StrictMode>
)
