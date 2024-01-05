import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 40%;
  border-radius: 2px ;
  margin-left: 40px;
  display:flex;
  border:1px solid black;
`;
const InputSearchBase = styled(InputBase)`
  margin-left: 20px;
  width: 100%;
  font-size:unset;
  color:black;
`;
const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
display:flex;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for Products,Brands and More..." />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
