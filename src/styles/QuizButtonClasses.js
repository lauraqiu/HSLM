import { makeStyles } from '@material-ui/core/styles';
import "@fontsource/poppins";

const quizStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
        color: 'white',
        fontSize: 24,
        fontHeight: 28,
        fontWeight: 'regular',
        fontFamily: 'Poppins'
      },
      buttonContainer: {
        backgroundColor: '#198ECB',
        display: 'flex',
        width: 385.94,
        height: 68.76,
        justifyContent: 'space-evenly',
        borderRadius:30,
      },
    }
    
));

    export { quizStyles };