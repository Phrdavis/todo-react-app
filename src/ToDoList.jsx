import {useState} from "react";

function TodoList(){
    
    const [tasks, setTasks] = useState(['teste1', 'teste2'])
    const [newTask, setNewTask] = useState('');

    function inputChange(event){

        setNewTask(event.target.value);

    }

    function addTask(){

        if(newTask != ''){

            setTasks( t => [...t, newTask]);
            setNewTask('');

        }

    }

    function removeTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);

    }

    function moveUp(index){

        const updatedTasks = [...tasks];

        if(index > 0){

            [updatedTasks[index], updatedTasks[index-1]] =
            [updatedTasks[index-1], updatedTasks[index]];

            setTasks(updatedTasks)

        }

    }

    function moveDown(index){

        const updatedTasks = [...tasks];

        if(index < updatedTasks.length - 1){

            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];

            setTasks(updatedTasks)

        }

    }

    return(
        <div className="todoList"> 

            <h2 className="todoTittle">To-do List</h2>
            <div>
                <input  className="todoInput"
                        type="text"
                        placeholder="Enter a Task"
                        value={newTask}
                        onChange={inputChange}
                        />
                <button className="todoAdd"
                        onClick={ addTask }
                        >ADD</button>
            </div>

            <ol>

                {tasks.map((element, index) => 

                    <li key={index}>
                        <span>{element}</span>
                        <div className="container-buttons">
                            <button className="delete"
                                    onClick={ () => removeTask(index) }
                                    >DELETE</button>
                            <button className="up"
                                    onClick={ () => moveUp(index) }
                                    >UP</button>
                            <button className="down"
                                    onClick={ () => moveDown(index) }
                                    >DOWN</button>
                        </div>
                    </li>

                )}

            </ol>

        </div>
        )

}

export default TodoList;