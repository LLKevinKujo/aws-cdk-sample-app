import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';


export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/"       element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



