import React ,{ useState  , useEffect } from "react";
import axios from 'axios'
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from './components/Footer'
import CoursePage from "./components/CoursePage";
import { Route , Routes }from 'react-router-dom'

function App() {
  const [ courses , setCourses ]  = useState([])
  useEffect(()=>{
    axios.get('http://myjson.dit.upm.es/api/bins/6a3i') // old link http://myjson.dit.upm.es/api/bins/6bpk
    .then(response =>{
      setCourses(response.data)
    })
    .catch(err => console.log(err))
  } , [])

  return ( <>  
    <NavBar />
      <Routes>
        <Route path='/'  element={<Main courses={courses} />} /> 
        {courses.length >0  && <Route path='/courses/:id'  element={<CoursePage courses={courses}/>} />} 
      </Routes>
    <Footer />
    </>
  );
}

export default App ;
