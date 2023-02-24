import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React,{useState} from 'react';

function addMember() {
    return (
        <>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Preencha com seu nome"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Apelido</label>
                        <input type="surname" className="form-control" id="exampleInputPassword1" placeholder="Preencha com seu apelido"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Tarefa</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"placeholder="Preencha com suas tarefas"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                </form>
            </div>
        </>
    );
}

export default addMember;