import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from "@material-ui/core";


function EditPrayer() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [newInterpretation, setNewInterpretation] = useState('');

    const prayer = useSelector(store => store.selectedPrayer)

   function handleSubmit() {
       alert(`LOL Can't do that yet`);
       setNewInterpretation('');
   }

    function handleReturn(){
        history.push('/welcome');
    }
    return (
        <>
            <h1>Prayer Edit</h1>
            <div key={prayer.id}>
                <h3>{prayer.prayer_name}</h3>
                <h4>"{prayer.prayer_text}"</h4>

                <p>Interpretation:</p>
                <input
                    value={newInterpretation}
                    onChange={evt => setNewInterpretation(evt.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            
            <Button variant="contained" onClick={handleReturn}>Home</Button>
            {/* <h1>** ADD TO FAVORITE LIST OF PRAYERS **</h1> */}
        </>
    )
}

export default EditPrayer;