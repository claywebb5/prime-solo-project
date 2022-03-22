import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditTask from "../EditTask/EditTask";
import NewTask from "../NewTask/NewTask";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";

function ManageTasks() {

    useEffect(() => {
        dispatch({ type: 'FETCH_TASKS' });
    }, [dispatch]);

    const dispatch = useDispatch();
    const history = useHistory();
    const tasksList = useSelector(store => store.tasksList);

    const handleTaskEdit = (id) => {
        console.log('Handle Edit of:', id);
        let taskToEdit;
        for (let task of tasksList) {
            if (task.id === id) {
                taskToEdit = {
                    id: task.id,
                    name: task.name,
                    complete: task.complete,
                    notStarted: task.notStarted,
                    inProgress: task.inProgress
                }
            }
        }
        dispatch({
            type: 'SET_EDIT_TASK',
            payload: taskToEdit
        });

        history.push('/edit-task'); // **NEEDS TO BE CREATED**
    }

    const handleTaskDelete = (id) => {
        console.log('Handle Delete of:', id);
        let taskToDelete;
        for (let task of tasksList) {
            if (task.id === id) {
                taskToDelete = {
                    id: task.id,
                    name: task.name,
                    complete: task.complete,
                    notStarted: task.notStarted,
                    inProgress: task.inProgress
                }
            }
        }
        dispatch({
            type: 'DELETE_TASK',
            payload: taskToDelete
        });
    }

    


    return (
        <>
            <Container>
                <Card>
                    <NewTask />
                </Card>
            </Container>

            <Container>
                <Typography gutterBottom variant="h5" component="h1">
                    <u>Daily Tasks and Reminders</u>
                </Typography>
                <br />
                {tasksList.map(task => {
                    return (
                        <Card key={task.id}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    {task.name}
                                </Typography>
                                {/* <Typography gutterBottom variant="h6" component="h4">
                                    * TASK STATUS *
                                </Typography> */}

                            </CardContent>

                            <CardActions disableSpacing>
                                <Button size="small" color="primary" onClick={() => handleTaskEdit(task.id)}>
                                    Edit
                                </Button>

                                <Button size="small" color="secondary" onClick={() => handleTaskDelete(task.id)}>
                                    Delete
                                </Button>

                            </CardActions>
                        </Card>
                    );
                })}
            </Container>
        </>
    );
}

export default ManageTasks;