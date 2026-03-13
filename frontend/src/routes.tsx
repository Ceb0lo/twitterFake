import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'

const Rotas = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/home' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/create-account' element={<CreateAccount />} />
  </Routes>
)

export default Rotas
