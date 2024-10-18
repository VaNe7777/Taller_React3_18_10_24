import {React, useState} from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'



const ComentarioItem = ({ comentario, 
                          calificacion, 
                          id,
                          handleDelete }) => {
  

    // Manejo del estado en un comentario:
    // comentario y calificación como atributos 
    // mediante el uso de Estados

    const [ comment, setComment ] = useState(comentario)
    const [ rating, setRating ] = useState(calificacion) 
    const [ identificacion, 
            setIdentificacion ] = useState(id)


    // Metodo para borrrar
    const borrarItem = (identificacion) => {
        console.log(identificacion)
    }
    

  
    return (
    <Card reverse = {true}>
        <div className='num-display'>{ rating }</div>

        <button 
            onClick={ () => handleDelete (identificacion) }
            className='close'>

        <FaTimes color = '#FA8072' />
        
        </button>

        <div className='text-display'>{ comment }</div>
    </Card>
    
  )
}

export default ComentarioItem