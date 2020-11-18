import React, {useState} from "react";
import UserTables from './UserTables';
import AddUserForm from './AddUserForm'

const App = () => {


   const usersData = [
     { id: 1, name: "Tania", username: "floppydiskette" },
     { id: 2, name: "Craig", username: "siliconeidolon" },
     { id: 3, name: "Ben", username: "benisphere" },
   ];

    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const initialFormState={id:null, name:'', username:''}

   const addUser = (user) =>{
     user.id = users.length + 1
     setUsers([...users,user])
   }

   const deleteUser = (id) => {
     setUsers(users.filter((user)=> user.id !== id))
   }

   const editRow = (user) =>{
     setEditing(true)

     setCurrentUser({id:user.id, name:user.name, username:user.username})
   }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTables users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
};

export default App;
