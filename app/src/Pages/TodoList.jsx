import { useState } from "react"
import { toast } from "react-toastify"

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
    
    return <div className="d-flex flex-column align-items-center gap-3 mt-3">
        <form onSubmit={handleSubmit} className="w-50">
            {/* controlled input */}
            <input value={task} onChange={(event) => setTask(event.target.value)} type="text" placeholder="Eg: Buy Groceries" className="p-2 w-100 border border-2 border-secondary" style={{outline: 0}}/>
            <button className="btn btn-secondary w-100 rounded-0 mt-2">Add Task</button>
        </form>
        <div className="w-50">
            {todos.join(" , ")}
        </div>
    </div>
}

export default TodoList