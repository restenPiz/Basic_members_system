import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/addMember';

function addMember() {

    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Task, setTask] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`${API_URL}users/`, { Name, Surname, Task })
            .then(response => {
                console.log(response.data);
            });
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nome</label>
                        <input type="text" className="form-control" value={Name} onChange={event => setName(event.target.value)} placeholder="Preencha com seu nome" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Apelido</label>
                        <input type="surname" className="form-control" value={Surname} onChange={event => setSurname(event.target.value)} placeholder="Preencha com seu apelido" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Tarefa</label>
                        <input type="text" className="form-control" value={Task} onChange={event => setTask(event.target.value)} placeholder="Preencha com suas tarefas" />
                    </div>
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                </form>
            </div>
        </>
    );
}

export default addMember;
