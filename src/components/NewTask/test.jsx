import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
//--------------< MUI IMPORTS >-----------------------------
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send'; // SEND MESSAGE TO CUSTOMER
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'; // NOT CHECKED IN
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // CHECKED IN
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';


// ==========================< MUI THEMES >===============================
const useStyles = makeStyles({
    newroot: {
        padding: 16,
        '&:last-child': {
            paddingBottom: 16,
        },
    },
});

function ClassDetailsPage() {
    //==================< SETUP >==========================
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(); // MUI Theme


    useEffect(() => {
        dispatch({
            type: 'FETCH_CLASS_SIZE',
            payload: id
        })
        dispatch({
            type: 'FETCH_CLASS_DETAILS',
            payload: id
        });
    }, [])

    //==================< VARIABLES >==========================
    const isClassFull = useSelector(store => store.selectedClass.classSize.full_class);
    const classDetails = useSelector(store => store.selectedClass.classDetails);
    const [isEditing, setIsEditing] = useState(false);
    const user = useSelector(store => store.user);
    const [showMap, setShowMap] = useState(false);
    const { id } = useParams();
    let classObj = {
        id: classDetails.id,
        abbreviated_date: classDetails.abbreviated_date,
        abrv_end_time: classDetails.abrv_end_time,
        abrv_start_time: classDetails.abrv_start_time,
        city: classDetails.city,
        class_size: classDetails.class_size,
        classname: classDetails.classname,
        clean_format_date: classDetails.clean_format_date,
        date: classDetails.date,
        description: classDetails.description,
        end_time: classDetails.end_time,
        is_my_class: classDetails.is_my_class,
        spots_remaining: classDetails.spots_remaining,
        start_time: classDetails.start_time,
        state: classDetails.state,
        street: classDetails.street,
        trainer_first_name: classDetails.trainer_first_name,
        trainer_image: classDetails.trainer_image,
        trainer_last_name: classDetails.trainer_last_name,
        trainer_pronouns: classDetails.trainer_pronouns,
        trainer_user_id: classDetails.trainer_user_id,
        week_day_name: classDetails.week_day_name,
        zip: classDetails.zip,
    }
    const [editClass, setEditClass] = useState(classObj);
    

    //==================< CLICK HANDLERS >==========================
    // -------< GO BACK >-----------------
    const handleReturnClick = () => {
        history.goBack();
    };
    //---------< GO TO CLASS ATTENDEES >--------------
    const handleSeeAttendees = () => {
        history.push(`/class-details/${id}/attendees`);
    };
    // ----------< RESERVE A CLASS >--------------------------
    const handleReserveClick = () => {
        if (!user.id) {
            swal({
                title: "Error",
                text: "You must register or sign in to reserve a class",
                icon: "error",
            })

        } else {
            swal({
                title: "Success",
                text: "Class reserved!",
                icon: "success",
            })
            dispatch({
                type: 'ADD_RESERVATION',
                payload: classDetails
            });
            // history.push('/my-classes')
        }
    }
    // -------------< CANCEL RESERVATION >-------------------
    const handleCancelClick = () => {
        // console.log('you canceled the class', classDetails) // TEST LOG
        swal({
            title: "Are you sure?",
            text: "Pressing ok will cancel your reservation",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Reservation canceled", {
                        icon: "success",
                    });
                    dispatch({
                        type: 'REMOVE_RESERVATION',
                        payload: classDetails
                    });
                } else {
                }
            });

    };


    // =============< OPEN EDIT >===============
    const handleEdit = () => {
        setIsEditing(true);
    };

    // =============< CANCEL EDIT >===============
    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleDescriptionChange = (event) => {
        // event.preventDefault();
        dispatch({
            type: 'EDIT_CLASS_DETAILS',
            payload: {property: 'description', value: event.target.value}
        });
        
    }
    const handleSubmit = () => {
        console.log('Submit');
        let updatedClass = editClass;
        updatedClass = {...updatedClass};
        console.log('Updated Class is:', updatedClass);
        dispatch({
            type: 'UPDATE_CLASS_DETAILS'
        })
        
        
        setIsEditing(false);
    }



    return (
        <>
            <Container sx={{ border: 4, borderColor: '#c3c4c5', bgcolor: '#FFFFFF', mt: 1 }}>

                {/* ============< WEEKDAY AND DATE >============== */}
                <Card sx={{ bgcolor: '#6d6e71', color: '#FFFFFF' }}>
                    <CardContent className={classes.newroot}>
                        <Typography variant="h5" align="center">
                            {classDetails.week_day_name} {classDetails.abbreviated_date}
                        </Typography>
                    </CardContent>
                </Card>

                {/* ============< CLASS NAME >============== */}
                <Box sx={{ mt: 1 }}>
                    <Typography style={{ color: "#000000" }} variant="h5" align="center">
                        {classDetails.classname}
                    </Typography>
                </Box>

                {/* ============< INSTRUCTOR >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, pl: 1 }}>
                    <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                        <Grid item>
                            <Typography style={{ color: "#000000" }} variant="body1" >
                                Led by:
                            </Typography>
                            <Typography style={{ color: "#000000" }} variant="h5" >
                                {classDetails.trainer_first_name} {((classDetails.trainer_last_name)[0])}
                            </Typography>
                            <Divider sx={{ bgcolor: "#000000" }} />
                        </Grid>
                        <Grid item>
                            <Avatar src={classDetails.trainer_image} sx={{ height: '120px', width: '120px', border: 1, borderColor: '#41414c', }} />
                        </Grid>
                    </Grid>
                </Box>

                {/* ============< LOCATION >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                        <Grid item>
                            <Typography style={{ color: "#000000" }} variant="body1" align='center'>
                                Location:
                            </Typography>
                            <Typography style={{ color: "#000000" }} align='center'>
                                {classDetails.street}, <br /> {classDetails.city}, {classDetails.state}, {classDetails.zip}
                            </Typography>
                            <Divider sx={{ bgcolor: "#000000" }} />
                        </Grid>
                        <Grid item>
                            <Link
                                href={"https://www.google.com/maps/search/?api=1&query=" + (encodeURIComponent(`${classDetails.street}, ${classDetails.city}, ${classDetails.state} ${classDetails.zip}`))}
                                target="_blank"
                            >
                                <Avatar sx={{ bgcolor: '#80bd02' }}>
                                    <LocationOnIcon />
                                </Avatar>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                {/* -------* CODE FOR SHOWING MAP IN APP *------- */}
                {/* 
                {showMap ? <iframe width="100%" height="250" frameBorder="0" style={{ border: 0 }} // referrerpolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps/embed/v1/place?key=ADD_KEY_HERE&q=`} //the 'q' or "Query" can be text aswell as coordinates, these coords are DUMMY DATA > </iframe> : <p></p>}
                */}

                {/* ============< TIME >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                        <Grid item>
                            <Typography style={{ color: "#000000" }} variant="body1" align='center'>
                                From
                            </Typography>
                            <Typography style={{ color: "#000000" }} variant="h5" align='center'>
                                {classDetails.abrv_start_time} - {classDetails.abrv_end_time}
                            </Typography>
                            <Divider sx={{ bgcolor: "#000000" }} />
                        </Grid>
                    </Grid>
                </Box>

                {/* ============< CLASS SIZE >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={1}>
                        <Grid container justifyContent="center" alignItems="center" direction="row" spacing={1}>
                            <Grid item>
                                <Typography style={{ color: "#80bd02" }} variant="h5" align='center'>
                                    {classDetails.spots_remaining}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{ color: "#000000" }} variant="h5" align='center'>
                                    open spots
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography style={{ color: "#000000" }} variant="body2" align='center'>
                                Max: {classDetails.class_size} people
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* ============< DESCRIPTION >============== */}

                <Box sx={{ border: 4, borderColor: '#80bd02', mt: 3 }}>
                    <Box sx={{ px: 8 }}>
                        {/*---------- NOT EDITING -----------*/}
                        {
                            (function () {
                                if (!isEditing) {
                                    return <Typography variant="h5" align="center" >
                                        {classDetails.description}
                                    </Typography>
                                }
                            })()
                        }
                        {/*---------- EDITING-----------*/}
                        {
                            (function () {
                                if (isEditing) {
                                    return <>
                                        <TextField
                                            margin="dense"
                                            multiline
                                            maxRows={4}
                                            size="small"
                                            id="outlined-name"
                                            label="Description"
                                            value={classDetails.description}
                                            onChange={(event) => handleDescriptionChange(event)}
                                        />
                                        <Divider sx={{ bgcolor: "#80bd02", borderBottomWidth: 2 }} />
                                    </>
                                }
                            })()
                        }
                    </Box>
                </Box>






                {/* ============< BUTTONS >============== */}
                {
                    (function () {
                        if (user.access_level >= 2) {
                            return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                                    <Button onClick={handleSeeAttendees} sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                                        View Attendees &nbsp;
                                        <PeopleAltIcon />
                                    </Button>
                                </Grid>
                            </Box>
                        }
                    })()
                }

                {
                    (function () {
                        if (user.access_level === 1 || !user.id) {
                            if (classDetails.is_my_class) {
                                return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                                        <Button onClick={handleCancelClick} sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                                            Cancel Reservation &nbsp;
                                            <DeleteOutlineIcon />
                                        </Button>
                                    </Grid>
                                </Box>

                            } else {
                                return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                                        <Button onClick={handleReserveClick} sx={{ bgcolor: '#80bd02', color: "#000000" }} disabled={isClassFull}>
                                            Reserve &nbsp;
                                            <InsertInvitationIcon />
                                        </Button>
                                    </Grid>
                                </Box>
                            }
                        }
                    })()
                }

                {/* ============< BUTTONS >============== */}
                {
                    (function () {
                        if (user.access_level >= 2) {
                            if (isEditing) { // --------- IS EDITING: TRUE --------------
                                return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                                    <Grid container justifyContent="center" alignItems="center" direction="row" spacing={7}>
                                        <Grid item>
                                            <Button variant="outlined" onClick={handleCancel} color="error">
                                                Cancel &nbsp;
                                                <CancelIcon />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={handleSubmit} sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                                                Save &nbsp;
                                                <CheckIcon />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            } else { // -------------------- IS EDITING: FALSE -------------
                                return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                                        <Button onClick={handleEdit} sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                                            Edit
                                        </Button>
                                    </Grid>
                                </Box>
                            }
                        }
                    })()
                }

                {/* {
                    (function () {
                        if (user.access_level >= 2) {
                            return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                                    <Button onClick={() => { history.push(`/edit-class/${classDetails.id}`) }} sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                                        Edit Class &nbsp;
                                        <EditIcon />
                                    </Button>
                                </Grid>
                            </Box>
                        }
                    })()
                } */}



                <Button onClick={handleReturnClick} sx={{ border: 2, borderColor: '#80bd02', color: "#000000", mt: 3 }}>
                    <ArrowBackIosNewIcon /> &nbsp;
                </Button>
            </Container>
        </>
    )
}
export default ClassDetailsPage;