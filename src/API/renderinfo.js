
    const fetchForecastData = async (API, callback)=>{
        const mainAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,hourly,minutely&appid=${API}`;
        try {
            await fetch(mainAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            return data;
            })
            .then(data=> data.map(e=>(console.log(e))))
        } 
        catch(err){
            console.error(err.message)
        }
    }

export default fetchForecastData;           
    
