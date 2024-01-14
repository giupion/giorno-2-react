
import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
/*import AllTheBooks from './components/AllTheBooks';*/

import BookList from './components/BookList';
import { Image ,Button  ,Row ,Col,Container } from "react-bootstrap";

import fantasy from './books/fantasy.json';
//importo fantasu e metto in libri da app.js fantasy destrutturato in libri cosi lo uso in booklist
function App() {
  return (
   
        
<div className="fantasycolor">
<MyNav className="primary"/>

<Welcome className="primary"/>
{/*AllTheBooks*/}
<BookList libri={fantasy /*è il json destrutturato sotto forma di array , quindi glielo passo il contenuto a libri vado a boolist cosi*/}/>

<MyFooter className="primary"/>
    </div>

  );
}

export default App;
