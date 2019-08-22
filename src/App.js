import React, { useState }  from 'react';
import { Route, Link } from 'react-router-dom';
import TeamForm from './Components/StaffForm';
import Form from './Components/Staff'
import StaffPage from './Components/StaffPage';

import data from './data';
import './App.css';

function App() {
  const [ mates, setMates] = useState(data)
  const [ staffToEdit, setStaffToEdit ] = useState({id: '', name: '', email: '', role: ''})
  const addNewMate = mate => {
    setMates([...mates, mate ]);
  };

  const staffEdit = staff => {
    setStaffToEdit([...staffToEdit], staff);
  }

  return (
    <div className="App">
      <header>Team List</header>
      <div>
      <TeamForm addNewMate={addNewMate} editMember={staffEdit}/>
      <Form formArchive={mates} />
      <Route exact path='/' component={TeamForm}/>
      <Route path='/member/:id' render={ props => <StaffPage {...props} teamList={mates}/>} />
      </div>
      {/* staffEdit={staffToEdit} */}
    </div>
  );
}

export default App;
