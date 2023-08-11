
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Pages/Registration';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Registration/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>
</Routes>
      
    </div>
    
  );
}
export default App;
