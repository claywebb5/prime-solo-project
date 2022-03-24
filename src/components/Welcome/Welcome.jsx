// ========================<THIS IS THE WELCOME VIEW>====================
import React, { useEffect } from 'react';
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

    const user = useSelector((store) => store.user);
    const prayerList = useSelector(store => store.allPrayersReducer);
    const tasksList = useSelector(store => store.tasksList);

    const randomPrayer = prayerList[Math.floor(Math.random() * prayerList.length)];


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

    const handleRandomEdit = (id) => {
        console.log('Random Prayer:', randomPrayer);
        let prayerToEdit;
        for (let thePrayer of randomPrayer) {
            if (thePrayer.id === id) {
                prayerToEdit = {
                    id: thePrayer.id,
                    prayer_name: thePrayer.prayer_name,
                    prayer_text: thePrayer.prayer_text,
                    interpretation: thePrayer.interpretation,
                    user_id: user.id
                }
            }
        }
        dispatch({
            type: 'SET_EDIT_PRAYER',
            payload: prayerToEdit
        });
        
    }


    return (
        <>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                {/* <p>Your ID is: {user.id}</p> */}
            </div>

            {/* ============<START DAILY PRAYER CARD>============= */}

            <Container>
                <Card>
                    <Typography gutterBottom variant="h5" component="h1">
                        <u>Daily Prayer</u>
                    </Typography>
                    <Button variant="contained" color="success" onClick={handleManagePrayers}>Manage Prayers</Button>
                </Card>
                <Card key={randomPrayer.id}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {randomPrayer.prayer_name}
                        </Typography>

                        <Typography variant="body2" color="textPrimary" component="p">
                            "{randomPrayer.prayer_text}"
                        </Typography>
                        <br />
                        <i>Reflect on the following prayer and please enter your interpretation:</i>
                        <Typography variant="body2" color="textPrimary" component="p">
                            <br />
                            {randomPrayer.interpretation}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                                <Button size="small" color="primary" onClick={() => handleRandomEdit(randomPrayer)}>
                                    Edit
                                </Button>
                            </CardActions>
                </Card>
                {prayerList.map(prayer => {
                    return (
                        <Card key={prayer.id} style={{ backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)" }}>
                            <CardContent>
                                <br />

                                <Typography gutterBottom variant="h5" component="h2">
                                    {prayer.prayer_name}
                                </Typography>

                                <Typography variant="body2" color="textPrimary" component="p">
                                    "{prayer.prayer_text}"
                                </Typography>
                                <br />
                                <i>Reflect on the following prayer and please enter your interpretation:</i>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    <br />
                                    {prayer.interpretation}
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Button size="small" color="primary" onClick={() => handleEdit(prayer)}>
                                    Edit
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
                <Card>
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