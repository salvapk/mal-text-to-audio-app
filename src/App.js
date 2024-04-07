import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Text from './Text'
import Play from './Play';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Text/>}/>
        <Route path='/Play' element={<Play/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
