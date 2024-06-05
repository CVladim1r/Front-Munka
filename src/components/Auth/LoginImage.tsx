import {FC} from "react";
import { orange } from "@mui/material/colors";
import { createTheme, Box } from "@mui/material";
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
                <Box 
                sx={{
                    borderRadius: '0 0 0 228px'
                }} 
                
                style={{
                    backgroundColor:'#E29D5A',
                    height: '100%',
                    textAlign: 'left',
                    float: 'right',
                    display: 'inline-block',
                    minWidth: '50%',
                    minHeight: '100vh',
                    marginTop: '0 top'
                }}>
                    Munka
                    <About />
                </Box>
                

        </ThemeProvider>
    );
}
export default Image;