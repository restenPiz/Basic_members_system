import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap-icons/bootstrap-icons.svg';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:8000/api/';

const Main = (props) => {

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

    const handleSubmit = event => {
        event.preventDefault();

        axios.get(`${API_URL}deleteMember/${props.match.params.id}`)
            .then(response => {
                console.log(response.data);
            });
    };

    return (
        <>
            <div className='container'>
                <div className='button'>
                    <button type="button" class="btn btn-success">
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
                                    <Link style={estilos} to={{pathname:"/EditMember/"+user.id}}>
                                        <i class="bi bi-pencil"></i>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={()=>this.delUser(user.id)}>
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