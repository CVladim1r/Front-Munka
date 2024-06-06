import {FC} from "react";
import { Link } from "react-router-dom";
import { Typography, Container, List, ListItem, ListItemText} from "@mui/material";

const AuthBar:FC = () => {
    return(
        <Container style={{position: 'absolute', bottom: 0, width: '100%', display: 'flex'}}>
            <Typography style={{left:'10vh', display: 'flex'}}>&copy;Munka. Все права защищены</Typography>
            <List component="nav">
                <ListItem>
                <ListItemText style={{ textAlign: 'right', display: "inline-block"}}>
                    <Link to="/about">О нас</Link>
                </ListItemText>
                </ListItem>
                <ListItem>
                <ListItemText style={{ textAlign: 'right', display: "inline-block"}}>
                    <Link to="/licencse">Лицензия</Link>
                </ListItemText>
                </ListItem>
                <ListItem>
                <ListItemText style={{ textAlign: 'right', display: "inline-block"}}>
                    <Link to="/conditions">Условия</Link>
                </ListItemText>
                </ListItem>
                <ListItem>
                <ListItemText style={{ textAlign: 'right', display: "inline-block"}}>
                    <Link to="/blog">Блог</Link>
                </ListItemText>
                </ListItem>
            </List>
    </Container>

    );
}

export default AuthBar;