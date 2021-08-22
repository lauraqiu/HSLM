import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) =>({
root: {
    color: 'white',
    fontFamily: 'poppins',
},
body: {
    margin:0,
    backgroundColor: '#FFC909',
    color: '#fff',
    lineHeight:1.6,
    fontFamily: 'poppins',
    minHeight: '100vh',
    paddingBottom:'3%',
},
container: {
    maxWidth:1170,
    marginLeft:'auto',
    marginRight:'auto',
    padding:1,
},
ul:{
    listStyle: 'none',
    padding:0,
},
brand: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 60,
}, 
brandSpan:{
    color:'#198ECB',
}, 
grid:{
  display:'grid',
  gridTemplateColumns:'1fr 1fr',
  gridGap:'3%',
  paddingBottom:'3%'
},
wrapper: {
    display:'flex',
    borderRadius: '30 px',
    maxWidth: '200%',
    justifyContent: 'center',
    marginBottom:10,
},
companyInfo: {
    background:'#198ECB',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    maxWidth: '50%',
    float: 'left',
    padding: '4%',
},
companyInfoH3:{
    textAlign: "center",
    marginTop:0,
    marginRight: 0,
    marginBottom: 1,
    marginLeft: 0,
    position: 'relative',
    fontSize: 20,
},
companyInfoUl: {
    marginTop:20,
    fontsize: 20,
    padding:0,
    margin:0
},
contact:{
    background: '#f9feff',
    color: '#303133',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    fontSize: 25,
    minWidth:'50%',
    float: 'left',
    padding: '3.5%'
},
contactH3:{
    marginTop: -0.40,
},
li:{
  listStyleType:'none',
  textAlign:'center'
},
contactFormLabel:{
    fontSize: 'medium',
    display:'block',
},
contactFormLabel1:{
    fontSize: 'medium',
    display:'block',
    lineHeight: 2.1314,
},
contactFormP:{
    listStyleType:'none',
    lineHeight: 1.1314,
},
contactFormFull:{
    gridColumn: 1 / 3,
    listStyleType:'none',
},
contactformButton: {
    '&:hover':{
      backgroundColor:'#198ECB'},
    textTransform: 'none',
    padding:1,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    display: 'grid',
    color: '#fff',
    background: '#FF5757',
    borderRadius: 30,
    justifyItems: 'center',
    width:'100%',
}, 
contactFormInput:{    
    width:'100%',
    padding:1,
    border:'1px solid #c9e6ff',
    borderRadius: 10,
    hover: '#FF5740',
},
contactFormInput1:{
    height:'50%',
    width:'100%',
    padding:1,
    border:'1px solid #c9e6ff',
    borderRadius: 10,
    hover: '#FF5740',
},
contactFormTextarea:{
    maxWidth:'100%',
    padding:1,
    border:'1px solid #c9e6ff',
    borderRadius: 10,
},  
contactTextarea: {
    fontFamily: 'Poppins',
},
alert:{
    textAlign: 'center',
    padding:10,
    background:'#79c879',
    color:'#fff',
    marginBottom:10,
    display:'none',
},
}));
export { useStyles };