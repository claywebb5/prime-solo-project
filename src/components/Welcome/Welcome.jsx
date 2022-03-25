// ========================<THIS IS THE WELCOME VIEW>====================
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Welcome.css';
import { Container } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


function Welcome() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [randPrayer, setRandPrayer] = useState('');
    const user = useSelector((store) => store.user);
    const prayerList = useSelector(store => store.allPrayersReducer);
    const tasksList = useSelector(store => store.tasksList);


    const randomPrayerId = Math.floor(Math.random() * 15);

    const random = (prayerList[randomPrayerId]);


    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_PRAYERS' })
        dispatch({ type: 'FETCH_TASKS' })
    }, [])

    function handleManagePrayers() {
        console.log('Clicked Manage Prayers');
        history.push('/prayers');
    };

    function handleManageTasks() {
        console.log('Clicked Manage Tasks');
        history.push('/tasks');
    };

    const handleRandomEdit = () => {
        console.log('Random is:', random);
        console.log('Random object is:', random.id, random.prayer_name);
        setRandPrayer(random);
    }


    return (
        <>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
            </div>

            {/* ============<START DAILY PRAYER CARD>============= */}

            <Container>
                <Card style={{ backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)" }}>
                    <Typography gutterBottom variant="h5" component="h1">
                        <u>Daily Prayer</u>
                    </Typography>
                    <Button variant="contained" color="success" onClick={handleManagePrayers}>Manage Prayers</Button>
                    <Button variant="contained" color="success" onClick={handleRandomEdit}>Random Prayer</Button>
                </Card>

                <Card style={{ backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)" }}>
                    <CardContent>
                        <br />

                        <Typography gutterBottom variant="h5" component="h2">
                            {random?.prayer_name}
                        </Typography>

                        <Typography variant="body2" color="textPrimary" component="p">
                            "{random?.prayer_text}"
                        </Typography>
                        <br />
                        <i>Reflect on the following prayer and please enter your interpretation:</i>
                        <Typography variant="body2" color="textPrimary" component="p">
                            <br />
                            {random?.interpretation}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            {/* -------<END DAILY PRAYER CARD>--------- */}
            <br />

            {/* ============<START DAILY TASKS/REMINDERS>============= */}
            <Container>
                <Card style={{ backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)" }}>
                    <Typography gutterBottom variant="h5" component="h1">
                        <u>Daily Tasks and Reminders</u>
                    </Typography>
                    <Button variant="contained" color="success" onClick={handleManageTasks}>
                        Manage Tasks
                    </Button>
                </Card>
                {tasksList.filter(task => task.inProgress === true).map(filteredTask => {
                    return (
                        <Card key={filteredTask.id} style={{ backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)" }}>
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