import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api/';

function EditMember(props) {

    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Task, setTask] = useState('');
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}editMember/${id}`, { Name, Surname, Task })
            .then(response => {
                setName(response.data.Name);
                setSurname(response.data.Surname);
                setTask(response.data.Task);
            });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`${API_URL}updateMember/${id}`, { Name, Surname, Task })
            .then(response => {
                alert(response.data);
            });
    };

    return (
        <>
            <div className="container">
                <h4>Adicionar Membro</h4>
                <div className="card row">
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
                        <button type="submit" name="submit" className="btn btn-primary">Adicionar</button>
                    </form><br />
                </div>
            </div>
        </>
    );
}

export default EditMember;