import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
// css imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import MainRoute from './routes/MainRoute.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Toaster
            position="top-center"
            reverseOrder={false}
     />
    <MainRoute/>
    </BrowserRouter>
 
)
