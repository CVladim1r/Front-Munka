import {FC} from "react";
import { orange } from "@mui/material/colors";
import { createTheme, Box } from "@mui/material";
import Munka from '../../assets/munka.svg';
import { ThemeProvider } from "@emotion/react";
import About from '../../components/Auth/AboutContainer.tsx';


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
                <Box style={{
                    backgroundColor:'#E29D5A',
                    height: '100%',
                    textAlign: 'left',
                    float: 'right',
                    display: 'inline-block',
                    maxWidth: '50%',
                    minHeight: '100vh',
                    marginTop: '0 top'
                }}>
                    <img src={Munka} alt="Munka" style={{width:'100vh'}} /><About />
                </Box>
                

        </ThemeProvider>
    );
}
export default Image;