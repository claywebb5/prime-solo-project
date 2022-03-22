import React from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from "@material-ui/core";


function DailyTasks() {

    const history = useHistory();

    const tasksList = useSelector(store => store.tasksList);

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
            <Button variant="contained" onClick={handleReturn}>Home</Button>
        </>
    )
}

export default DailyTasks;