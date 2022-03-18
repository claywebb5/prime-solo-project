import {useSelector} from 'react-redux'

function PrayerList() {
  const prayerList = useSelector(store => store.getAllPrayers);

  return (
    <section>
      <h2>All Prayers</h2>
      <ul>
        {prayerList.map((prayer, index) => 
          <li key={index}>{prayer.prayer_name} states: {prayer.prayer_text}. Interpretation: {prayer.interpretation}</li>  
        )}
      </ul>
    </section>
  );
}

export default PrayerList;