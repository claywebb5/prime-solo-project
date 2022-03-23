import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";

function ManagePrayers() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_PRAYERS' });
    }, [dispatch]);

    const prayerList = useSelector(store => store.allPrayersReducer);

    {/* ============<TASK EDIT BUTTON CLICK LISTENER>============= */ }

    function handleEdit(prayer) {
        console.log('Handle Edit of:', prayer.prayer_name);
        // alert(`Are you sure you want to edit: ${prayer.prayer_name}?`);
        dispatch({
            type: 'SELECTED_PRAYER',
            payload: prayer
        })
        history.push('/prayer-edit');
    };




    return (
        <>
            <Container>
                <Card>
                    <Typography gutterBottom variant="h5" component="h1">
                        <u>Daily Prayer</u>
                    </Typography>
                </Card>
                {prayerList.map(prayer => {
                    return (
                        <Card key={prayer.id} style={{ backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)" }}>
                            <CardContent>
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
        </>
    );

}

export default ManagePrayers;