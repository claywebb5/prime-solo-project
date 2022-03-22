import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormControlLabel, Select } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function EditTask() {
    const task = useSelector(store => store.editTaskReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    let taskObj = {
        id: task.id,
        name: task.name,
        complete: task.complete,
        notStarted: task.notStarted,
        inProgress: task.inProgress
    };

    const [open, setOpen] = useState(true);
    const [editTask, setEditTask] = useState(taskObj);
    const [completed, setCompleted] = useState(false);
    const [notStarted, setNotStarted] = useState(false);
    const [inProgress, setInProgress] = useState(false);


    const handleChange = (event) => {
        setEditTask({ ...editTask, name: event.target.value })
    };

    // Submit task
    const handleSubmit = () => {
        event.preventDefault();
        let editedTask = editTask;
        editedTask = { ...editedTask, complete: completed, notStarted: notStarted, inProgress: inProgress };
        // editedTask = { ...editedTask};
        console.log('New edits to task are:', editedTask);
        dispatch({
            type: 'UPDATE_TASK',
            payload: editedTask
        });
        // history.push('/tasks');
    }

    const handleCompleted = () => {
        setCompleted(!completed);
        console.log('In handleCompleted:', completed);
        
    }

    const handleInProgress = () => {
        setInProgress(!inProgress);
        console.log('In handleInProgress:', inProgress);

    }

    const handleNotStarted = () => {
        setNotStarted(!notStarted);
        console.log('In handleNotStarted:', notStarted);

    }

    const handleDelete = (task) => {
        console.log('Clicked Delete on:', task);
    }

    // Open the new task form dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Close the new task form dialog
    // ** Call this in the submit button function
    const handleClose = () => {
        setOpen(false);
        history.push('/tasks')
    };

    function handleReturn() {
        history.push('/welcome');
    }

    return (
        <>
            <Card key={task.id}>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Task Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={editTask.name}
                                    // onChange={e => setNewTaskName(e.target.value)}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <DialogTitle>Task Status: <br />{task.complete}</DialogTitle>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="completed" onClick={handleCompleted} value={editTask.complete} />
                                    <FormControlLabel control={<Checkbox />} label="inProgress" onClick={handleInProgress} value={editTask.inProgress} />
                                    <FormControlLabel control={<Checkbox />} label="notStarted" onClick={handleNotStarted} value={editTask.notStarted} />
                                </FormGroup>
                            </div>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Card>
            <Button variant="contained" onClick={handleReturn}>Home</Button>
        </>
    )
}

export default EditTask;