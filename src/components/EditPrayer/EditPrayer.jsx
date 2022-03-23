import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";


function EditPrayer() {

    const history = useHistory();
    const dispatch = useDispatch();

    // const [open, setOpen] = useState(false);
    const [newInterpretation, setNewInterpretation] = useState('');
    // const [oldInterpretation, setOldInterpretation] = useState('');

    const prayer = useSelector(store => store.selectedPrayer)

    // const previous = () => {
    //     setOpen(!open);
    //     setOldInterpretation(prayer.interpretation);
    // }

    const handleChange = (event) => {
        // setNewInterpretation({...})

    }

    // const handleClose = () => {
    //     if (open === true) {
    //         setOpen(!open);
    //     } else {
    //         console.log('Nope');
    //         console.log('Open is:', open);
    //     }
    // }

    function handleSubmit() {
        
    }

    function handleReturn() {
        history.push('/welcome');
    }
    return (
        <>
            <Container>
                <h1>Prayer Edit</h1>
                <div key={prayer.id}>
                    <h3>{prayer.prayer_name}</h3>
                    <h4>"{prayer.prayer_text}"</h4>

                    <p>Interpretation:</p>
                    <input
                        value={newInterpretation}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </Container>
            {/* <Container>
                <Button variant="contained" onClick={previous}>See Previous</Button>
            </Container>
            <Card open={open}>
                {oldInterpretation}
                <CardActions>
                    <Button onClick={handleClose}>Close</Button>
                </CardActions>
            </Card> */}

            <Container>
                <Button variant="contained" onClick={handleReturn}>Home</Button>
            </Container>
            {/* <h1>** ADD TO FAVORITE LIST OF PRAYERS **</h1> */}
        </>
    )
}

export default EditPrayer;