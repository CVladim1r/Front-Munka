import {FC} from "react";
import { orange } from "@mui/material/colors";
import { createTheme, Container } from "@mui/material";
import Munka from '../../assets/munka.svg';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    palette:{
        primary:{
            main: orange[500]
        }
    }
})
const Image:FC = () => {
    return(
        <ThemeProvider theme={theme}>
                <Container style={{
                    backgroundColor:'#E29D5A',
                    height: '100%',
                    textAlign: 'left',
                    float: 'right',
                    display: 'inline-block',
                    maxWidth: '70%',
                    minHeight: '100',
                    marginTop: '0 top'
                }}>
                    <img src={Munka} alt="Munka" style={{width:'100vh'}} />
                </Container>
        </ThemeProvider>
    );
}
export default Image;