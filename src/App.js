
import './App.css';
import SignUP from './component/SignUp';
import Login from './component/Login ';
import Create from './component/Create';
import Get from "./component/Get"
import Edit from './component/Edit';

import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    

    <BrowserRouter>
     <div className="App">
       <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/SignUp' element={<SignUP/>}/>
         <Route path='/Get' element={<Get/>}/>
         <Route path='/Create' element={<Create/>}/>
         <Route path='/Edit/:id' element={<Edit/>}/>
       </Routes>
     </div>
    
    </BrowserRouter>
    
      
    
  );
}

export default App;
