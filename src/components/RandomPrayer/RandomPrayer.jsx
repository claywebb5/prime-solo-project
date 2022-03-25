// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { Button, FormControlLabel } from "@material-ui/core";
// import Card from "@material-ui/core/Card";
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';
// import { Container } from '@material-ui/core';
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";



// function RandomPrayer() {

//     const dispatch = useDispatch();
//     const history = useHistory();
//     const prayerList = useSelector(store => store.allPrayersReducer);
//     const user = useSelector((store) => store.user);

//     const [theRandomPrayer, setTheRandomPrayer] = useState(0);
//     const [current, setCurrent] = useState('');
//     const [taco, setTaco] = useState(0);



//     const generateRandomPrayer = () => {
//         setTaco(Math.floor(Math.random() * prayerList.length));
//         // setCurrent(prayerList)
//         // setTheRandomPrayer(taco);
//         // console.log('TheRandomPrayer:', theRandomPrayer);
//         // console.log('The prayer list from generate is:', prayerList);
//         // console.log('current is:', current);
//         // console.log('taco is:', taco);
//         // console.log('TEST:', current[taco]);


//     }
//     useEffect(() => {
//         dispatch({ type: 'FETCH_ALL_PRAYERS' })
//         generateRandomPrayer();
//     }, [])

//     const handleRandomEdit = (id) => {
//         console.log('Random Prayer:', randomPrayer);
//         let prayerToEdit;
//         for (let thePrayer of randomPrayer) {
//             if (thePrayer.id === id) {
//                 prayerToEdit = {
//                     id: thePrayer.id,
//                     prayer_name: thePrayer.prayer_name,
//                     prayer_text: thePrayer.prayer_text,
//                     interpretation: thePrayer.interpretation,
//                     user_id: user.id
//                 }
//             }
//         }
//         console.log('prayerToEdit:', prayerToEdit);

//         dispatch({
//             type: 'SET_EDIT_PRAYER',
//             payload: prayerToEdit
//         });

//     }
//     {


//         return (
//             <>
//                 {/* <Card key={prayerList[theRandomPrayer].id}> */}
//                 {prayerList.map(prayer => {
//                     return (
//                         <Card onClick={generateRandomPrayer}>
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Test
//                                 </Typography>

//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     {prayerList[taco]}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     );
//                 })}
//             </>
//         );
//     }

//     export default RandomPrayer;