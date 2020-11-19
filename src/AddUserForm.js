import React, {useState} from 'react'

const AddUserForm = (props) =>{
  //initialsate of in input boxes
  const initialFormState = { id: null, name: "", username: "" };

  //sate for input boxes
  const [user, setUser] = useState(initialFormState);
  
  //handlesInput targets name and value of the object creates new array
  //sets updated object in new array to state
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event);
    setUser({ ...user, [name]: value });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || user.username) return props.addUser(user);
        setUser(initialFormState);
      }}
    >
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
      <button>Add new user</button>
    </form>
  );
}

export default AddUserForm;