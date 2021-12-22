
import './App.css';
import Adresse from './Component/Profile/Adresse';
import Fullname from './Component/Profile/FullName';
import Profilepic from './Component/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App" >
      <h1>Steven's Profile</h1>
     <Profilepic />
     <Fullname />
     <Adresse />




    </div>
  );
}

export default App;
