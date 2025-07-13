const request = require('request')

// const url = "http://api.weatherapi.com/v1/current.json?key=c3f23a5568884458a71143951251207&q=Sudan&aqi=no"

// request({url , json : true}, (error, response) => {
//     if(error){
//         console.log("ERROR YA AAAAAAAAAAAAAAA")
//     }
//     else if(response.body.error) {
//         console.log(response.body.error.message)
//     }
//     else {
//         console.log(response.body.location.name, response.body.current.condition.text)
//     }

// })


/////////////////////////////////////////////////////////////

// const request = require('request')
// const url = "http://api.weatherstack.com/current?access_key=292bcfaa075aaab64ee707e65c6e1d67&query="

// request({url , json : true}, (error, response) => {

//     if(error){
//         console.log("ERROR YA AAAAAAAAAAAAAAA")
//     }
//     else if(response.body.error) {
//         console.log(response.body.error.message)
//     }
//     else {
//         console.log(response.body.location.name, response.body.current.condition.text)
//     }
// })


////////////////////////////////////////////////////////////

const geocode = (address , callback) => {
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWFobW91ZDkxIiwiYSI6ImNtZDBmcG9mYzB4ejkya3EyZTFpY2lidXkifQ.u5kc6btmU_uLvBubJd10iw`;

    request({ url: geocodingUrl, json: true }, (error, response) => {
        if(error){
            callback("error yyyyyyyyyyyy" , undefined)
        }
        else if (response.body.message) {
            callback(response.body.message, undefined)
        }
        else if (response.body.features.length == 0) {
            callback("Unable to find location" , undefined)
        }
        else {
            callback(undefined , {
                longtitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1]
            })
        }
    });
}
let country = process.argv[2]
geocode(country , (error, data) => {
    console.log("ERROR : " , error)
    console.log("Data : " , data)
    
    
    forecast(data.latitude  , data.longtitude , (error, data) => {
        console.log("ERROR : " , error)
        console.log("Data : " , data)
    })
})


const forecast = (latitude, longtitude , callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=c3f23a5568884458a71143951251207&q=" + latitude + "," + longtitude

    request({url , json : true}, (error, response) => {
        if(error){
            callback("error yyyyyyyyyyyy" , undefined)
        }
        else if(response.body.error) {
            callback(response.body.error.message, undefined)
        }
        else {
            callback(undefined , response.body.location.name, response.body.current.condition.text)
        }

    })
}




