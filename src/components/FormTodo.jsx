import React, { useState }  from 'react';


const FormTodo = props => {
    const [description, setDescription] = useState("")
    const {handleAddItem} = props

    // Function que se ejecuta cuando hay un evento submit en el form. Sea del input o del botón
    const handleSubmit = e => {
    e.preventDefault()
    
    handleAddItem({
        done:false,
        id:(+new Date()).toString(),
        description
    })
    setDescription("") // Limpio el estado
    }

    return (
        <form onSubmit={handleSubmit}>
         <div className='todo-list'>
         <div className='file-input'>
          <input
           type="text"
           className='text'
           // Le doy el value que tiene description que inicializé con un string vacio
           value={description}
           // Cuando haya un cambio seteo la description y le paso lo que ingresan en el input
           onChange={e => setDescription(e.target.value)}
           />
         <button
         className='button-pink'
         // Si la description (input) está vacio le asigno a 
         disabled={description ? "" : "disabled"}
         >
        Add
         </button>


         </div>
         </div>

        </form>
    )
}

export default FormTodo