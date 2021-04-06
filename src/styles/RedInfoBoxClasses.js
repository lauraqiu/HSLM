import { makeStyles } from '@material-ui/core/styles';

const useHomeStyles = makeStyles((theme) => ({
    wrapper:{
        fontFamily: 'poppins',
        color: 'white'
    },
    frontRectangle:{
        width: 970,
        height: 306,
        background: '#F8804D',
        borderRadius: 36,
    },
    backRectangle:{
        position: 'relative',
        left: 25,
        bottom: 280, 
        width: 970,
        height: 306, 
        background: '#FF5740',
        borderRadius: 36,
        zIndex: '-1'
    },
    textTitle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    textContainer:{
        paddingLeft: 70,
        paddingRight: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'medium',
    }
}));

export { useHomeStyles };