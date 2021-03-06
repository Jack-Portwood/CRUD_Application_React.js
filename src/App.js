import React, {useState,Fragment} from "react";
import UserTables from './UserTables';
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const App = () => {

  //Dummy Data
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  //initail state set as const to pass into currentUser state
  const initialFormState = { id: null, name: "", username: "" };

  //useState hooks for add, delete, update 
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  //function to addUser buy id spread opparotor used so usersData array is no mutated.
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  //function to deleteUser by id filter to create an array will all array elements
  //a test is passed to the filter to get all the ids which are not equal to the passed in id
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log(id)
  };

  //function to pass user data to editUserForm by changing state as passing data 
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  //function to updateUser data uses map creates a new array and calls a function
  //terniary to either use udatedUser or user when stateSet 
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTables users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;