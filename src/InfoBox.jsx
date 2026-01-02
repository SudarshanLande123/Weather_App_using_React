import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox ({info}) {
    const INIT_IMG = "https://up.yimg.com/ib/th/id/OIP.-aHq5QcmoCBaCObi6HrCMQHaEw?pid=Api&rs=1&c=1&qlt=95&w=162&h=104"
    const HOT_URL = "https://tse4.mm.bing.net/th/id/OIP.pLbGfifdGEHoA0OtjskGoQHaE7?pid=Api&P=0&h=220";
    const COLD_URL = "https://up.yimg.com/ib/th/id/OIP.0YCuHXuExdsEXsfFNIdP3QHaEo?pid=Api&rs=1&c=1&qlt=95&w=157&h=98";
    const RAIN_URL = "https://tse2.mm.bing.net/th/id/OIP.5fI8VxCcsJoQ2QL5stbS-gHaEJ?pid=Api&P=0&h=220";

    return(
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity > 80 ?<ThunderstormIcon/>  : info.temp > 15 ?<AcUnitIcon/>  : <SunnyIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temperature = {info.minTemp}&deg;C</p>
            <p>Max Temperature = {info.maxTemp}&deg;C</p>
            <p>The Weather can Described as <i><b>{info.weather}</b></i> and feelas like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>

        </div>
    );
}