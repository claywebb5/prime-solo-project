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
       console.log('Submitting new task');
       
       setNewTask('');
   }

    function handleReturn(){
        history.push('/welcome');
    }
    return (
        <>
            <h1>Current Tasks</h1>
            <section className="tasks">
                {tasksList.map(task => {
                    return (
                        <div key={task.id}>
                            <h3>{task.name}</h3>
                            <h4>Completed? {task.completed}</h4>
                        </div>
                    );
                })}
            </section>

            <br />
            <h1>New Task</h1>
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