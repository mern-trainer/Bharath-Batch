import { useEffect, useState } from "react"
import { FaArrowRotateRight } from "react-icons/fa6"
import { toast } from "react-toastify"

const ApiCalling = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    const getUsers = async () => {
        try {
            const limit = 10
            const skip = (page - 1) * limit
            const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
            const res = await response.json()
            setUsers(users => ([...users, ...res.users]));
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
                        return <div key={user.id} className="col-12 p-3 col-sm-6 col-md-4 col-xl-3  text-center">
                            <h5><img src={user.image} alt={user.firstName} className="rounded-circle me-2" style={{width: "30px", height: "30px"}}/>{user.firstName} {user.lastName}</h5>
                            <div className="text-truncate">{user.email}</div>
                            <div>{user.phone}</div>
                        </div>
                    })
                }
            </div>
            <div className="text-center my-3" style={{cursor: "pointer"}} onClick={() => setPage(page => page + 1)}>More <FaArrowRotateRight /></div>
        </div>
    </div>
}

export default ApiCalling