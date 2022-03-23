// ========================<THIS IS THE WELCOME VIEW>====================
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Welcome.css';
import { Container } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PrayerList from '../PrayerList/PrayerList';
import { useHistory } from 'react-router-dom';


function Welcome() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user);
    const prayerList = useSelector(store => store.allPrayersReducer);
    const tasksList = useSelector(store => store.tasksList);


    useEffect(() => {
        // fetchDailyPrayer();
        dispatch({ type: 'FETCH_ALL_PRAYERS' })
        dispatch({ type: 'FETCH_TASKS' })
    }, [])

    function handleEdit(prayer) {
        console.log('Handle Edit of:', prayer.prayer_name);
        // alert(`Are you sure you want to edit: ${prayer.prayer_name}?`);
        dispatch({
            type: 'SELECTED_PRAYER',
            payload: prayer
        })
        history.push('/prayer-edit');
    }

    function handleNew() {
        console.log('Clicked New Task');

        history.push('/tasks');
    }

    function handleTaskEdit(task) {
        console.log('Handle Edit of:', task.name);
        // alert(`Are you sure you want to edit: ${prayer.prayer_name}?`);
        // dispatch({
        //     type: 'SELECTED_PRAYER',
        // payload: prayer
        // })
        history.push('/task-edit'); // **NEEDS TO BE CREATED**
    }

    return (
        <>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                {/* <p>Your ID is: {user.id}</p> */}
            </div>

            {/* ============<START DAILY PRAYER CARD>============= */}

            <Container>

                {prayerList.map(prayer => {
                    return (
                        <Card key={prayer.id} style={{backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h1">
                                    <u>Daily Prayer</u>
                                </Typography>

                                <Button variant="contained" color="success">Manage Prayers</Button>
                                <br />
        
                                <Typography gutterBottom variant="h5" component="h2">
                                    {prayer.prayer_name}
                                </Typography>

                                {/* <PrayerList /> */}

                                <Typography variant="body2" color="textPrimary" component="p">
                                    "{prayer.prayer_text}"
                                </Typography>
                                <br />
                                <i>Reflect on the following prayer and please enter your interpretation:</i>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    {/* <i>Reflect on the following prayer and please enter your interpretation:</i> */}
                                    <br />
                                    {prayer.interpretation}
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Button size="small" color="primary" onClick={() => handleEdit(prayer)}>
                                    Edit
                                </Button>

                                <Button size="small" color="secondary">
                                    Delete
                                </Button>

                            </CardActions>
                        </Card>
                    );
                })}
            </Container>
            {/* -------<END DAILY PRAYER CARD>--------- */}
            <br />

            {/* ============<START DAILY TASKS/REMINDERS>============= */}
            <Container>
                <Typography gutterBottom variant="h5" component="h1">
                    <u>Daily Tasks and Reminders</u>
                </Typography>
                <Button variant="contained" color="success" onClick={handleNew}>
                    Manage Tasks
                </Button>
                <br />
                {tasksList.filter(task => task.inProgress === true).map(filteredTask => {
                    return (
                        <Card key={filteredTask.id} style={{ backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    {filteredTask.name}
                                </Typography>
                                <Typography gutterBottom component="subtitle1">
                                    Status: In Progress
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Container>
            {/* --------------<END DAILY TASKS/REMINDERS>--------------------- */}
        </>
    );
}

export default Welcome;