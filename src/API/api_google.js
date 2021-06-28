
const fetchingGoogleAPI = async function(address,callback){

try{
	await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCK7u43Kvcn9J20kSpw0e7NV_ci3VRlQRw`)
		.then(response=>response.json())
		.then(data=>{
				console.log('Init fetch');
			return data.results
		})
		.then(data=>{
			console.log(data[0].geometry.location)
			console.log(data[0])
			console.log(`This is the callback: ${callback}`)
			return callback(data)
		})
		}catch(err){
		console.error(err)
		}

}

export default fetchingGoogleAPI;
