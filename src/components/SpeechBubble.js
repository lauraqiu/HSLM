import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/SpeechBubbleStyles.module.css';

function SpeechBubble(){
    return(
        <div>    
            <Grid className={styles.frontBubble+ ' ' + styles.frontBubbleBottomLeft} contenteditable>Each year,
            1,040 bags of kitty litter are used!</Grid>
            <Grid className={styles.backBubble+ ' ' + styles.backBubbleBottomLeft} contenteditable>Each year,
            1,040 bags of kitty litter are used!</Grid>
        </div>
    )
}
export default SpeechBubble;
