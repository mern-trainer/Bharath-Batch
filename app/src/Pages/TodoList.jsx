import { useState } from "react"
import { toast } from "react-toastify"
import TodoListCard from "../Components/TodoListCard"

const TodoList = () => {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (task.trim() == "") {
            return toast.error("Task cannot be empty")
        }
        if (todos.includes(task)) {
            return toast.error("Task already exists")
        }
        setTodos([...todos, task])
        setTask("")
        return toast.success("Task added successfully")
    }

    const handleDelete = (index) => {
        const res = todos.filter((_, idx) => idx != index)
        setTodos(res)
        return toast.success("Task deleted successfully")
    }
    
    return <div className="d-flex flex-column align-items-center gap-3 mt-3">
        <form onSubmit={handleSubmit} className="w-50">
            {/* controlled input */}
            <input value={task} onChange={(event) => setTask(event.target.value)} type="text" placeholder="Eg: Buy Groceries" className="p-2 w-100 border border-2 border-secondary" style={{outline: 0}}/>
            <button className="btn btn-secondary w-100 rounded-0 mt-2">Add Task</button>
        </form>
        <div className="w-50 d-flex flex-column gap-2">
            {
                todos.map((todo, index) => {
                    // key -> unique identifier to identify which element is removed, added or updated
                    return <TodoListCard handleDelete={handleDelete} index={index} todo={todo} key={index}/>
                })
            }
        </div>
    </div>
}

export default TodoList