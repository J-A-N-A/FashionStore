import {Container,Box,Input,Button,TextField,Icon,Link,Typography} from '@mui/material';
function Foo(){
    return(
        <Container maxWidth='xl' sx={{height:'50vh',backgroundColor:"black"}}>
   
            <Typography sx={{color:'white',textAlign:'center',fontFamily:'roboto'}}>Designed by <Icon sx={{color:'white',margin:'5px',position:'absolute',top:'20px',right:'20px'}}>favorite</Icon> Janardhan B</Typography>


        </Container>
    );

}
export default Foo;