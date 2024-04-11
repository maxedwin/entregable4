import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUserEdit, handleOpenForm}) => {
    const handleDelete = () => {
        deleteUser('/users/', user.id)
    }
    const handleEdit = () => {
        handleOpenForm()
        setUserEdit(user)
    }
  return (

    <article className='article__container'>
        <h2 className='card__title'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr className='card__hr'/>
        <ul className='card__ul'>
            <li className='card__li'><span className='card__span__label'>Email </span><span className='card__span__value'>{user.email}</span></li>
            <li className='card__li'><span className='card__span__label'>Birthday</span><span className='card__span__value'>{user.birthday}</span></li>
        </ul>
        <hr className='card__hr'/>
        <footer className='card__footer'>
        <button  className='btn__delete' onClick={handleDelete}>Delete</button>
        <button className='btn__edit' onClick={handleEdit}>Edit</button>
        </footer>
    </article>
   
  )
}

export default UserCard