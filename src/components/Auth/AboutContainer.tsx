import {FC} from "react";
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
            <div style={{display: "flex", width: "50%"}}>
                <Typography align="center" variant="body1" style={{ marginTop: 20 }}>
                    Узнать больше о Munka на 
                </Typography>
                <a href="#" > XUI</a>
            </div>
        </ThemeProvider>
    );
}
export default About;