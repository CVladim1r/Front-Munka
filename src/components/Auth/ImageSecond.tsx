import {FC} from "react";
import { orange } from "@mui/material/colors";
import { createTheme, Box, Typography } from "@mui/material";
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
const ImageSecond:FC = () => {
    return(
        <ThemeProvider theme={theme}>
            <Box 
                sx={{
                    borderRadius: '0 0 228px 0 ',
                    display:'flex',
                    flexDirection:'column',
                    alignContent:'center',
                    backgroundColor:'#E29D5A',
                    height: '100%',
                    textAlign: 'left',
                    minWidth: '50%',
                    minHeight: '100vh',
                    maxWidth:'50vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography sx={{fontFamily:'Arial, sans-self', fontSize:'210px', color:'white'}}>Munka</Typography>
                    <About />
            </Box>
                

        </ThemeProvider>
    );
}
export default ImageSecond;