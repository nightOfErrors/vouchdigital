import './App.css';
import Login from './components/login';
import Nav from './components/nav';
import { Divider } from 'antd';

function App() {



  return (
    <div className="App">

      <Nav />
      <Divider style={{marginTop:'-14px'}} />
      <div style={{display:"flex", marginTop:'-25px', flex: '1 1 auto' }} >

        <Login />
        <div id="background" style={{ overflow:'auto', flex: 'auto', backgroundColor:"#023047"}}>
        </div>
        
      </div>

    </div>
  );
}

export default App;
