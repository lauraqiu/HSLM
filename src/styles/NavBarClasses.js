import { makeStyles } from '@material-ui/core/styles';
import "@fontsource/poppins";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 118,
    width: '100%',
    background: 'linear-gradient(267.71deg, #FF965A 48.08%, #FFAD61 74.19%)',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly'
  },
  logo: {
    height: 92,
    width: 84
  },
  logoContainer:{
    width: '10%',
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    textTransform: 'none',
    color: 'white',
    fontSize: 20,
    fontHeight: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins'
  },
  buttonContainer: {
    display: 'flex',
    width: '70%',
    justifyContent: 'space-evenly',
  },
  iconsContainer: {
    display: 'flex',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  instagramIcon: {
    height: 56,
    width: 56
  },
  twitterIcon: {
    height: 76,
    width: 76
  }
}));
export { useStyles };
