import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'

import ProtectedRoute from './components/ProtectedRoute'
import EditProfile from './pages/EditProfile'

const Rotas = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/create-account' element={<CreateAccount />} />
    <Route path="/edit-profile/:id" element={<EditProfile />} />
    <Route
      path='/home'
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />

    <Route
      path='/profile/:username'
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default Rotas
