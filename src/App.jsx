import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Projects from './component/Projects';

function App() {
const name = "vinayak";
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects/:id' element={<Projects />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
