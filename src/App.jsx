import './App.css'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  return(
    <>
     <Home/>
     <Toaster
            position="top-center"
            reverseOrder={false}
     />
    </>
  )
}

export default App
