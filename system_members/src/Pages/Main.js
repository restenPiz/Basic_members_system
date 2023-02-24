import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const Main = () => {
    
    const estilos={
        textDecoration: "none",
        color:"white",
        listStyleType:"none",
    }

    return (
        <>
            <div className='container'>
                <div className='button'>
                    <button type="button" class="btn btn-success">
                        <a style={estilos} href="/AddMember">Adicionar Membro</a>
                    </button>
                </div><br/>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Apelido</th>
                            <th scope="col">Tarefa</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Main;