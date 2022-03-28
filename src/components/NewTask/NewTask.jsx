import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function NewTask() {

    const history = useHistory();
    const dispatch = useDispatch();

    // State of the form dialog
    const [open, setOpen] = useState(false);

    const [newTask, setNewTask] = useState('');

    

    // Submit task
    const handleSubmit = () => {
        event.preventDefault();
        console.log('newTask in handleSubmit is:', newTask);
        dispatch({
            type: 'ADD_TASK',
            payload: {
                name: newTask
            }
        });
        setNewTask('');
        { history.push('/tasks'); }
    }

    // Open the new task form dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Close the new task form dialog
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    New Task
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>New Task</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create a new task, please enter the name of the task here.
                        </DialogContentText>
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
                                    value={newTask}
                                    onChange={e => setNewTask(e.target.value)}
                                // onChange={handleChange}
                                />
                            </div>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    ); // End MAIN RETURN
}

export default NewTask;