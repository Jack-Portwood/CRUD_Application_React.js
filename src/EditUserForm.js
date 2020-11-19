import React,{useState, useEffect} from 'react';

const EditUserForm = (props) =>{
    
    //set to setUser passes the whole object within currentUser
    const [user, setUser] = useState(props.currentUser)

    //handlesInput targets name and value of the object creates new array
    //sets updated object in new array to state
    const handleInputChange=(event) =>{
        const {name, value} = event.target
        setUser({...user,[name]: value})
    }

    //cause compoent to mount and rerenders data 
    useEffect(() =>{
        setUser(props.currentUser)
    },[props])


return(
    <form
        onSubmit={(event)=>{
            event.preventDefault()

            props.updateUser(user.id, user)
        }}>
        <label>Name</label>
        <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
        />
        <label>Username</label>
        <input 
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
        />
        <button>Update user</button>
        <button onClick={()=>props.setEditing(false)}
        className="btn-muted-btn">
            Cancel
        </button>
    </form>
    )
}

export default EditUserForm