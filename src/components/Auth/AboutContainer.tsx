import {FC} from "react";
import { Link } from "react-router-dom";
import { Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { orange } from "@mui/material/colors";
const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});
const About:FC = () => {
    return(
        <ThemeProvider theme={theme}>
            <div style={{display: "flex"}}>
                <Typography align="center" variant="body1" style={{ marginTop: 20 }}>
                    Узнать больше о Munka на 
                </Typography>
                <Link to='/' ></Link>

            </div>
            </ThemeProvider>
    );
}
export default About;