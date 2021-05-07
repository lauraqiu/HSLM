import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    color: 'white',
    fontFamily: 'poppins',
},
topDiv: {
    backgroundColor: '#FFC909',
    wdith: '100%',
    height: 1150,
    display: 'flex',
    justifyContent: 'center',
},
welcomeContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
},
welcome: {
    fontSize: '3em',
    paddingTop: 50,
    height: 0,
},
bottomDiv: {
    backgroundColor: '#198ECB',
    width: '100%',
    height: 700,
},
funFact: {
    fontSize: 48,
    paddingTop: '8%',
    paddingLeft: '20%',
    margin: 0,
},
mascotDiv: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 50
},
mascot: {
    width: 255,
    height: 380,
    paddingRight: 0
},
}));
export { useStyles };
