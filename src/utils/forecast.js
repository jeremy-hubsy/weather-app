const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/313686083270291c43c4b9fc39dd59a5/" + (latitude)+ ',' + (longitude)+'?units=si '

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to the Master service')
        }else if(body.error){
            callback('Unable to find your location. Try another search.', undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ` + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability+ ' % of rain')
        }
    })
}

module.exports = forecast