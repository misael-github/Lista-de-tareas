// import { handle } from 'express/lib/router';
import React, { useState }  from 'react';
import FormTodo from './FormTodo';
import TaskList from './TaskList';


const Container = () => {
    const [list, setList] = useState([])
    // creo una funcion para que cuando se ejecute le seteé a mi estado list lo que ya tenia más el nuevo item
    const handleAddItem = addItem => {
        setList([...list, addItem])
    }


    return (
        <div>
        {/* A el componente form le creo el atributo handleAddItem y le paso la función */}
        <FormTodo handleAddItem= {handleAddItem}/>
        <TaskList list={list} setList={setList}/>

        </div>

    )
}

export default Container