import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {fetchCity, fetchCuisineType} from './homeService'

export default function HomePage() {
    const [cityName, setCityName] = useState('');
    const [cityList, setCityList] = useState([]);
    const [cuisineName, setCusineName] = useState('');
    const [cuisineList, setCuisineList] = useState([]);
    const handleChangeCity = (event) => {
        setCityName(event.target.value);
         console.log("City Name "+ event.target.value)
         fetchCuisineType(event.target.value).then((res)=>{
             console.log("response data:"+JSON.stringify(res.data));
             setCuisineList(res.data.cuisineType)
         }).catch((e)=>console.log("Error occured" + e))
    };

    const handleChangeCuisine = (event) => {
        setCusineName(event.target.value);
    };

    useEffect(() => {
        fetchCity().then((res)=>{
            console.log("response data:"+JSON.stringify(res.data));
            setCityList(res.data.cities);
        }).catch((e)=>console.log("Error occured" + e))
    },[])

    return (
        <div>
            <br/>
            <h2>Welcome to Food Menu</h2>
            <Box sx={{ minWidth: 120 }} >
                <FormControl style={{width: '10%', marginLeft: '5%'}}>
                    <InputLabel id="demo-simple-select-label">City Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cityName}
                        placeholder='-select-'
                        onChange={handleChangeCity}
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {cityList.map(city =>  <MenuItem key={city} value={city}>{city}</MenuItem> )}
                    </Select>
                </FormControl>
                <FormControl style={{width: '10%', marginLeft: '5%'}}>
                    <InputLabel id="demo-simple-select-label">Cuisine Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cuisineName}
                        placeholder='-select-'
                        onChange={handleChangeCuisine}
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {cuisineList.map(cuisine =>  <MenuItem key={cuisine} value={cuisine}>{cuisine}</MenuItem> )}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}
