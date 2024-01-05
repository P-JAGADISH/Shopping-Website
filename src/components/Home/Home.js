import NavigationBar from "./NavigationBar";
import BannerImage from "./BannerImage"
import {Box,styled} from "@mui/material";

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`;

const Home=()=>{
    return(
        <div>
        <NavigationBar />
        <Component>
        <BannerImage />
        </Component>
        <div>
          <h3>Beauty, Toys & More</h3>
        </div>
        </div>
    )
}

export default Home;