import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Australia from './Pages/Australia';
import India from './Pages/India';
import Newzeland from './Pages/Newzeland';
import Switch from './Pages/Switch'
import Autocomplete from './Pages/Autocomplete'
function App() {
  const Navpages=['Australia', 'India', 'Newzeland']
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar pages={Navpages}bgcolor="" buttoncolor="white"/>
      <Routes>
        <Route path="Australia" element={<Australia/>}/>
        <Route path="India" element={<India/>}/>
        <Route path="Newzeland" element={<Newzeland/>}/>
        <Route path="Australia/Switch" element={<Switch/>}/>
        <Route path="India/Autocomplete" element={<Autocomplete/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
