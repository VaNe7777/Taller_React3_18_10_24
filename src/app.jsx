import { React, useState } from 'react';
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {
    const [comments, setComments] = useState(comentarios);

    const titulo = "App de Comentarios";
    const Autor = "Linda Guerrero";
    const ficha = "2902093";
    const centro = "CGMLTI";

    const borrarItem = id => {
        if (window.confirm("Está seguro de borrar el comentario?")) {
            setComments(comments.filter((c) => c.id !== id));
        }
    };

    const loading = false;
    if (loading) return (<h1>Cargando comentarios...</h1>);

    <Card reverse={true}></Card>
    const addComentario = (newComentario) => {
        const id = comments.length ? Math.max(...comments.map(c => c.id)) + 1 : 1;
        const comentarioConId = { id, ...newComentario };
        setComments([...comments, comentarioConId]);
    };

    return (
        <div className='container'>
            <Header 
                titulo={titulo}  
                autor={Autor} 
                ficha={ficha} 
                centro={centro}
            /> 

            <ComentarioForm handleAdd={addComentario} />

            <ComentarioStats comentarios={comments} />    

            {comments.length === 0 ? (
                <h2>No hay comentarios</h2>
            ) : (
                <ComentarioLista 
                    comments={comments} 
                    handleDelete={borrarItem} 
                />
            )}

                   
        </div>
    );
}

export default App;

