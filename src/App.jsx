import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Projects from './component/Projects';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';

function App() {
const name = "vinayak";
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects/:id' element={<Projects />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/resume' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
