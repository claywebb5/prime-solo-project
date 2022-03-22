// ========================<INTERACTIVE 12 STEP PROGRAM>====================
import React, { useState, useEffect } from 'react';
import './TwelveSteps.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";



function TwelveSteps() {

    const dispatch = useDispatch();
    const history = useHistory();


    const [steps, setSteps] = useState([]);

    const stepsList = useSelector(store => store.allStepsReducer)

    const handleClickOpen = () => {
        setSteps(stepsList);
    };

    return (
        <>
            <Container>
                <Typography gutterBottom variant="h5" component="h1">
                    <u>Interactive Twelve Step Program</u>
                </Typography>
                <br />
                <Button variant="outlined" onClick={handleClickOpen}>
                    See Steps?
                </Button>
                <section className="steps">
                    {steps.map(theStep => {
                        return (
                            <div key={theStep.id}>

                                {/* ============<START INTERACTIVE TWELVE STEP PROGRAM FORM>============= */}
                                <h3>First Step</h3>
                                <p>{theStep.first_step}</p>

                                <h3>Second Step</h3>
                                <p>{theStep.second_step}</p>

                                <h3>Third Step</h3>
                                <p>{theStep.third_step}</p>

                                <h3>Fourth Step</h3>
                                <p>{theStep.fourth_step}</p>

                                <h3>Fifth Step</h3>
                                <p>{theStep.fifth_step}</p>

                                <h3>Sixth Step</h3>
                                <p>{theStep.sixth_step}</p>

                                <h3>Seventh Step</h3>
                                <p>{theStep.seventh_step}</p>

                                <h3>Eighth Step</h3>
                                <p>{theStep.eighth_step}</p>

                                <h3>Ninth Step</h3>
                                <p>{theStep.ninth_step}</p>

                                <h3>Tenth Step</h3>
                                <p>{theStep.tenth_step}</p>

                                <h3>Eleventh Step</h3>
                                <p>{theStep.eleventh_step}</p>

                                <h3>Twelfth Step</h3>
                                <p>{theStep.twelfth_step}</p>

                                {/* --------------<END INTERACTIVE TWELVE STEP PROGRAM FORM>--------------------- */}
                            </div>
                        );
                    })}
                </section>
            </Container>
        </>
    );
}

export default TwelveSteps;