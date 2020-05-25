import React from 'react';
// import { robots } from './robots.js';
import Card from './Card.js';


const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }    
        </div>
    )
}

export default CardList