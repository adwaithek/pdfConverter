 
import './App.css';
import FormData from './Components/FormData';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Prescription from './Components/Prescription';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/'  element={ <FormData/>}  /> 
         <Route  path='/prescription'   element={<Prescription/>}  /> 
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
