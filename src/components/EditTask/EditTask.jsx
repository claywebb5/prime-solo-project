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

function EditTask() {

    const history = useHistory();
    const dispatch = useDispatch();

    const tasksList = useSelector(store => store.tasksList);

    const handleTaskEdit = (task) => {
        console.log('Clicked Edit on:', task);
    }

    const handleDelete = (task) => {
        console.log('Clicked Delete on:', task);
    }

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
                                {/* </CardContent> */}
                                <CardActions disableSpacing>
                                    <Button size="small" color="primary" onClick={() => handleTaskEdit(task)}>
                                        Edit
                                    </Button>

                                    <Button size="small" color="secondary" onClick={() => handleDelete(task)}>
                                        Delete
                                    </Button>
                                </CardActions>
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