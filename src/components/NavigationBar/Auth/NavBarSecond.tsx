import {FC} from "react";
import { Link } from "react-router-dom";
import { Typography, List, ListItem, Box} from "@mui/material";

const NavbarSecond: FC = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize:'14' }}>
            <Box sx={{marginLeft:'20vh'}}>
                <List sx={{ display: 'flex', gap: '20px', whiteSpace:'nowrap'}} component="nav">
                    <ListItem>
                        <Link to="/about" style={{textDecoration:'none', userSelect:'none', color:'white'}}>О нас</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/license" style={{textDecoration:'none', userSelect:'none', color:'white'}} >Лицензия</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/conditions" style={{textDecoration:'none', color:'white', userSelect:'none'}}>Условия</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/blog" style={{textDecoration:'none', userSelect:'none', color:'white'}}>Блог</Link>
                    </ListItem>
                </List>
            </Box>
            <Typography style={{marginRight:'35vh', fontSize:'14px', color:'#D0B1A3'}}>&copy;Munka. Все права защищены</Typography>
        </Box>
    );
}

export default NavbarSecond;