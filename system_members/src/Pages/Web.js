import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddMember from "./AddMember";
import Main from "./Main";

function Web() {
    return (
        <>
            {/*Inicio das rotas do meu sistema*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/AddMember" element={<AddMember />} />
                </Routes>
            </BrowserRouter>
            {/*Fim das rotas do meu sistema*/}
        </>
    );
}
export default Web;