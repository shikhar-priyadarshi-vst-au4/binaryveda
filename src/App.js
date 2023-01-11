import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import MainLayout from "./layout/Main";
import Homepage from "./pages/Homepage";
import Todo from "./pages/Todo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/binaryVeda' element={<MainLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='todoWidget' element={<Todo/>}/>
          <Route path="*" element={<Navigate to="/binaryVeda"/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/binaryVeda"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
