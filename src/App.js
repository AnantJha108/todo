import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import List from './components/List';

function App() {
   const [data,setData] = useState([{"name":"Anant"}]);
  
   useEffect(() => {
    fetch("http://codewithsadiq.com/api/student")
    .then((res) => res.json())
    .then(res => setData(res));
   })
  return (
    <>
    <div className="container mt-5">
        <div className="col-5 mx-auto">
          
            <div className="card">
                <h1 className='display-4 text-center'>Todo <span className='text-danger'>App</span></h1>
                <div className="card-body">
                    <CreateTask/>
                    <List data={data}/>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
