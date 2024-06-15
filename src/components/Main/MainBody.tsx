import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, ThemeProvider, Typography,  createTheme, Box} from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            main: '#D0B1A3',
        },
    },
});
const MainBody:FC = () => {
    return(
        <ThemeProvider theme={theme}>
                    <Container sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>  
                        <Typography sx={{display:'flex', color:'#D0B1A3', fontSize:'14px'}}>Страница / Главная</Typography>
                        <Typography sx={{display:'flex', color:'#E19C59', fontSize:'34px',fontWeight:'bold'}}> Главная</Typography>
                        <Container sx={{width:'100vh', marginBottom:'1vh'}}>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'12vh', height:'8vh',marginRight:'1vh'}}> Просмотры</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'12vh', height:'8vh',marginRight:'1vh'}}>  Баланс</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'12vh', height:'8vh',marginRight:'1vh'}}> Новых заявок</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'12vh', height:'8vh',marginRight:'1vh'}}> Всего вакансий</Typography>
                        </Container>
                        <Container sx={{width:'100vh', marginBottom:'1vh'}}>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'40vh', height:'31vh'}}> Типо тут график</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'41vh', height:'31vh'}}>Еженедельные Просмотры</Typography>
                        </Container>
                        <Container sx={{width:'100vh', marginBottom:'1vh'}}>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'40vh', height:'31vh'}}> Вакансии</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'20vh', height:'31vh'}}> Еженедельный трафик</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'20vh', height:'31vh'}}> Анализ</Typography>
                        </Container>
                        <Container sx={{width:'100vh', marginBottom:'1vh'}}>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'20vh', height:'31vh'}}> Задачи</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'20vh', height:'31vh'}}> Дата</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'1vh', width:'20vh', height:'31vh'}}> Члены команды</Typography>
                        </Container>
                    </Container>
        </ThemeProvider>
    );
}
export default MainBody;
