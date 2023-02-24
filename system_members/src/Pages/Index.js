import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function Index() {

    const estilos={
        textDecoration: "none",
        color:"white",
        listStyleType:"none",
    }
    const div={
        marginTop:"18rem",
    }

    return (
        <>
            <div className="container" style={div}>

                <button type="button" class="btn btn-success">
                    <a style={estilos} href="/">Inicio</a>
                </button><br /><br />

                <button type="button" class="btn btn-success">
                    <a style={estilos} href="/AddMember">Adicionar Membro</a>
                </button>
            </div>
        </>
    );
}

export default Index;