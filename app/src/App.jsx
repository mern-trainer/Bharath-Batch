import { BrowserRouter, Route, Routes } from "react-router"
import TodoList from "./Pages/TodoList"
import AdvancedTodo from "./Pages/AdvancedTodo"
import ContextPage from "./Pages/Context"
import EffectPage from "./Pages/EffectPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/todo/basic" Component={TodoList} />
            <Route path="/todo/advanced" Component={AdvancedTodo} />

            <Route path="/context" Component={ContextPage} />
            
            <Route path="/effect" Component={EffectPage} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </BrowserRouter>
}

export default App  