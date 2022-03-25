// ========================<INTERACTIVE 12 STEP PROGRAM>====================
import React, { useState, useEffect } from 'react';
import './TwelveSteps.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";



function TwelveSteps() {

    useEffect(() => {
        dispatch({ type: 'FETCH_STEPS' });
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();
    const stepsList = useSelector(store => store.stepsReducer)

    

    const handleStepEdit = (id) => {
        console.log('Handle Edit of:', id);
        
    }


    return (
        <>
            <Container>
                <main>
                    <h1>12 Steps</h1>
                    <section className="steps">
                        {stepsList.map(steps => {
                            return (
                                <Card key={steps.id} style={{ backgroundImage: "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)" }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {steps.step}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            "{steps.step_context}"
                                        </Typography>
                                    </CardContent>

                                    <CardActions disableSpacing>
                                        <Button size="small" color="primary" onClick={() => handleStepEdit(steps.id)}>
                                            Edit
                                        </Button>
                                    </CardActions>

                                    <br />
                                </Card>

                            );
                        })}
                    </section>
                </main>
            </Container>
        </>
    );
}

export default TwelveSteps;