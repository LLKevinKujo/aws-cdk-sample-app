import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';


export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/"       element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



