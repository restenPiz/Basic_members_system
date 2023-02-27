import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap-icons/bootstrap-icons.svg';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const API_URL = 'http://127.0.0.1:8000/api/';


const Main = (props) => {

    const estilos = {
        textDecoration: "none",
        color: "black",
        listStyleType: "none",
    }

    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}allMember/`)
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    function handleSubmit(id) {
        axios.delete(`${API_URL}deleteMember/${id}`)
        .then(response => {
            setUsers(response.data);
        });
    }

    return (
        <>
            <div className='container'>
                <div className='button'>
                    <button class="btn btn-success">
                        <a style={estilos} href="/AddMember">Adicionar Membros</a>
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
                                    <Link style={estilos} to={`/EditMember/${user.id}`}>
                                        <i class="bi bi-pencil"></i>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleSubmit(user.id)}>
                                        <i class="bi bi-trash3"></i>
                                    </button>
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