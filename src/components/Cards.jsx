import React from 'react'

function Cards({description, title, icon}){
    return(
        <main>
            <div className="card">
                <div className="card-image"><img src={icon} alt="icon" className="location-image" /></div>
                <div className="card-description">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
            </div>



        </main>
    );
}
export default Cards;