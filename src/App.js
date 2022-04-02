import logo from './logo.svg';
import './App.css';

// import something from location
import Top from "./Top/Top.js"
import Center from './Center';
import Sidebar from './SideBar/index.js';

function add( a,b){
  return a + b // not returning html, it is not a component
}

function App() {
  return (
    <div className="App">
        <Top></Top>
        <div className='body'>
          <Sidebar />

          
            <Center />        
         
        </div>
    </div>
  );
}

export default App;
