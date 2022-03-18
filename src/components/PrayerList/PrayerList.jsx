import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function PrayerList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const prayerList = useSelector(store => store.allPrayersReducer);

    // // Trigger daily prayer
    // useEffect(() => {
    //     // fetchDailyPrayer();
    //     dispatch({type: 'FETCH_ALL_PRAYERS'})
    // }, [])

    // const fetchDailyPrayer = () => {
    //     axios.get('/prayers')
    //         .then(response => {
    //             dispatch({type: 'SET_ALL_PRAYERS', payload: response.data});
    //         }).catch(error => {
    //             console.log('Error in fetchDailyPrayer on Welcome.jsx:', error);
    //         })
    // }

  
   
  return (
    <main>
      <h2>All Prayers</h2>
      <section className="prayers">
        {prayerList.map(prayer => {
            return (
                <div key={prayer.id}>
                    <h3>{prayer.prayer_name}</h3>
                    <p>States: <i>{prayer.prayer_text}</i></p>
                    <br />
                    <li>Interpretation: {prayer.interpretation}</li>
                </div>
            );
        })}
      </section>
    </main>
  );
}

export default PrayerList;