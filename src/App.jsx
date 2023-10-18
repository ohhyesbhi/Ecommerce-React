import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {


  return(
    <>
     <Header light={true} expand="md" container="md" color="light" fixed="top"/>
      <Footer/>
    </>
  )
}

export default App
