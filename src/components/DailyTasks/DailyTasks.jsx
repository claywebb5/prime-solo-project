import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from "@material-ui/core";


function DailyTasks() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [newTask, setNewTask] = useState('');

    const tasksList = useSelector(store => store.tasksList);

   function handleSubmit() {
       alert(`LOL Can't do that yet`);
       setNewInterpretation('');
   }

    function handleReturn(){
        history.push('/welcome');
    }
    return (
        <>
            <h1>Task Edit</h1>
            {/* <div key={tasks.id}>
                <h3>{prayer.prayer_name}</h3>
                <h4>"{prayer.prayer_text}"</h4>

                <p>Interpretation:</p>
                <input
                    value={newInterpretation}
                    onChange={evt => setNewInterpretation(evt.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div> */}
            
            <Button variant="contained" onClick={handleReturn}>Home</Button>
            
        </>
    )
}

export default DailyTasks;