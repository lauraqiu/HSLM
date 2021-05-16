import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        color: 'white',
        fontFamily: 'poppins',
    },
    topDiv: {
        backgroundColor: '#FFC909',
        wdith: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    adventureGrid: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '90%',
        flexWrap: 'wrap',
        paddingBottom: 20,
        paddingTop: 80

    },
    picture: {
        borderRadius: 30,
        width: 358,
        height: 536
    },
    pictureGrid:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 380,
        justifyContent: 'space-between'
    }

}));
export { useStyles };