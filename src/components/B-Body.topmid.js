import {Container,Box,Input,Button,TextField,Icon,Link} from '@mui/material';


function Body(){
    return(
        <>
       
        <Container  maxWidth='xxl' sx={{height:'60px',backgroundColor:"white",zIndex:'100',position:'sticky',top:'0px'}}>
            <Box sx={{height:'50px',backgroundColor:'white',opacity:'1'}}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Input sx={{width:'300px',height:'auto',margin:'5px',backgroundColor:'white'}} placeholder="Search for products and more" />
                    <Icon sx={{color:'black',margin:'5px',cursor:'pointer'}}>search</Icon>
                    <Icon sx={{color:'black',margin:'5px',cursor:'pointer'}}>shopping_cart</Icon>
                </Box>
                
            </Box>

       </Container >
    </>


    );
}
export default Body;