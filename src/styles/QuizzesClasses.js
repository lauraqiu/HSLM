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
quizContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    flexWrap: 'wrap',
    paddingBottom: 20,
    paddingTop: 80
},
title: {
    fontSize: 64,
    paddingLeft: 200,
    paddingTop: 20,
    paddingBottom: 30,
    height: 0,
    width: '100%'
},
}));
export { useStyles };