import './App.css';
import DashboardMenu from './DashboardMenu';
import {useState} from "react"

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const showDashboard = () => {
    fetch("http://localhost:3000/login?q=" + name).then((data) =>{
      data.json().then((res) => {
        if(res[0].name === name && res[0].password === password){
          setShow(true);
        }
        else{
          alert("Please enter valid name and password")
        }
      })
    })
  }
  return (
    <div className="App">
      {show ? 
      <DashboardMenu/> : 
      (<header className="App-header">
        <input type="text" name="user" placeholder='username' onChange={(e) => setName(e.target.value)} className="input-style"/><br/>
        <input type="password" name="password" placeholder='password' onChange={((e) => setPassword(e.target.value))} className="input-style"/><br/>
        <button onClick={showDashboard} className="login-style">Login</button>
      </header>)}
    </div>
  );
}

export default App;
