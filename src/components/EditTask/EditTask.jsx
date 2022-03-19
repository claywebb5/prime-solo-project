import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { Container } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function EditTask() {

    const history = useHistory();
    const dispatch = useDispatch();



    const tasksList = useSelector(store => store.tasksList);


    function handleSubmit() {
        alert(`LOL Can't do that yet`);
        setNewInterpretation('');
    }

    function handleReturn() {
        history.push('/welcome');
    }
    return (
        <>

            {tasksList.map(task => {
                return (
                    <Card key={task.id}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h4">
                                {task.name}
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>

                            <Button size="small" color="primary" >
                                New
                            </Button>

                            <Button size="small" color="primary" onClick={() => handleTaskEdit(task)}>
                                Edit
                            </Button>

                            <Button size="small" color="secondary">
                                Delete
                            </Button>

                        </CardActions>
                    </Card>
                );
            })}
            <Button variant="contained" onClick={handleReturn}>Home</Button>

        </>
    )
}

export default EditTask;