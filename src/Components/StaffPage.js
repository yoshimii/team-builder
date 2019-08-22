import React, {useState} from 'react';




const UpdateStaff =(props) => {
    console.log(props)
const  [editGuy, setEditGuy ] = useState({id: '', name: '', email: '', role: ''})
const {id, name, email, role} = props.teamList[props.match.params.id];

console.log(id)

const changeHandler = event => {    
    event.preventDefault();
    console.log(event.target.value)
    setEditGuy({
        ...editGuy,
        [event.target.name]: event.target.value
    })
}

const submitForm = event => {
    event.preventDefault();
    const guyChanges = {
        ...editGuy,
        
    };
    setEditGuy(guyChanges);

}

console.log(name)
    return (
        <div className="App">
        <form 
        onSubmit={submitForm}
        >
            <label htmlFor='name'>Full Name<input type='text' name='name' placeholder='Enter name'
                    value={
                        name
                    }
                    onChange={changeHandler}
                    /></label>
            <label htmlFor='email'>Email Address<input type='email' name='email' placeholder='valid email address'
                    value={
                        email
                    }
                    onChange={changeHandler}
                    /></label>
            <label htmlFor='role'>Team Role<input type='text' name='role' placeholder='team role'
                    value={
                        role
                    }
                    onChange={changeHandler}
                    /></label>
            <button type='submit'>
                Add team member
            </button>
        </form>
    </div>
    )
}

export default UpdateStaff;




