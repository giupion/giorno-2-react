
import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { Image ,Button  ,Row ,Col } from "react-bootstrap";
function App() {
  return (
   
        
<div className="App">
<MyNav/>

<Welcome/>
<AllTheBooks/>
<MyFooter/>
    </div>

  );
}

export default App;
