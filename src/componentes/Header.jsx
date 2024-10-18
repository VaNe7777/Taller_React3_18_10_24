import React from 'react'

const Header = ({ autor, titulo, ficha, centro }) => {


    const headerStyle = {
        bacgroundColor : "rgba (0,0,0,0.4)",
        color : "#045abc" 
    }

    const pStyle1 = {
        color : "#ff9c9c" 
    }

    const pStyle2 = {
        color : "#DAF7A6" 
    }

    const pStyle3 = {
        color : "#9ccfdc" 
    }




  return (
    <header>
    <div className="container">
        {titulo}
        <p style={pStyle1}> Autor : {autor} </p>
        <p style={pStyle2}> Ficha : {ficha} </p>
        <p style={pStyle3}> Centro de Formación : {centro}</p>
    </div>
    </header>
  )
}

export default Header