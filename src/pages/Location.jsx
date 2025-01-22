import React from 'react'
import Cards from '../components/Cards';

function Location(){
    return(
        <main>
            <div className='location-body'>
          <Cards
          title="Location"
           description="Lorem ipsum dolor sit, Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            icon={"../images/location-icon.jpg"} 
            />
        
        </div>

        </main>
    );
}
export default Location;