import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './componenets/Login/Login'
import Register from './componenets/register/Register'
import "./App.css"
import Mainlayout from './componenets/Mainlayout/Mainlayout'
import Home from './Home/Home'
import CreatePost from './componenets/crreatePost/CreatePost'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/register' element= {<Register />} />
          <Route  element= {<Mainlayout />} />
          <Route path='/home' element= {<Home />} />
          <Route path='/createPost' element= {<CreatePost />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App