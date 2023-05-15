import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import ValidationTwo from './pages/ValidationTwo';
import Showproduct from './pages/Showproduct';
import Updatevalidate from './pages/Updatevalidate';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<ValidationTwo/>}></Route>
        <Route path='/show' element={<Showproduct/>}></Route>
        <Route path='/Update/:id' element={<Updatevalidate/>}></Route>


      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
