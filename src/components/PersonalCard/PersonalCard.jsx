import './PersonalCard.scss'

const PersonalCard = ({ nombre, edad, email, telefono }) => {
  return (
    <div className='card'>
      <h3 className='title'>{nombre}</h3>
      <small>{edad}</small>

      <div>
        <h4>Datos de contacto</h4>
        <span>{email}</span>
        <span>{telefono}</span>
      </div>
    </div>
  )
}

export default PersonalCard