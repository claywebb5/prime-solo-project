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

    //  ============<INVOKE REACT IMPORTS>=============
    const history = useHistory();
    const dispatch = useDispatch();

    //  ============<>=============
    const prayer = useSelector(store => store.selectedPrayer)

    //  ============<>=============
    let prayerObj = {
        id: prayer.id,
        prayer_name: prayer.prayer_name,
        prayer_text: prayer.prayer_text,
        interpretation: prayer.interpretation
    };

    //  ============<>=============
    const [editPrayer, setEditPrayer] = useState(prayerObj)

    //  ============<>=============
    const handleChange = (event) => {
        setEditPrayer({...editPrayer, interpretation: event.target.value})
    };

    //  ============<>=============
    const handleSubmit = () => {
        event.preventDefault();
        let editedPrayer = editPrayer;
        editedPrayer = {...editedPrayer};
        console.log('New edits to prayer are:', editedPrayer);
        dispatch({
            type: 'UPDATE_PRAYER',
            payload: editedPrayer
        });
        history.push('/welcome');
    };

    //  ============<>=============
    function handleReturn() {
        history.push('/welcome');
    }

    return (
        <>
            {/* ============<>============= */}
            <Container>
                <Card style={{ backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)" }}>
                    <h1>Prayer Edit</h1>
                    <div key={prayer.id}>
                        <h3>{prayer.prayer_name}</h3>
                        <h4>"{prayer.prayer_text}"</h4>

                        {/* <p>Interpretation:</p> */}
                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder='Interpretation'
                                value={editPrayer.interpretation}
                                onChange={handleChange}
                            />
                        </form>
                            <button onClick={handleSubmit}>Submit</button>
                            {/* <button onClick={() => handleSubmit}>Submit</button> */}
                    </div>
                </Card>
            </Container>
            <br />

            {/* ============<>============= */}
            <Container>
                <Button variant="contained" onClick={handleReturn}>Home</Button>
            </Container>
            {/* <h1>** ADD TO FAVORITE LIST OF PRAYERS **</h1> */}
        </>
    );
}

export default EditPrayer;