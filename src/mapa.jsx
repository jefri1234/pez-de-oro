import './mapa.css';
export function Mapa() {

  return (
    <div className="mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.142975518048!2d-77.64723645801392!3d-10.952570652520922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9107239b450e725f%3A0x328b45d4ba46b2a7!2sPez%20de%20Oro!5e0!3m2!1ses-419!2spe!4v1711639264817!5m2!1ses-419!2spe" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='selector-mapa' />
    </div>
  )
}

