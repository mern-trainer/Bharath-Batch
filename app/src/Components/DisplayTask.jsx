import { toast } from "react-toastify"

const DisplayTask = ({ taskList, type, setTaskList }) => {

    const handleCompleted = id => {
        const res = taskList.map(item => {
            if (item.id == id) {
                if (item.status == "Pending") {
                    item.status = "Completed"
                } else {
                    item.status = "Pending"
                }
            }
            return item
        })
        setTaskList(res)
        return toast.success("Task status changed successfully")
    }

    const handleDelete = id => {
        const res = taskList.filter(item => item.id != id)
        setTaskList(res)
        return toast.success("Task deleted successfully")
    }

    return <div className="mt-3 d-flex flex-column gap-2" style={{ width: "100%", maxWidth: "500px" }}>
        <h2>{type} Tasks ({ taskList.filter(item => item.status == type).length })</h2>
        {
            taskList.filter(item => item.status == type).map((todo) => {
                return <div key={todo.id} className="bg-light p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <div>Task: {todo.title}</div>
                        <div>Status: {todo.status}</div>
                    </div>
                    <div className="d-flex gap-1 flex-column">
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                        <button className="btn btn-sm btn-primary" onClick={() => handleCompleted(todo.id)}>{type}</button>
                    </div>
                </div>
            })
        }
    </div>
}

export default DisplayTask