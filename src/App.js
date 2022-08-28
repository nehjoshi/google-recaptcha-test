import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/home';
import Success from './pages/success';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/success' element={<Success />} />
    </Routes>
   </Router>
  );
}

export default App;
