import React from 'react'

const ComentarioStats = ({ comentarios }) => {
  // El número de comentarios que hay en el arreglo de comentarios
  const numeroComentarios = comentarios.length;

  // Calcular el promedio de calificaciones con reduce
  const calificacionPromedio = 
    comentarios.length > 0 //Esto hace que no se divida entre 0 en caso de que no haya comentarios
      ? (comentarios.reduce((total, comentario) => total + comentario.calificacion, 0) / numeroComentarios).toFixed(1)
      : 0; // Si no hay comentarios, el promedio es 0

  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {numeroComentarios}</h4>
      <h4>Calificación Promedio: {calificacionPromedio}</h4>
    </div>
  );
}

export default ComentarioStats
