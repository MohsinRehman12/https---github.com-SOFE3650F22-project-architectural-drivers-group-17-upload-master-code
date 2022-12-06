import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { Route, Routes } from "react-router-dom"
import Home from './component/coursepages/Home';
import Card from './component/Cards';
import Courses from './component/Courses';
import Plogin from './component/PLogin';
import Course3650 from './component/coursepages/Course3650';
import Course3770 from './component/coursepages/Course3770';
import Course3700 from './component/coursepages/Course3700';

import Course3200 from './component/coursepages/Course3200';
import Course3450 from './component/coursepages/Course3450';
import Course1700 from './component/coursepages/Course1700';
import Course1000 from './component/coursepages/Course1000';




function App() {
  return (
    <div className="App">
      
    
      <Routes>
      <Route path='/' element={<Home />} />

        <Route path='/studentslogin' element={<Login />} />
        <Route path='/plogin' element={<Plogin />} />

        <Route path='/courses' element={<Courses />} />
        <Route path='/Course3650' element={<Course3650 />} />
        <Route path='/Course3770' element={<Course3770 />} />
        <Route path='/Course3200' element={<Course3200 />} />
        <Route path='/Course3700' element={<Course3700 />} />
        <Route path='/Course3450' element={<Course3450 />} />
        <Route path='/Course1700' element={<Course1700 />} />
        <Route path='/Course1000' element={<Course1000 />} />



      </Routes>
    </div>
  );
}

export default App;
