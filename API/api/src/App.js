import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './Components/Read';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Read />} />
      <Route path='/create' element={<Create/>} />
    </Routes>
    </div>
  );
}

export default App;
