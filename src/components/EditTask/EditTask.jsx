import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";

function EditPrayer() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [newInterpretation, setNewInterpretation] = useState('');

    const prayer = useSelector(store => store.selectedPrayer)

    function handleSubmit() {
        alert(`LOL Can't do that yet`);
        setNewInterpretation('');
    }

    function handleReturn() {
        history.push('/welcome');
    }
    return (
        <>
            <div>
                <h3>New Task</h3>
                <input
                    value={newTask}
                    onChange={evt => setNewTask(evt.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>

            <h1>Edit Task</h1>
            <div key={prayer.id}>
                <h3>{prayer.prayer_name}</h3>
                <h4>"{prayer.prayer_text}"</h4>
            </div>

            <Button variant="contained" onClick={handleReturn}>Home</Button>

        </>
    )
}

export default EditTask;