import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/SpeechBubbleStyles.module.css';

function SpeechBubble(){
    return(
        <div>    
            <Grid className={styles.frontBubble+ ' ' + styles.frontBubbleBottomLeft} contenteditable>Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</Grid>
            <Grid className={styles.backBubble+ ' ' + styles.backBubbleBottomLeft} contenteditable>Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</Grid>
        </div>
    )
}
export default SpeechBubble;
