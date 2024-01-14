
import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
/*import AllTheBooks from './components/AllTheBooks';*/

import BookList from './components/BookList';
import { Image ,Button  ,Row ,Col,Container } from "react-bootstrap";

import fantasy from './books/fantasy.json';

function App() {
  return (
   
        
<div className="App">
<MyNav/>

<Welcome/>
{/*AllTheBooks*/}
<BookList libri={fantasy}/>

<MyFooter/>
    </div>

  );
}

export default App;
