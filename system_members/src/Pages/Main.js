import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap-icons/bootstrap-icons.svg';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'bootstrap-icons/font/bootstrap-icons.css';

const API_URL = 'http://127.0.0.1:8000/api/';

const Main = () => {

    const estilos = {
        textDecoration: "none",
        color: "black",
        listStyleType: "none",
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}allMember/`)
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <>
            <div className='container'>
                <div className='button'>
                    <button type="button" class="btn btn-success">
                        <a style={estilos} href="/AddMember">Adicionar Membro</a>
                    </button>
                </div><br />
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Apelido</th>
                            <th scope="col">Tarefa</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.Name}</td>
                                <td>{user.Surname}</td>
                                <td>{user.Task}</td>
                                <td>
                                    <a style={estilos} href="/EditMember">
                                        <i class="bi bi-pencil"></i>
                                    </a>
                                </td>
                                <td>
                                    <a style={estilos} href="">
                                        <i class="bi bi-trash3"></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Main;