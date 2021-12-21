import React  from 'react';
import Checkbox from './Checkbox';

const TaskList = props => {
    // recibo el atributo list por props que comienza vacio  y su funcion para setearlo
    // Creo las variables list y ssetList y le paso lo que recibo en las props
    const { list, setList } = props;
  
    const onChangeStatus = e => {
      const { name, checked } = e.target;
  
      // 
      const updateList = list.map(item => ({
        ...item,
        done: item.id === name ? checked : item.done
      }));
      setList(updateList);
    };
  
    // 
    const onClickRemoveItem = e => {
        // Si no está marcada la tarea borro
      const updateList = list.filter(item => !item.done);
      setList(updateList);
    };
  
    // (A-2)
    const chk = list.map(item => (
      <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
      <div className="todo-list">
        {/*(A-1)*/}
        {list.length ? chk : "No tasks"}
        {/*(B)*/}
        {list.length ? (
          <p>
            <button className="button blue" onClick={onClickRemoveItem}>
              Delete all done
            </button>
          </p>
        ) : null}
      </div>
    );
  };
export default TaskList