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
                        <Typography sx={{display:'flex'}}>Страница / Главная</Typography>
                        <Typography sx={{display:'flex'}}> Главная</Typography>
                        <Container sx={{width:'100vh', marginBottom:'20px'}}>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'248px', height:'97px',marginRight:'20px'}}> Просмотры</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'248px', height:'97px',marginRight:'20px'}}> Просмотры</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'248px', height:'97px',marginRight:'20px'}}>  Баланс</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'248px', height:'97px',marginRight:'20px'}}> Новых заявок</Typography>
                            <Typography sx={{backgroundColor:'white', display:'inline-block', width:'248px', height:'97px',marginRight:'20px'}}> Всего вакансий</Typography>
                        </Container>
                        <Container sx={{width:'100vh', marginBottom:'20px'}}>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'774px', height:'345px'}}> Типо тут график</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'796px', height:'345px'}}>Еженедельные Просмотры</Typography>
                        </Container>
                        <Container>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'774px', height:'345px'}}> Вакансии</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'389px', height:'345px'}}> Еженедельный трафик</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'387px', height:'345px'}}> Анализ</Typography>
                        </Container>
                        <Container sx={{display:'block'}}>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'387px', height:'345px'}}> Задачи</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'387px', height:'345px'}}> Дата</Typography>
                                <Typography sx={{backgroundColor:'white', display:'inline-block',marginRight:'20px', width:'382px', height:'345px'}}> Члены команды</Typography>
                        </Container>
                    </Container>
        </ThemeProvider>
    );
}
export default MainBody;
