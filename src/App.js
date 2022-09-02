import React ,{ useState  , useEffect } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from './components/Footer'

function App() {
  const [ courses , setCourses ]  = useState([])
  useEffect(()=>{
    const fetchData = async ()=>
    {
      let req = await fetch('http://myjson.dit.upm.es/api/bins/6bpk')
      let data = await req.json();
      setCourses(data) 
    }
    fetchData() ;
  })

  return (
    <div className="App">
      <NavBar />
      <Main courses={courses}/>
      <Footer />
    </div>
  );
}

export default App ;
