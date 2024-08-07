import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Dash from './components/Dash/Dash'
import Work from './components/Work/Work'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/dash' element={<Dash/>}/>
      </Routes>
    </div>
  )
}

export default App