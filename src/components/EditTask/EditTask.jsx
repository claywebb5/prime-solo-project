import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { Container } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

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
        setEditTask({ ...editTask, [event.target.name]: event.target.value })
    };

    // Submit task
    const handleSubmit = (event) => {
        event.preventDefault();
        let editedTask = editTask;
        editedTask = { ...editedTask, completed: completed, notStarted: notStarted, inProgress: inProgress };
        console.log('New edits to task are:', editedTask);

    }

    const handleCompleted = () => {
        setCompleted(!completed);
    }

    const handleInProgress = () => {
        setInProgress(!inProgress);
    }

    const handleNotStarted = () => {
        setNotStarted(!notStarted);
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
                {/* <Card className="taskContent">
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    {task.name}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h4">
                                    Task Status: {taskStatus}
                                </Typography>
                                {/* </CardContent> */}
                {/* <CardActions disableSpacing>
                                    <Button size="small" color="primary" onClick={() => handleTaskEdit(task)}>
                                        Edit
                                    </Button>

                                    <Button size="small" color="secondary" onClick={() => handleDelete(task)}>
                                        Delete
                                    </Button>

                                    <Button size="small" color="primary" onClick={() => handleTaskStatus(task)}>
                                        <CheckBoxOutlineBlankIcon />
                                    </Button>
                                </CardActions> */}

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
                                <DialogTitle>Task Status</DialogTitle>

                            </div>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
                {/* </CardContent>
                        </Card> */}
            </Card>
            <Button variant="contained" onClick={handleReturn}>Home</Button>

        </>
    )
}

export default EditTask;