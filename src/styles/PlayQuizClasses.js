import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
page: {
    backgroundColor: '#FFC909',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'poppins !important', // poppins not overriding inherited font
},
}));
export { useStyles };
