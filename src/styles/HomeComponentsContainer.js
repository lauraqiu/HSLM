import { makeStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';
import "@fontsource/poppins";


const useHomeStyles = makeStyles((theme) => ({
    wrapper:{
        position: 'relative', 
    },
    rectangle:{
        position: 'aboslute',  
        width: 970,
        height: 306,
        background: '#F8804D',
        borderRadius: 36,  
        
      
    },
    rectangleTwo:{
        position: 'aboslute', 
        width: 1000,
        height: 336,   
        background: '#FF5740',
        borderRadius: 36,
        
    },
    textTitle:{
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        fontSyle: 'normal',
    
        
    },
    textBody:{
        fontFamily: 'Poppins',
        fontSize: 20,
        fontSyle: 'normal',
        

    }
    
}));

export { useHomeStyles };