import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = props => {
    console.log(props);

    // const submitForm = event => {
    //     event.preventDefault();
    //     const newMate = {
    //         ...mate,
    //         id: Date.now()

    //     };
    //     props.editMember(event.target.value)
    //     setMate({ name: '', email: '', role: ''});
    // };
  
   //dependency array

    return(
        <div>
            {props.formArchive.map( form => {

                let id=form.id;
                return ([

                    <div key={form.id}>
                        <h2>{form.name}</h2>
                        <p>{form.email}</p>
                        <p>{form.role}</p>
                    </div>,
                    
                    <Link to={`/member/${id}`}>
                        <button type='submit' >
                        Edit Staff Member
                        </button>
                        </Link>
                        
                ])
            }
            )}
        </div>        
    )
}

export default Form;