import {FC} from "react";
import { orange } from "@mui/material/colors";
import { createTheme, Box, Typography, Container} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import About from './AboutContainer.tsx';
import Munka from '../../assets/munka.svg';


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
                    borderRadius: '0 0 0 228px',
                    display:'flex',
                    flexDirection:'column',
                    alignContent:'center',
                    backgroundColor:'#E29D5A',
                    height: '100%',
                    textAlign: 'left',
                    minWidth: '50%',
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography sx={{fontFamily:'Arial, sans-self', fontSize:'210px', color:'white'}}>Munka</Typography>
                    <About />
            </Box>
                

        </ThemeProvider>
    );
}
export default Image;