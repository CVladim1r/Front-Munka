import {FC} from "react";
import { Link } from "react-router-dom";
import { Typography, List, ListItem, ListItemText, Box} from "@mui/material";

const AuthBar: FC = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>&copy;Munka. Все права защищены</Typography>
            <List sx={{ display: 'flex', gap: '20px' }} component="nav">
                <ListItem>
                    <Link to="/about">О нас</Link>
                </ListItem>
                <ListItem>
                    <Link to="/license" >Лицензия</Link>
                </ListItem>
                <ListItem>
                    <Link to="/conditions">Условия</Link>
                </ListItem>
                <ListItem>
                    <Link to="/blog">Блог</Link>
                </ListItem>
            </List>
        </Box>
    );
}

export default AuthBar;