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
welcome: {
    fontSize: '3em',
    paddingTop: 50,
    height: 0
},
// petInfo: {
//     position: 'absolute',
//     bottom: 300,
// },
bottomDiv: {
    backgroundColor: '#198ECB',
    width: '100%',
    height: 700
},
funFact: {
    fontSize: 48,
    left: 333,
    top: 1331,
    position: 'absolute',
},
mascot: {
    position: 'absolute',
    left: 150,
    top: 1400,
}

}));
export { useStyles };