
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hook/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)
  const BASEURL = 'https://user-crud-cp4m.onrender.com'
 // const BASEURL = 'http://localhost:8080'
const [users, getUsers, createUser, deleteUser, updateUser]= useCrud(BASEURL)
useEffect(() => {
  getUsers('/users/')
},[])


const handleOpenForm = () => {
  setFormIsClose(false)
}
  return (
    <>
      <div className='app'>
        <header className='app__header'>
        <h1 className='app__title'>User Crud</h1>
        <button onClick={handleOpenForm} className='form__btn'>+ Create new User</button>
        </header>
        <FormUser 
        createUser = {createUser}
        userEdit = {userEdit}
        updateUser = {updateUser}
        setUserEdit = {setUserEdit}
        formIsClose = {formIsClose}
        setFormIsClose = {setFormIsClose}
        
        />
        <div className='user-container'>
          {
            users?.map(user => (
              <UserCard 
                key={user.id}
                user = {user}
                deleteUser = {deleteUser}
                setUserEdit = {setUserEdit}
                handleOpenForm = {handleOpenForm}
              />
            ))
          }
        </div>
      </div>
   
    </>
  )
}

export default App
