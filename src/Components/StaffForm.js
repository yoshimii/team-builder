import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function TeamForm(props) {
    const [mate, setMate] = useState({name: '', email: '', role: ''})
    const changeHandler = event => {
        event.preventDefault();
        console.log(event.target.value)
        setMate({
            ...mate,
            [event.target.name]: event.target.value
        })
    }
    const submitForm = event => {
        event.preventDefault();
        const newMate = {
            ...mate,
            id: Date.now()

        };
        props.addNewMate(newMate)
        setMate({name: '', email: '', role: ''});
    };


    return (
        <div className="App">
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Full Name<input type='text' name='name' placeholder='Enter name'
                        value={
                            mate.name
                        }
                        onChange={changeHandler}/></label>
                <label htmlFor='email'>Email Address<input type='email' name='email' placeholder='valid email address'
                        value={
                            mate.email
                        }
                        onChange={changeHandler}/></label>
                <label htmlFor='role'>Team Role<input type='text' name='role' placeholder='team role'
                        value={
                            mate.role
                        }
                        onChange={changeHandler}/></label>
                <button type='submit'>
                    Add team member
                </button>
            </form>
        </div>
    );
}

export default TeamForm;
