//Currency Exchange API Access Key: 4047c618c4332c8203276b4f6351de0b

//GET https://api.exchangeratesapi.io/latest HTTP/1.1                   Core api, though uses the Euro as its base currency
//GET https://api.exchangeratesapi.io/latest?base=USD HTTP/1.1          For setting the Dollar as the base currency
//GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1   To choose target currencies

let ExRate = {};

const dollarBaseAPIurl = 'https://api.exchangeratesapi.io/latest?base=USD';


function ExCalculate(input, result, country){
    if (country === JPY){
        result = input * data.rates.JPY;
    }
    //Just testing the function with yen first...
    //If and when successful, I will add the other currencies
    return result;
}
/*
window.onload = function(){
    this.document.getElementById("ExCalculate").addEventListener("click", function(){
        let input = document.getElementById("number").value;
        let newCurrency;
        let countryRadios = document.getElementsByName("country");
        for (let i=0; i<countryRadios.length; i++){
            if (countryRadios[i].checked){
                let newCurrency = countryRadios[i].value;
            }
        }
        console.log(input);
        console.log(newCurrency);
        console.log(ExCalculate(input, result, newCurrency));
        document.getElementById("DisplayResult").value = ExCalculate(input, result, newCurrency);
    })
}
*/

window.onload = function updateCurrency() {
    console.log(data.rates.JPY)
    let newYen = document.createElement('p');
    newYen.innerText = data;
    document.getElementById("finDiv").addEventListener("click", getYen);
}




let getYen = function() {
    fetch(dollarBaseAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        ExRate = data;
        console.log(data.rates.JPY + " Yen");
        updateCurrency();
        ExCalculate(input, result, newCurrency);
    })
    .catch((error) => {
        alert("...well that didn't work")
        console.log("Hmm...what happened here?");
    })
}








let getSGD = function() {
    fetch(dollarBaseAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        ExRate = data;
        console.log(data.rates.SGD + " Singapore Dollars");  //I'm not kidding--that's what they're called
        updateCurrency();
    })
    .catch((error) => {
        alert("...well that didn't work")
        console.log("Hmm...what happened here?");
    })
}

let getAUD = function() {
    fetch(dollarBaseAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        ExRate = data;
        console.log(data.rates.AUD + " Australian Dollars");  //I'm noticing a trend here...
        updateCurrency();
    })
    .catch((error) => {
        alert("...well that didn't work")
        console.log("Hmm...what happened here?");
    })
}

let getPound = function() {
    fetch(dollarBaseAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        ExRate = data;
        console.log(data.rates.GBP + " Pounds");
        updateCurrency();
    })
    .catch((error) => {
        alert("...well that didn't work")
        console.log("Hmm...what happened here?");
    })
}

let getEuro = function() {
    fetch(dollarBaseAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        ExRate = data;
        console.log(data.rates.EUR + " Euros");
        updateCurrency();
    })
    .catch((error) => {
        alert("...well that didn't work")
        console.log("Hmm...what happened here?");
    })
}


















//weather
//api key: c44aebd30cbed267251cba7227b95575

let tampaWeather = {};
let sendaiWeather = {};
let tokyoWeather = {};
let singaporeWeather = {};
let sydneyWeather = {};
let londonWeather = {};
let parisWeather = {};

const LocalWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=Tampa,us&appid=c44aebd30cbed267251cba7227b95575';
const SendaiWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=Sendai,jp&appid=c44aebd30cbed267251cba7227b95575';
const TokyoWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=c44aebd30cbed267251cba7227b95575';
const SingaporeWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=Singapore,sg&appid=c44aebd30cbed267251cba7227b95575';
const SydneyWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=c44aebd30cbed267251cba7227b95575';
const LondonWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c44aebd30cbed267251cba7227b95575';
const ParisWeatherAPIurl = 'http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=c44aebd30cbed267251cba7227b95575';

window.onload = function updateWeather(){
    let newPara = document.createElement('p');
    newPara.innerText = 'The temperature is: ' + data.main.temp + ' Kelvin!';
    document.getElementById("weatherDiv").appendChild(newPara);
}

let getTampaWeather = function() {
    fetch(LocalWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

/*
function updateWeather(){
    let newPara = document.createElement('p');
    newPara.innerText = 'The temperature is: ' + data.main.temp + ' Kelvin!';
    document.getElementById('weatherDiv').appendChild(newPara);

}
*/
window.onload = function updateSendaiWeather(){
    //console.log(sendaiWeather)
    document.getElementById("weatherDiv");
    //SendaiTemp.innerText = "The temperature is: " + data.main.temp + " Kelvin!";
    //document.getElementById("weatherDiv").appendChild(SendaiTemp);
}

/*
let updateSendaiWeather = function(){
    console.log(sendaiWeather)
    const SendaiTemp = document.getElementById("weatherDiv");
    SendaiTemp.innerText = "The temperature is: " + data.main.temp + " Kelvin!";
    document.getElementById("weatherDiv").appendChild(SendaiTemp);
}
*/


let getSendaiWeather = function() {
    fetch(SendaiWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateSendaiWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

let getTokyoWeather = function() {
    fetch(TokyoWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

let getSingaporeWeather = function() {
    fetch(SingaporeWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

let getSydneyWeather = function() {
    fetch(SydneyWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

let getLondonWeather = function() {
    fetch(LondonWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

let getParisWeather = function() {
    fetch(ParisWeatherAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tampaWeather = data;
        console.log('The temperature is: ' + data.main.temp + ' Kelvin!');
        updateWeather();
    })
    .catch((error) => {
        alert("...oops");
        console.log("Error!  Error!  Run for your lives!");
    })
}

/*
newFunction();
*/


//And I may want to put in a function here to convert the temp found above, which keeps coming out in Kelvin,
//to Farenheit.
//In fact I have such a function below, in the other section...
//I just need to get it working.
//Then I ought to bring it up here.

//still not sure how to do this correctly though.
//working on that...

let tempKtoF = function(K) {
    let C = K - 273.15;
    let F = C * 9 / 5 + 32;
    console.log(F);
    updateTemp();
}
function newFunction() {
    document.getElementById("new-local-temp").addEventListener('click', getTampaWeather);
}

 function updateTemp() {

}





















//World Clock Section
//I have a couple of APIs here:
//  An api for finding the latitude and longitude of where you're looking for,
//      App ID: ZFGcEqTE2chvwlCaC8Sr
//      App Code: 0Ebl5GxGixoz9CqXoc2YZA
//      Demo Request url:  https://geocoder.cit.api.here.com/6.2/geocode.json?searchtext=200%20S%20Mathilda%20Sunnyvale%20CA&app_ id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&gen=8 
//  an api for finding your time zone,
//      http://api.timezonedb.com/v2.1/get-time-zone
//  and an api for getting the time in the target location
//      
/*
let geoPos = {};

const geoAPIurl = "https://geocoder.cit.api.here.com/6.2/geocode.json?searchtext=200%20S%20Mathilda%20Sunnyvale%20CA&app_ id=ZFGcEqTE2chvwlCaC8Sr&app_code=0Ebl5GxGixoz9CqXoc2YZA"

let getGeoPos = function(){
    fetch(geoAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        geoPos = data;
        console.log(data);
        updateGeoPos();
    })
}

function updateGeoPos(){
    let newGeo = document.createElement('p');
    newGeo.innerText = '';
    document.getElementById('').appendChild(newGeo);
}

let timeZone = {};

const timeZoneAPIurl = ''

let getTimeZone = function(){
    fetch(timeZoneAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        timeZone = data;
        console.log(data);
        updateTimeZone();
    })
}

function updateTimeZone(){
    let newTZ = document.createElement('p');
    newTZ.innerText = '';
    document.getElementById('').appendChild(newTZ);
}


let Time = {};

const TimeAPIurl = ''

let getTime = function(){
    fetch(TimeAPIurl).then((response) => {
        return response.json();
    })
    .then((data) => {
        Time = data;
        console.log(data);
        updateTime();
    })
}

function updateTime(){
    let newTime = document.createElement('p');
    newTime.innerText = '';
    document.getElementById('').appendChild(newTime);
}

//document.getElementById("timeDiv").addEventListener("click", updateTime);
*/

LocalTime = {};

window.onload = function FrgnTime(){
    document.getElementById("timeCalc").addEventListener("click", FrgnTime);
    Time1 = document.getElementById("Local Time").value;
    newTime;
    let chosenLocation;
    newTime = document.getElementsByName("ForeignTime").value;
    for (let i = 0; i < newTime.length; i++){
        if (newTime[i].checked){
            chosenLocation = newTime[i].value;
        }
    }
    document.getElementById("timeDiv").value = timeChange(Time1, chosenLocation);
}

function timeChange(Time1, chosenLocation){
    newTime = NaN;
    if (chosenLocation === Japan){
        newTime = Time1 + 14;
    } else if (chosenLocation === Singapore){
        newTime = Time1 + 13;
    } else if (chosenLocation === Australia){
        newTime = Time1 + 16;
    } else if (chosenLocation === UK){
        newTime = Time1 + 5;
    } else {
        newTime = Time1 + 6;
    }
    if (newTime > 12){
        newTime = newTime - 12;
    }
    return newTime;
}








































//Curiosity Corner

let heightConv = function(ft, PLUSin) {
    let inches = ft * 12 + PLUSin;
    let cm = inches * 2.54;
    console.log(cm);
}
//Not really sure what I'm doing here...just trying something...
/*
window.onload = function(){
    //document.getElementById("Calculate").addEventListener("click", function(){
        let ft = document.getElementById("ft").value;
        let inches = document.getElementById("inches").value;
        let totalInches = ft * 12 + inches;
        let cm = totalInches * 2.54;
        console.log(cm);
    })
}
*/

let weightConv = function(lb){
    let kg = lb / 2.2046226218;
    console.log(kg);
    updateWeight();
}
function updateWeight(){

}

initSpeed = {};

window.onload = function Speed(){
    document.getElementById("SpeedButton").addEventListener("click", Speed(){
        let initSpeed = document.getElementById("mph");
        document.getElementById("DisplaySpeed")
    })
}


/*
newSpeed = {};

let getSpeed = function(){
    let s = document.getElementById("mph").value;
    newSpeed = s * 5280 * 12 * 2.54 / 100000;
    console.log(s + "mph is the same as " + newSpeed + "kph");
    updateSpeed();
}



let updateSpeed = function(){
    console.log(newSpeed)
    const kph = document.getElementById("DisplaySpeed");
    kph.innerText = newSpeed + "kph";
    document.getElementById("DisplaySpeed").appendChild(kph);
}

//document.getElementById("DisplaySpeed").addEventListener("click", getSpeed());
*/
/*
let getSpeed = function(s){
    this.document.getElementById("SpeedButton").addEventListener("click", function(){
        s = document.getElementById("mph").value;
        console.log(s);
        console.log(sCal(s))
        document.getElementById("DisplaySpeed").value = sCal(s);
    });
};

function sCal(s){
    let s2 = NaN;
    s2 = s * 5280 * 12 * 2.54 / 100000;
    return s2;
}

document.getElementById("DisplaySpeed").addEventListener("click", getSpeed);
*/
/*
let speedConv = function(mph) {
    let kph = mph * 5280 * 12 * 2.54 / 100000;
    console.log(kph);
    updateSpeed();
}
function updateSpeed() {

}
*/


let tempCtoF = function(C) {
    let F = C * 9 / 5 + 32;
    return F;
}

let tempFtoC = function(F) {
    let C = (F - 32) * 5 / 9;
    return C;
}

let tempFtoK = function(F) {
    let C = (F - 32) * 5 / 9;
    let K = C + 273.15;
    return K;
}

