
    const fetchForecastData = async ()=>{
        const mainAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,hourly,minutely&appid=${API}`
        try {
            await fetch(mainAPI)
            .then(response => response.json())
            .then(data => console.log(data)) 
        } 
        catch(err){
            console.error(err.message)
        }
    }

export default fetchForecastData;           
    
