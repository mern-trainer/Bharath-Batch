import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { ToastContainer } from 'react-toastify';
import { SampleProvider } from './Context/SampleContext';
import { CounterProvider } from './Context/CounterContext';

createRoot(document.getElementById("root")).render(<CounterProvider>
    <SampleProvider>
        <App />
        <ToastContainer autoClose={2000} />
    </SampleProvider>
</CounterProvider>)