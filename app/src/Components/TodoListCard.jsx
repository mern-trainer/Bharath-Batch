const TodoListCard = ({ todo, handleDelete, index }) => {
    return <div className="bg-secondary d-flex align-items-center justify-content-between text-light p-2 rounded">
        <div>{todo}</div>
        <div>
            <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
        </div>
    </div>
}

export default TodoListCard