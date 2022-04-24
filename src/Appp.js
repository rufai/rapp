import logo from './logo.svg';
import './App.css';

// import something from location
import Top from "./Top/Top.js"
import Center from './Center';
import Sidebar from './SideBar/index.js';
import Store from './Store';
import BbcHundred from './BbcHundred';

function add( a,b){
  return a + b // not returning html, it is not a component
}
// App (parent) ---> Top (Child)
function App() {
  return (
    <section>
      <div className="App">
          <BbcHundred />
          <Store />
          <Top></Top>
          <div className='body'>
            <Sidebar />
            <Center />        
          </div>
      </div>
    </section>
  );
}

export default App;
