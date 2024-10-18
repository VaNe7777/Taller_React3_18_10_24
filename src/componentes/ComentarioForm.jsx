import {React , useState} from 'react'
import Card from './Card' 
import ComentarioCalificacion from './ComentarioCalificacion'



const ComentarioForm = ( { handleAdd } ) => {

    const [ text , setText ] = useState ('')
    const [calificacion , setCalificacion] = useState (0)

    const handleTextChange = (e) => {
        setText(e.target.value)
    }


    //EVENTO DE CONTROLES

    const handleSubmit = (e) => {
        e.preventDefault()

        // Crear el objeto comentario
        const newComentario = {
            comentario: text,
            calificacion: calificacion
        }

        handleAdd(newComentario)
    }




  return (
    <Card>
        <form onSubmit={ handleSubmit }>
            < ComentarioCalificacion select = {(calificacion) => 
                                        { setCalificacion(calificacion) }}/>

            <div className='input-group'>
                <input type="text" 
                    value = { text }
                    onChange= { handleTextChange } 
                    placeholder='Ingrese su comentario aquí' />
                
                <button type='submit'>
                    Guardar
                </button>
            </div>
        </form>
    </Card>
  )
}

export default ComentarioForm