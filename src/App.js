import './index.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:page' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

