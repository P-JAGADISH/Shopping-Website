import { Box ,Typography,styled} from "@mui/material"
import {ShoppingCart} from "@mui/icons-material"
import GetAppIcon from '@mui/icons-material/GetApp';

const Wrapper=styled(Box)`
display:flex;
color:black;
`;

const Container=styled(Box)`
display:flex;
margin-left:270px;
color:black;
`;

const AddCart=()=>{
    return(
            <Wrapper>
            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <Box style={{marginLeft:20}}>
            <GetAppIcon />
            </Box>
            <Box>GetApp</Box>
            </Wrapper>
    )
}
export default AddCart;