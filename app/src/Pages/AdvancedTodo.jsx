import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import DisplayTask from "../Components/DisplayTask"
import { toast } from "react-toastify"

const AdvancedTodo = () => {

    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim() == "") {
            return toast.error("Task cannot be empty")
        }
        const index = taskList.findIndex(item => item.title.toLowerCase() == task.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exists")
        }
        const dateTime = new Date().toISOString()
        const taskObj = {
            id: uuidv4(),
            title: task,
            status: "Pending",
            createdAt: dateTime,
            updatedAt: dateTime
        }
        setTaskList([taskObj, ...taskList])
        setTask("")
        return toast.success("Task added successfully")
    }

    return <div className="px-2 mt-2 d-flex flex-column align-items-center">
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "500px" }}>
            <input onChange={e => setTask(e.target.value)} value={task} type="text" placeholder="Eg: Complete Assignment 1 and 2" className="p-2 rounded w-100 border border-0" style={{ outline: 0 }} />
            <button className="mt-2 bg-secondary w-100 p-1 border border-0 rounded text-light">Add Todo</button>
        </form>
        <DisplayTask setTaskList={setTaskList} taskList={taskList} type={"Pending"} />
        <DisplayTask setTaskList={setTaskList} taskList={taskList} type={"Completed"} />
    </div>
}

export default AdvancedTodo