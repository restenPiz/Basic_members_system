import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import addMember from './Pages/addMember';

function App() {
  return (
    <>
      <br/>
      <Main/>

      <BrowserRouter>
        <Routes>
          <Route path="/addMember" element={<addMember/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
