import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    color: 'white',
    fontFamily: 'poppins',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 450,
    justifyContent: 'space-between'
},
picture: {
    width: 447,
    height: 305,
    borderRadius: 30,
},
text: {
    fontSize: 40,
    marginTop: 10
}
}));
export { useStyles };
