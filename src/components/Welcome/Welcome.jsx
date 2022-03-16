// ========================<THIS IS THE WELCOME VIEW>====================
import React from 'react';
import { useSelector } from 'react-redux';
import './Welcome.css';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";




function Welcome() {

    const user = useSelector((store) => store.user);
    return (
        <>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            {/* ============<START DAILY PRAYER CARD>============= */}
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Daily Prayer
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Reflect on the following prayer and please enter your interpretation.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <Button size="small" color="primary">
                        Submit
                    </Button>

                    <Button size="small" color="secondary">
                        Delete
                    </Button>

                </CardActions>
            </Card> 
            {/* --------------<END DAILY PRAYER CARD>--------------------- */}

             {/* ============<START DAILY TASKS/REMINDERS>============= */}
             <Card>
                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Daily Tasks and Reminders
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Here are your daily tasks and reminders to focus on.
                    </Typography>

                </CardContent>

                <CardActions disableSpacing>

                    <Button size="small" color="primary">
                        Submit
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