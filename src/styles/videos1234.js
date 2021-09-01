import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        color: 'white',
        fontFamily: 'poppins',
    },
    topDiv: {
        backgroundColor: '#FFC909',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    title:{
        fontSize: 40,
        height: 0,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
    },

    VideosGrid: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%',
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
    },
    link: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center'
      },

}));
export { useStyles };