import { Route, BrowserRouter,Routes } from "react-router-dom";
import AddMember from "./AddMember";

function Web() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/AddMember" element={<AddMember />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Web;