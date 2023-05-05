import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Navbar from './Components/Navbar';
import Aboutme from './Pages/Aboutme';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualification';
import Autocomplete from './Pages/Autocomplete';
import Button from './Pages/Button';
function App() {
  const Navpages =['Aboutme', 'Qualification', 'Hobbies'];
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar pages ={Navpages} bgcolor="yellow" buttoncolor="black"/>
      <Routes>
      <Route path="Aboutme" element={<Aboutme/>}/>
      <Route path="Qualification" element={<Qualification/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>
      <Route path="Autocomplete/Aboutme" element={<Autocomplete/>}/>
      <Route path="Button/Aboutme" element={<Button/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
