import React from 'react';
import {container} from '@material-ui/core';
import { useHomeStyles } from '../styles/HomeComponentsContainer.js';

function HomeComponents(){
    const classes = useHomeStyles();
    return(
        <div container className={classes.wrapper}>    
            
            <div container className={classes.rectangleTwo}>
                <div container className={classes.rectangle}>

                    <div container className={classes.textTitle}>
                        <h1 style={{color: 'white'}}>News & Updates</h1>
                    </div>
                    <div container className={classes.textBody}>
                        <h2 style={{color: 'white'}}>National Pet Day is coming up soon! Check out our HSLM page for details on how to receive free pet trees, etc.</h2>
                        <h2 style={{color: 'white'}}>Enter our monthly giveaway!</h2>
                        
                    </div> 
                </div>  
             
           </div> 

        </div>
       
       
    )
}

export default HomeComponents;
