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
            <div style={{
                display: "flex",
                width: "50%",
                height: '10vh',
                border: '1px solid white',
                borderRadius: '26px 26px 26px 26px',
                alignContent: 'center'
                }}>
                <Typography variant="body1" style={{ marginTop: 20, textAlign:'center', width : '50vh', height: '5vh', color:'white' }}>
                    Узнать больше о Munka на {" "}
                    <br />
                    <a href="#" style={{textDecoration: 'none', userSelect:'none', color:'white', fontSize:'30px'}}>munka.com</a>
                </Typography>

            </div>
        </ThemeProvider>
    );
}
export default About;