// state -> state is a variable that holds data that can change over time
// Hooks -> Hooks are functions that let you use state and other React features 
// without writing a class

import { createContext } from "react"
import AdvancedTodo from "./Pages/AdvancedTodo"
import ParentComponent from "./Pages/ParentComponent"
import StateHook from "./Pages/StateHook"
import TodoList from "./Pages/TodoList"

// property (props) -> props is a way to pass data from a parent component to a child component

export const context = createContext()

const App = () => {
    // return <ParentComponent />
    // return <TodoList />
    return <context.Provider value={"Hello World"}>
        <AdvancedTodo />
    </context.Provider>
}

export default App  