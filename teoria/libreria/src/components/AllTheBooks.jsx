
import fantasy from '../books/fantasy.json';

import { Image,Button,Row ,Col,Container,Card,ListGroup } from "react-bootstrap";
/*uguale a*/
//var somma = (x, y) => x + y; 

//var somma = function somma(x, y) {
  //return x + y;
//};

//fantasy.map((book) => {})

//destrutturare disimballare elementi

function AllTheBooks() {
  console.log(fantasy) 
  //book è il paramentro da map , il singolo elemento di fantasy lo metti a funzione e fai il return della funzione come un react cosi da leggere i libri fantasy
    return (
      <Container className='d-flex align-items-center justify-content-center'>
              <Row >
        {fantasy.map( (libri)=>{//libri sono gli elementi dell'array di json fantasy array, di oggentti!
      
   /* libri."asin": "0316438960", si accede alla proprietà dell'pggetto
    "title": "The Last Wish: Introducing the Witcher",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    "price": 9.59,
    "category": "fantasy"  oggetto tra parentis graffe --json [{}, {}]      libri.asin quando si destruttura la proprieta di un oggetto e te la vai a prendere              */
  
          console.log(libri)
          return( 
          
    //key univoca affinchè non ci siano problemi nella riproduzione del map cioe è la chiave univoca che gli serve per riconoscere l'oggetto e fare i lmap, libri.asin è la proprietà destrutturata!


          <Col  xs={12} md={4} lg={3} key={libri.asin} className='mt-5 mb-5 me-6 align-items-center'>  
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={libri.img} style= {{ width:'287px', height:'400px' }}  />
            <Card.Body>
              <Card.Title>{libri.title}</Card.Title>
              <Card.Text>
               
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{libri.category}</ListGroup.Item>
                <ListGroup.Item>{libri.price}</ListGroup.Item>
                <ListGroup.Item>{libri.asin}</ListGroup.Item>
              </ListGroup>
                <Card.Body>
                <Button variant="primary me-5">Buy</Button>
                  <Button variant="primary me-5">Remove</Button>
                </Card.Body>
              </Card>
              </Col>)

}  ) }
        </Row>
       </Container>
        )
}

        

export default AllTheBooks;




/*La parola chiave di JavaScript this è uno degli aspetti del linguaggio più difficili da comprendere. Tuttavia è di importanza critica per la scrittura di codice JavaScript più avanzato.

In JavaScript, la parola chiave this ci consente di:

    Riutilizzare funzioni in diversi contesti di esecuzione. Vale a dire che una funzione, una volta definita, può essere chiamata per oggetti diversi usando la parola chiave this.
    Identificare l'oggetto nel contesto di esecuzione corrente quando chiamiamo un metodo.

La parola chiave this è strettamente associata  alle funzioni JavaScript. Quando si parla di this, la cosa fondamentale è capire dove viene chiamata una funzione, poiché non sappiamo a cosa si riferisca la parola chiave this fino a quando la funzione non viene invocata.

L'uso di  this può essere categorizzato in cinque diversi aspetti di binding (associazione). In questo articolo, esamineremo tutti e cinque gli aspetti con degli esempi.
Innanzitutto, Cos'è il Binding?

In JavaScript, un ambiente lessicale è il posto in cui viene fisicamente scritto il codice. Nell'esempio qui sotto, la variabile name dal punto di vista lessicale è all'interno della funzione sayName().

function sayName() {
  let name = 'someName';
  console.log('Il nome è, ', name);
 }

Un contesto di esecuzione fa riferimento al codice attualmente in esecuzione e tutto ciò che contribuisce a eseguirlo. Possono esserci molti ambienti lessicali a disposizione ma quello che è attualmente in esecuzione viene gestito dal contesto di esecuzione.
lexical
Lexical Environment vs Execution Context

Ciascun contesto di esecuzione contiene un record di ambiente. Quando il motore JavaScript esegue il codice, variabili e nomi di funzioni vengono aggiunti al record di ambiente.

Questo fenomeno è noto in JavaScript come binding. Il binding aiuta l'associazione degli identificatori (variabili e nomi di funzioni) con la parola chiave this per costituire un contesto di esecuzione.

Non preoccuparti se trovi questo concetto difficile da capire adesso. Ne avrai una migliore comprensione mano a mano che procediamo.
Regola #1: Come Funziona il Binding Implicito di JavaScript

Il binding implicito copre la maggior parte dei casi d'uso per quanto riguarda la parola chiave this.

Quando invochiamo un metodo di un oggetto, usiamo la notazione punto (.) per accedervi. Nel binding implicito, devi verificare l'oggetto adiacente al metodo in fase di invocazione. Questo determina a cosa viene associato this.

Esaminiamo un esempio per capire meglio.

let blog = {
    name: 'Tapas',
    address: 'freecodecamp',
    message: function() {
        console.log(`${this.name} ha un blog su ${this.address}`);
    }
};

blog.message();

Qui this viene associato all'oggetto blog. Lo sappiamo perché chiamiamo il metodo message() sull'oggetto blog. Pertanto this.name sarà Tapas e this.address sarà  freeCodeCamp e tali valori verranno stampati nella console.

Vediamo un altro esempio per capire meglio questo concetto:

 function greeting(obj) {
      obj.logMessage = function() {
          console.log(`${this.name} ha ${this.age} anni!`);
      }
  };

  const tom = {
      name: 'Tom',
      age: 7
  };

  const jerry = {
      name: 'jerry',
      age: 3
  };

  greeting(tom);
  greeting(jerry);

  tom.logMessage ();
  jerry.logMessage ();

In questo esempio abbiamo due oggetti,  tom e jerry. Abbiamo decorato (arricchito) questi oggetti con un metodo chiamato logMessage().

Nota che quando invochiamo tom.logMessage(), il metodo viene chiamato sull'oggetto tom. Pertanto this è associato all'oggetto tom e i valori stampati saranno tom e 7 (this.name equivale a tom e this.age in questo caso è  7). Lo stesso vale quando viene invocato jerry.logMessage().
Regola #2: Come Funziona In JavaScript il Binding Esplicito

Abbiamo visto che JavaScript crea un ambiente per eseguire il codice che scriviamo. Si occupa della creazione in memoria di variabili, funzioni, oggetti e così via nella fase di creazione. Successivamente esegue il codice nella fase di esecuzione. Questo ambiente speciale viene chiamato contesto di esecuzione.

Possono essercene molti di questi ambienti (contesti di esecuzione) in un'applicazione JavaScript. Ogni contesto di esecuzione opera indipendentemente dagli altri.

A volte, tuttavia, potremmo voler usare cose che si trovano in un altro contesto di esecuzione. Ecco quando entra in gioco il binding esplicito.

Nel binding esplicito chiamiamo una funzione con un oggetto quando la funzione è al di fuori del contesto di esecuzione di quell'oggetto.

Ci sono tre metodi molto speciali:  call(), apply() e bind() che ci aiutano a ottenere il binding esplicito.
Come Funziona il Metodo call() di JavaScript

Con il metodo call(), il contesto nel quale la funzione deve essere chiamata verrà passato come parametro a  call(). Vediamo come funziona con un esempio:

let getName = function() {
     console.log(this.name);
 }
 
let user = {
   name: 'Tapas',
   address: 'Freecodecamp'  
 };

getName.call(user);

Qui sopra il metodo call() viene invocato su una funzione chiamata getName(). La funzione getName() stampa semplicemente alla console il valore di this.name. Ma cosa rappresenta this qui? Questo dipende da cosa è stato passato al metodo call().

In questo caso this sarà associato all'oggetto user, in quanto lo abbiamo passato come parametro al metodo call(). Pertanto this.name dovrebbe avere il valore associato alla proprietà name dell'oggetto user, vale a dire Tapas.

Nell'esempio qui sopra abbiamo passato solo un argomento a call(). Tuttavia  possiamo passare molteplici argomenti a call(), in questo modo:

let getName = function(hobby1, hobby2) {
     console.log('A ' + this.name + ' piace ' + hobby1 + ' , ' + hobby2);
 }

let user = {
   name: 'Tapas',
   address: 'Bangalore'  
 };

let hobbies = ['Nuotare', 'Tenere un Blog'];
 
getName.call(user, hobbies[0], hobbies[1]);

Qui abbiamo passato diversi argomenti al metodo call(). Il primo argomento deve essere il contesto dell'oggetto nel quale la funzione deve essere chiamata. Gli altri parametri potrebbero essere semplicemente valori da usare.

In questo caso sto passando Nuotare e Tenere un Blog come due parametri della funzione getName().

Hai notato il punto dolente qui? Nel caso di call(), gli argomenti devono essere passati uno ad uno  – il che non è un modo intelligente di fare le cose!. Ecco quando il nostro prossimo metodo, apply(), entra in  gioco.
Come Funziona il Metodo apply() in JavaScript

Questo modo di passare argomenti al metodo call() può essere risolto usando un metodo alternativo chiamato apply(). Funziona esattamente come call(), ma ti consente di passare gli argomenti in modo più conveniente. Dai un'occhiata a questo codice:

let getName = function(hobby1, hobby2) {
     console.log('A ' + this.name + ' piace ' + hobby1 + ' , ' + hobby2);
 }
 
let user = {
   name: 'Tapas',
   address: 'Bangalore'  
 };

let hobbies = ['Nuotare', 'Tenere un Blog'];
 
getName.apply(user, hobbies);

Qui siamo in grado di passare un array di argomenti, il che è molto più conveniente rispetto al passarli ad uno ad uno.

Suggerimento: Quando hai solo uno o nessun valore di argomento da passare, usa call(). Quando hai diversi valori di argomento, usa apply().
Come Funziona il Metodo bind() di JavaScript

Il metodo bind() è simile al metodo call(), con una differenza: diversamente da call(), che chiama la funzione direttamente,  bind() ritorna una funzione completamente nuova che possiamo invocare.

let getName = function(hobby1, hobby2) {
     console.log('A ' + this.name + ' piace ' + hobby1 + ' , ' + hobby2);
 }

let user = {
   name: 'Tapas',
   address: 'Bangalore'  
 };

let hobbies = ['Nuotare', 'Tenere un Blog'];
let newFn = getName.bind(user, hobbies[0], hobbies[1]); 

newFn();

Qui getName.bind() non chiama la funzione getName() direttamente. Ritorna una nuova funzione, newFn che possiamo invocare come newFn().
Rule #3: Il Binding new di JavaScript

La parola chiave new è usata per creare un oggetto dalla funzione costruttore.

let Cartoon = function(name, character) {
     this.name = name;
     this.character = character;
     this.log = function() {
         console.log(this.name +  ' è un ' + this.character);
     }
 };

Puoi creare oggetti usando la parola chiave new in questo modo:

 let tom = new Cartoon('Tom', 'Gatto');
 let jerry = new Cartoon('Jerry', 'Topo');

Quando una funzione viene invocata con la parola chiave new, JavaScript crea un oggetto this interno (così: this = {}) nella funzione. Il this appena creato si associa all'oggetto in fase di creazione usando la parola chiave new.

Sembra complicato? Ok, esaminiamolo approfonditamente. Osserva questa riga:

let tom = new Cartoon('Tom', 'Gatto');

Qui la funzione Cartoon viene invocata con la parola chiave new . Quindi il this creato internamente sarà associato al nuovo oggetto creato qui, che è tom.
Regola #4: Binding dell'Oggetto Globale di JavaScript

Quale pensi che sarà il risultato del codice qui sotto? A cosa è associato this qui?

let sayName = function(name) {
    console.log(this.name);
};

window.name = 'Tapas';
sayName();

Se la parola chiave this non viene risolta con alcuno dei binding, implicito, esplicito o new, allora this viene associata all'oggetto globale window() .

Esiste un'eccezione, tuttavia, la modalità strict (strict mode) di JavaScript non consente questo binding predefinito.

"use strict";
function myFunction() {
  return this;
}

Nell'esempio qui sopra,  this è undefined.
Regola #5: Binding di un Evento HTML in JavaScript

Nei gestori di eventi HTML, this viene associato all'elemento HTML che riceve l'evento.

<button onclick="console.log(this)">Click Me!</button>

Questo è il risultato nella console del click sul pulsante:

"<button onclick='console.log(this)'>Click Me!</button>"

Puoi cambiare lo stile del pulsante al click dell'utente usando la parola chiave this, in questo modo:

<button onclick="this.style.color='teal'">Click Me!</button>

Tuttavia, fai attenzione quando chiami una funzione per gestire un clic del pulsante e usi this all'interno di quella funzione; ipotizziamo questo codice HTML.

<button onclick="changeColor()">Click Me!</button>

e questo codice JavaScript:

function changeColor() {
  this.style.color='teal';
}

Quanto sopra non funzionerà come atteso. Come abbiamo visto nella regola  4, in questo caso this sarà associato all'oggetto globale (in modalità non strict), laddove non esiste un oggetto style con il quale impostare il colore.
Riepilogo

Per riassumere,

    In caso di binding implicito,  this viene associato all'oggetto adiacente all'operatore punto (.) quando si invoca il metodo.
    In caso di binding esplicito, possiamo chiamare una funzione con un oggetto quando la funzione è al di fuori del contesto di esecuzione dell'oggetto stesso. I metodi call(), apply(), e bind() giocano un grosso ruolo qui.
    Quando una funzione viene chiamata con la parola chiave new, la parola chiave this all'interno della funzione si associa al nuovo oggetto che si sta costruendo.
    Quando la parola chiave  this non è risolta con alcuna dei binding, implicito, esplicito o new, allora this viene associato all'oggetto globale window(). Nella modalità strict di JavaScript, this sarà undefined.
    Nei gestori di evento HTML,  this viene associato all'elemento HTML che riceve l'evento.

C'è un ulteriore caso nel quale  this si comporta in modo differente, vale a dire le funzioni freccia E6. Daremo uno sguardo a questo caso in un articolo successivo.

Spero che tu abbia trovato utile questo articolo. Ti potrebbero anche piacere:

    JavaScript Hoisting Internals
    Understanding JavaScript Execution Context like never before
    JavaScript Scope Fundamentals with Tom and Jerry
    Understanding JavaScript Closure with example

Se hai apprezzato questo articolo, condividilo in modo che altri lo possano leggere. Puoi menzionarmi su Twitter (@tapasadhikary) nei tuoi commenti, oppure sentiti libero di seguirmi.


*/




/*destrutturazione oggetti

Destrutturazione in JavaScript: come destrutturare array e oggetti
Angelo Mirabelli
Traduttore: Angelo Mirabelli
Alvin Okoro
Autore: Alvin Okoro (inglese)
Destrutturazione in JavaScript: come destrutturare array e oggetti

Articolo originale: Destructuring in JavaScript – How to Destructure Arrays and Objects

Lavorare con array e oggetti in JavaScript può essere più divertente se li destrutturate. Questo aiuta quando stai recuperando i dati memorizzati.

In questo articolo imparerai come portare la destrutturazione al livello successivo negli array e negli oggetti in JavaScript.
Sommario:

    Che cos'è un array?
    Cos'è un oggetto?
    Cosa significa destrutturare in JavaScript
    Destrutturazione in array
    Destrutturazione in oggetti

Che cos'è un array in JavaScript?

In JavaScript, un array è una singola variabile che memorizza più elementi. È una raccolta di dati. Possiamo dichiarare un array in due modi diversi, che sono:

//metodo 1
const firstArray = ["JavaScript", "Python", "Go"]

//metodo 2
const secondArray = new Array(3)
secondArray[0] = "JavaScript"
secondArray[1] = "Python"
secondArray[2] = "Go"

Nel metodo 1, puoi inizializzare mentre dichiari la tua matrice. Nel metodo 2, dichiari la tua matrice con il numero di elementi da archiviare prima dell'inizializzazione.
Che cos'è un oggetto in JavaScript?

In JavaScript, un oggetto è una raccolta di proprietà e una proprietà è un'associazione tra un nome (o chiave ) e un valore.

Scrivere un oggetto in JavaScript sembra in qualche modo simile a un array, ma invece usiamo parentesi graffe. Diamo un'occhiata al codice seguente che mostra un oggetto di nome auto con le sue proprietà:

const auto = {
    name: "Toyota",
    color: "nero",
    year: 2022,
    engineType: "Automatico"
}

Si noti che ciò che costituisce un oggetto è una chiave seguita dal suo valore.

Ora che conosci le basi dell'aspetto degli array e degli oggetti JavaScript, parliamo di più circa la destrutturazione.
Che cos'è la destrutturazione in JavaScript?

Immagina di voler scegliere delle scarpe dalla tua collezione e di volere le tue preferite, quelle di colore blu. La prima cosa che devi fare è cercare nella tua collezione e estrarre tutto ciò che hai lì.

Ora la destrutturazione è proprio come l'approccio che hai adottato quando cercavi le tue scarpe. La destrutturazione è l'atto di estrarre gli elementi da un array o da un oggetto.

La destrutturazione non solo ci consente di disimballare gli elementi, ma ti dà anche il potere di manipolare e cambiare gli elementi che hai disimballato a seconda del tipo di operazione che desideri eseguire.

Vediamo ora come funziona la destrutturazione negli array e negli oggetti.
Destrutturazione in array

Per destrutturare un array in JavaScript, utilizziamo le parentesi quadre [] per memorizzare il nome della variabile che verrà assegnato al nome dell'array che memorizza l'elemento.

const [var1, var2, ...] = arrayName

I puntini di sospensione subito dopo la dichiarazione di var2 significano semplicemente che possiamo creare più variabili a seconda di quanti elementi vogliamo rimuovere dall'array.
Come assegnare variabili con la destrutturazione

Ora, supponiamo di avere un array di 6 colori ma vogliamo ottenere solo i primi 2 colori in esso contenuti. Possiamo destrutturare per ottenere ciò che vogliamo.

Diamo un'occhiata ora:

const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);

// red, yellow

image

Quando eseguiamo il codice sopra, dovremmo avere red e il yellow stampati sulla console. Stupendo!
Come scambiare il valore di variabili con destructuring

Ora che sai come assegnare variabili con la destrutturazione, diamo un'occhiata a come puoi usare la destrutturazione per scambiare velocemente il valore di variabili.

Diciamo che abbiamo un array di due elemenenti, "food" e "fruits", e usiamo la destrutturazione per assegnare questi valore alle variabili positionOne e positionTwo:

const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
console.log(positionOne, positionTwo);

// food, fruits

Se in seguito vogliamo scambiare i valori di positionOne e positionTwo senza usare la destrutturazione, dovremmo usare un'altra variabile per tenere temporaneamente il valore di una delle due variabili, e poi fare lo scambio.

Per esempio:

const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
const temp = positionOne;

positionOne = positionTwo;
positionTwo = temp;
console.log(positionOne, positionTwo);

// fruits, food

Ma con la destrutturazione, possiamo scambiare i valori delle variabili positionOne e positionTwo molto facilmente, senza usare una variabile temporanea:

const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
[positionOne, positionTwo] = [positionTwo, positionOne];
console.log(positionOne, positionTwo);

// fruits, food

Nota che questo metodo di scambiare le variabili non muta l'array originale. Se stampi edibles nella console, vedrai che il suo valore è sempre ["food", "fruits"].
image-1
Come mutare gli Array con la destrutturazione

Mutare significa mutare la forma o il valore di un elemento. Un valore si dice mutabile se può essere cambiato. Con l'aiuto della destrutturazione negli array, possiamo mutare gli array stessi.

Diciamo di avere lo stesso array edibles, e che lo vogliamo mutare scambiando l'ordine degli elementi "food" e "fruits".

Possiamo farlo con la destrutturazione in un modo simile a come prima abbiamo scambiato il valore di due variabili:

const edibles = ["food", "fruits"];

[edibles[0], edibles[1]] = [edibles[1], edibles[0]];
console.log(edibles);

// ["fruits", "food"]

Destrutturazione in oggetti

Quando si destrutturano oggetti, utilizziamo parentesi graffe con il nome esatto di ciò che abbiamo nell'oggetto. A differenza degli array in cui è possibile utilizzare qualsiasi nome di variabile per decomprimere l'elemento, gli oggetti consentono solo l'uso del nome dei dati archiviati.

È interessante notare che possiamo manipolare e assegnare un nome di variabile ai dati che vogliamo ottenere dall'oggetto. Ora vediamo tutto questo nel codice.

const freeCodeCamp = {
    frontend: "React",
    backend: "Node",
    database: "MongoDB"
}

const {frontend, backend} = freeCodeCamp
console.log(frontend, backend);
// react, node

3-4

La stampa di ciò che abbiamo sulla console mostra il valore di frontend e backend. Vediamo ora come assegnare un nome di variabile all'oggetto che vogliamo decomprimere.

const freeCodeCamp = {
    frontend: "React",
    backend: "Node",
    database: "MongoDB"
}
 tutto questo frontend:corseONe associamo un nome di variabile all'oggetto che vogliamo decomprimere o meglio alla proprietà dell 'oggetto...fantasy:Fantasy
const {frontend: courseOne, backend: courseTwo} = freeCodeCamp
console.log(courseOne, courseTwo);
// react, node

4-2

Come puoi vedere, abbiamo courseOne e courseTwo come nomi dei dati che vogliamo decomprimere.

L'assegnazione di un nome di variabile ci aiuterà sempre a mantenere pulito il nostro codice, specialmente quando si tratta di lavorare con dati esterni quando vogliamo decomprimerli e riutilizzarli nel nostro codice.
Ricapitolando

Ora hai imparato come lavorare con la destrutturazione di array e oggetti. Hai anche imparato a cambiare le posizioni degli elementi negli array.

Quindi che succede adesso? Prova a esercitarti e porta le tue capacità di destrutturazione al livello successivo.
*/


/*passare data da padre e figlio e viceversa


Articolo originale: How to Pass Data and Events Between Components in React

Se stai tentando di implementare operazioni CRUD utilizzando gli endpoint API, potresti scoprire che è difficile gestire i dati su più componenti.

O forse hai un modale, ma vuoi attivarlo da un componente diverso.

Capire come affrontare questi scenari può essere difficile.

In questo tutorial, ti mostrerò come puoi farlo.
Come passare i dati tra un componente padre e un componente figlio

In primo luogo, passiamo i dati tra un componente padre e un componente figlio. .

Innanzitutto, dovrai creare due componenti, un Parent e un Child.

import React from 'react'

export default function Parent() {
  return (
    <div>
      
    </div>
  )
}

Parent.js

import React from 'react'

export default function Child() {
    return (
        <div>
            
        </div>
    )
}

Child.js

Successivamente, importerai il componente Child nel componente Parent e lo restituirai.

import React from 'react'
import Child from './Child';

export default function Parent() {
  return (
    <div>
      <Child/>
    </div>
  )
}

Chiama il componente figlio nel componente padre

Quindi creerai una funzione e un pulsante per attivare quella funzione. Inoltre, creerai uno stato utilizzando l'Hook useState  per gestire i dati.

import React from 'react'
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';

export default function Parent() {
  const [data, setData] = useState('');
  
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div className="App">
      <Child/>
      
      <div>
        <Button primary onClick={() => parentToChild()}>Click Parent</Button>
      </div>
    </div>
  )
}

Come puoi vedere qui, stiamo chiamando la funzione parentToChild sul pulsante Click Parent . Quando si fa clic sul pulsante Parent, esso memorizzerà "This is data from Parent Component to the Child Component" nella variabile data .

Passiamo ora lo stato dei dati ai nostri componenti figlio. Puoi farlo usando i props.

Passa i dati come props quando chiami il componente figlio, in questo modo:

<Child parentToChild={data}/>

Parent.js

Qui stiamo passando i dati nel componente figlio come data .

data è il dato che dobbiamo trasmettere, e parentToChild è il nome del prop.

Successivamente, è il momento di acquisire i dati nel componente figlio. Ed è molto semplice.

Qui, ci possono essere due casi.

Caso 1: se stai utilizzando un componente funzionale, prendi semplicemente parentToChild nei parametri.

import React from 'react'

export default function Child({parentToChild}) {
    return (
        <div>
            {parentToChild}
        </div>
    )
}

Componente funzionale di reazione

Caso 2: se hai un componente di classe, usa semplicemente this.props.parentToChild.

import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                {this.props.parentToChild}
            </div>
        )
    }
}

Componente della classe di reazione

In ogni caso, otterrai gli stessi risultati:
Screenshot-2021-06-06-132836

Quando facciamo clic sul pulsante Click Parent, vedremo i dati come output sullo schermo.

import React from 'react'
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';

export default function Parent() {
  const [data, setData] = useState('');
  
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div className="App">
      <Child parentToChild={data}/>
      
      <div className="child">
        <Button primary onClick={() => parentToChild()}>Click Parent</Button>
      </div>
    </div>
  )
}

Sopra vedrai il codice completo per Parent Component.
Come passare i dati tra un componente figlio e un componente padre

Questo è un po' più complicato.

Innanzitutto, devi creare una funzione nel componente padre chiamata   childToParent e uno stato vuoto chiamato data.

const [data, setData] = useState('');

const childToParent = () => {
   
}

Componente genitore

Quindi, passa la funzione childToParent come supporto al componente figlio.

<Child childToParent={childToParent}/>

Passaggio di childToParent al componente figlio.

Ora, nel nostro componente figlio, accetta questa chiamata di funzione come prop e assegnala a un evento onClick.

Inoltre, dichiara uno stato che contiene alcuni dati sotto forma di stringa o numero.

Passa i dati nella funzione parentToChild come parametri.

import React from 'react'
import { Button } from 'semantic-ui-react';

export default function Child({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <div>
            <Button primary onClick={() => childToParent(data)}>Click Child</Button>
        </div>
    )
}

Componente figlio

Successivamente, nel componente padre, accetta questi dati nella funzione childToParent come parametro. Quindi imposta i dati usando l'hook useState.

import './App.css';
import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="App">
      <div>
        <Child/>
      </div>
    </div>
  );
}

export default Parent;

Componente genitore

Quindi, mostra quella variabile di dati nella funzione di ritorno.

import './App.css';
import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="App">
     {data}
      <div>
        <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}

export default Parent;

Componente genitore

I dati figlio sovrascriveranno i dati padre quando si fa clic sul pulsante  Click Child .
Screenshot-2021-06-06-134803

Ora puoi passare i dati da Child a Parent e da Parent a Child come un professionista.
Puoi anche trasmettere eventi come onClick o OnChange

Basta chiamare un metodo di avviso nella funzione childToParent e passare quella funzione come supporto al componente figlio .

import './App.css';
import Child from './Child';

function Parent() {
  const childToParent = () => {
    alert("This is an alert from the Child Component")
  }

  return (
    <div className="App">
      <div className="child">
        <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}

export default Parent;

Componente genitore

E nel componente figlio , accetta la funzione childToParent come prop. Quindi assegnalo a un evento onClick su un pulsante.

import React from 'react'
import { Button } from 'semantic-ui-react';

export default function Child({childToParent}) {
    return (
        <div>
            <Button primary onClick={() => childToParent()}>Click Child</Button>
        </div>
    )
}

Componente figlio

La tua funzione nel componente padre verrà richiamata quando fai clic sul pulsante nel componente figlio e vedrai questo avviso:
Screenshot-2021-06-06-140405

Questo è tutto!

Puoi trovare il codice su Github se vuoi ulteriormente sperimentare.

    Bene, questo è tutto gente. Buon apprendimento.

*/










