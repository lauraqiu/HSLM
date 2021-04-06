import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    color: 'white',
    fontFamily: 'poppins',
},
petContainer:{
    display: 'flex',
    justifyContent: 'center'
},
petImage: {
    borderRadius: 23,
    width: 407,
    height: 394,
},
petTitle: {
    fontSize: 24,
    fontWeight: 'bold'
},
petText: {
    fontSize: 18,
    fontWeight: 'medium'
},
petInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: 450,
    paddingLeft: 100
},
}));
export { useStyles };