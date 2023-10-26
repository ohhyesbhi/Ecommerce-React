import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import MainRoute from './routes/MainRoute.jsx';
import { CookiesProvider } from 'react-cookie';
// css imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <CookiesProvider defaultSetOptions={{path :"/"}}>
       <Toaster
            position="top-center"
            reverseOrder={false}
       />

       <MainRoute/>
    </CookiesProvider>
    </BrowserRouter>
 
)
