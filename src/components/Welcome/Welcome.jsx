// ========================<THIS IS THE WELCOME VIEW>====================
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Welcome.css';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PrayerForm from '../PrayerForm/PrayerForm';
import PrayerList from '../PrayerList/PrayerList';
import { useHistory } from 'react-router-dom';


function Welcome() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user);
    const prayerList = useSelector(store => store.allPrayersReducer);
    const tasksList = useSelector(store => store.tasksReducer);

    useEffect(() => {
        // fetchDailyPrayer();
        dispatch({ type: 'FETCH_ALL_PRAYERS' })
        dispatch({type: 'FETCH_TASKS'})
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
        history.push('/new-task');
    }

    return (
        <>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                {/* <p>Your ID is: {user.id}</p> */}
            </div>

            {/* ============<START DAILY PRAYER CARD>============= */}


            {prayerList.map(prayer => {
                return (
                    <Card key={prayer.id}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                                <u>Daily Prayer</u>
                            </Typography>
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
            {/* --------------<END DAILY PRAYER CARD>--------------------- */}
            <br />
            {/* ============<START DAILY TASKS/REMINDERS>============= */}


            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        <u>Daily Tasks and Reminders</u>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ~Tasks & Reminders~
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        ~Here are your daily tasks and reminders to focus on.~
                    </Typography>

                </CardContent>

                <CardActions disableSpacing>

                    <Button size="small" color="primary" onClick={handleNew}>
                        New
                    </Button>

                    <Button size="small" color="secondary">
                        Delete
                    </Button>

                </CardActions>
            </Card>
            {/* --------------<END DAILY TASKS/REMINDERS>--------------------- */}
        </>
    );
}

export default Welcome;