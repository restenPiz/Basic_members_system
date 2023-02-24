import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddMember from "./AddMember";
import Main from "./Main";

function Web() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/AddMember" element={<AddMember />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Web;