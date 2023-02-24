import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    let navigate=useNavigate();

    const routeChange=()=>{
        let path='addMember';
        navigate(path);
    }

    return (
        <>
            <div className='container'>
                <div className='button'>
                    <button onClick={routeChange} type="button" class="btn btn-success">Adicionar Membro</button>
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