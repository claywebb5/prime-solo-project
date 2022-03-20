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
    const tasksList = useSelector(store => store.tasksList);
    const history = useHistory();
    const dispatch = useDispatch();

    let taskObj = {
        id: tasksList.id,
        name: tasksList.name,
        complete: tasksList.complete,
        notStarted: tasksList.notStarted,
        inProgress: tasksList.inProgress
    };

    // State of the form dialog
    const [open, setOpen] = useState(false);
    const [editTask, setEditTask] = useState(taskObj);
    const [taskStatus, setTaskStatus] = useState('');
    // const [editName, setEditName] = useState('');
    const [completed, setCompleted] = useState(false);
    const [notStarted, setNotStarted] = useState(false);
    const [inProgress, setInProgress] = useState(false);


    const handleChange = (event) => {
        setEditTask({...editTask, [event.target.name]: event.target.value})
    };

    // ** THIS WILL HANDLE DISPATCH
    const handleTaskEdit = (task) => {
        console.log('Clicked Edit on:', task);
        handleClickOpen();

    }
    // Submit task
    const handleSubmit = () => {
        handleClose();
            event.preventDefault();
        //     console.log('editTask in handleSubmit is:', newTask);
        //     dispatch({
        //         type: 'ADD_TASK',
        //         payload: {
        //             name: newTask
        //         }
        //     });
        //     setNewTask('');
        //    { history.push('/welcome');}
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
    };

    function handleReturn() {
        history.push('/welcome');
    }

    return (
        <>

            {tasksList.map(task => {
                return (
                    <Card key={task.id}>
                        <Card className="taskContent">
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    {task.name}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h4">
                                    Task Status: {taskStatus}
                                </Typography>
                                {/* </CardContent> */}
                                <CardActions disableSpacing>
                                    <Button size="small" color="primary" onClick={() => handleTaskEdit(task)}>
                                        Edit
                                    </Button>

                                    <Button size="small" color="secondary" onClick={() => handleDelete(task)}>
                                        Delete
                                    </Button>

                                    <Button size="small" color="primary" onClick={() => handleTaskStatus(task)}>
                                        <CheckBoxOutlineBlankIcon />
                                    </Button>
                                </CardActions>

                                <Dialog open={open} onClose={handleClose}>
                                    <DialogTitle>Edit Task</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Edit the name of your task
                                        </DialogContentText>
                                        <form
                                            onSubmit={handleSubmit}
                                        >
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
                            </CardContent>
                        </Card>
                    </Card>
                );
            })}
            <Button variant="contained" onClick={handleReturn}>Home</Button>

        </>
    )
}

export default EditTask;