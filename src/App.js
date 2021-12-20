import './App.css';
// Hook de react que nos da una variable y una función para modificar esa variable
import {useState} from "react"

function App() {
  // Varible y su función. 
  // Tengo que usar si o si la función para poder cambiar mi varible y eso actualiza mi estado y reenderiza el componente
  const [text, setText] = useState("")// Inicializo la variable con un string vacio
  const [items, setItems] = useState([])


  function addItems(){
    // Uso el operador spread para obtener los items que están guardados en mi state.
    let temp = [...items, text] 
    setItems(temp) //  Le agrego el item nuevo con text a mi array de items
    setText("")  // Vacio el input después de agregar el item
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Tasks</h1>
      <div className="entry-container">
        {/* al input le doy el valor de text */}
       <input placeholder='Schedule your homework' value={text} onChange={(e) => setText(e.target.value)}/>
        <button className='button' onClick={addItems}>Add</button>
      </div>
      <div className="container-list">
        <ul>
          {items.map( (item) => <li className='items-list'> {item} </li> )}
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
