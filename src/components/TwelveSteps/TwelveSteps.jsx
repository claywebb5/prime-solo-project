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



function TwelveSteps() {

    const dispatch = useDispatch();
    const stepsList = useSelector(store => store.stepsReducer)

    useEffect(() => {
        dispatch({ type: 'FETCH_STEPS' });
    }, []);



    return (
        <>
            <Container>
                <main>
                    <h1>12 Steps</h1>
                    <section className="steps">
                        {stepsList.map(steps => {
                            return (
                                <div key={steps.id}>
                                    <li>{steps.step}</li>
                                    <li>{steps.step_context}</li>

                                </div>
                            );
                        })}
                    </section>
                </main>
            </Container>
        </>
    );
}

export default TwelveSteps;