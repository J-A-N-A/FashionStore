import{Container ,Input,Button,TextField,Icon,Link,Box,SpeedDialAction,SpeedDial,SpeedDialIcon,Typography} from '@mui/material';
import actions from '@mui/material/SpeedDialAction';
function Navi(){
    return(
            <Container maxWidth='xxl' sx={{height:'auto',backgroundColor:"black",zIndex:'50',position:'relative',top:'0'}}>
                <Typography sx={{margin:'5px',textAlign:'center',color:'white',fontSize:'50px',fontFamily:'roboto'}}>Store</Typography>
                <Icon sx={{color:'white',margin:'5px',position:'absolute',top:'20px',right:'20px'}}>account_circle</Icon>
            </Container>



    );
}
export default Navi;