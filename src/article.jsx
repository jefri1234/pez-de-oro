import './article.css';
import marino from './assets/marino.jpeg';
import bebidas from './assets/bebidas.jpg';


export function Article(){
return <div className="container-articulos"> 
  <article className='platillos'>
    <h3 className='titulo'>Realizar Reserva</h3>
    <p className='descripcion'>Ya sea que desea disfrutar de una agradable tarde de uno de los platillos
    delicios acompañado de sus compañeros o familiares puede reservar una mesa y disfrutas nuestros platillos.
    </p>
    <div className='boton'><a href="https://wa.me/51910047226?text=Quiero%20realizar%20una%20reserva">Reservar ahora</a></div>
    <img className='marino'src={marino} alt="marino" />
  </article>
  
  <article className='platillos'>
  <h3 className='titulo'>Variedad Platillos-Bebibas</h3>
  <p className='descripcion'>Para poder gustar de sus platillos le ofrecemos bebidas para poder acompañar sus 
    platillos, contamos con variedad de bebidas.
  </p>
  <div className='boton'><a href="https://pez-de-oro.ola.click/products">Ver Catalogo</a></div>
  <img className='marino' src={bebidas} alt="" />
  
  </article>
</div>
} 

