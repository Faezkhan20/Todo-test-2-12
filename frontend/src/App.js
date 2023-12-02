
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomepageTodo from './Components/HomepageTodo';
// import Chatgpt from './Components/Chatgpt';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path='/' element={<HomepageTodo/>}/>
       {/* <Route exact path='/chatgpt' element={<Chatgpt/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
