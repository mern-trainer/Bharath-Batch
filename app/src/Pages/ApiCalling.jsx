import { useEffect, useState } from "react"
import { FaArrowRotateRight } from "react-icons/fa6"
import { toast } from "react-toastify"
import { api } from "../axios"

// axios -> GET, POST, PUT, DELETE, PATCH
// get -> fetch data from server
// post -> send data to server
// put -> replace data on server
// delete -> delete data from server
// patch -> partial update

const ApiCalling = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    const getUsers = async () => {
        try {
            const limit = 10
            const skip = (page - 1) * limit
            const { data } = await api.get(`/users?limit=${limit}&skip=${skip}`)
            setUsers(users => ([...users, ...data.users]));
        } catch (err) {
            return toast.error("Error occured while fetching users.")
        }
    }

    useEffect(() => {
        getUsers()
    }, [page])

    return <div>
        <h2 className="text-center text-uppercase mt-2 mb-4">List Of Users</h2>
        <div className="container-fluid">
            <div className="row p-2">
                {
                    users.map(user => {
                        return <div key={user.id} className="col-12 p-3 col-sm-6 col-md-4 col-xl-3  text-start">
                            <div className="d-flex align-items-center justify-content-start gap-2"><img src={user.image} alt={user.firstName} className="rounded-circle me-2" style={{width: "30px", height: "30px"}}/><h5 className="text-truncate">{user.firstName} {user.lastName}</h5></div>
                            <div className="text-truncate">Email: {user.email}</div>
                            <div className="text-truncate">Mobile: {user.phone}</div>
                            <div className="text-truncate">DOB: {user.birthDate}</div>
                            <div className="text-truncate">Gender: {user.gender}</div>
                        </div>
                    })
                }
            </div>
            <div className="text-center my-3" style={{cursor: "pointer"}} onClick={() => setPage(page => page + 1)}>More <FaArrowRotateRight /></div>
        </div>
    </div>
}

export default ApiCalling