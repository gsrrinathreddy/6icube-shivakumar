import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutme from './Pages/Aboutme';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualifications';
import Autocomplete from './Pages/Autocomplete';
import Button from './Pages/Button';
import Slider from './Pages/Slider';
function App() {
  const Navpages =['Aboutme', 'Qualifications', 'Hobbies']
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar pages={Navpages} bgcolor="red" buttoncolor="black"/>
      <Routes>
      <Route path="Aboutme" element={<Aboutme/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>
      <Route path="Qualification" element={<Qualification/>}/>
      <Route path="Autocomplete/Aboutme" element={<Autocomplete/>}/>
      <Route path="Button/Aboutme" element={<Button/>}/>
      <Route path="Slider/Hobbies" element={<Slider/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
