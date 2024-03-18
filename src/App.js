import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Loginpage/Loginpage';
import Postdata from './Loginpage/Postdata';
import Getdata from './Loginpage/Getdata';
import Signup from './Loginpage/Signup';
import Putdata from './Loginpage/Putdata';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Loginpage' element={<LoginPage />} /> 
        <Route path='/Postdata' element={<Postdata />} />
        <Route path='/Postdata/Getdata' element={<Getdata />} />
        <Route path='/Loginpage/Signup' element={<Signup />}/>
        <Route path='/Signup/Loginpage' element={<LoginPage />}/>
        <Route path='/Putdata/:id' element={<Putdata />}/>
        <Route path='/Getdata' element={<Getdata />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

