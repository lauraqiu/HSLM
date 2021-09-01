import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    color: 'white',
    fontFamily: 'poppins',
},
topDiv: {
    backgroundColor: '#FFC909',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
},
quizContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
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
link: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center'
  },
}));
export { useStyles };
