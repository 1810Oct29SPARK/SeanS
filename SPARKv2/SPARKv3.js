//Speed
window.onload = function(){
    document.getElementById("SpeedButton").addEventListener("click", function(){
        let startingSpeed = document.getElementById("mph").value;
        document.getElementById("DisplaySpeed").value = getSpeed(startingSpeed);
    });
};
function getSpeed(startingSpeed){
    let finalSpeed = NaN;
    finalSpeed = startingSpeed * 5280 * 12 * 2.54 / 100000;
    return finalSpeed;
}


//Weight

window.onload = function(){
    document.getElementById("WeightButton").addEventListener("click", function(){
        let startingWeight = document.getElementById("pounds").value;
        document.getElementById("DisplayWeight").value = getWeight(startingWeight);
    });
};
function getWeight(startingWeight){
    let finalWeight = NaN;
    finalWeight = startingWeight / 2.2046226218;
    return finalWeight;
}


//Height

window.onload = function(){
    document.getElementById("Conv").addEventListener("click", function(){
        let startingHeight1 = document.getElementById("feet").value;
        let startingHeight2 = document.getElementById("inches").value;
        document.getElementById("DisplayHeight").value = getHeight(startingHeight1, startingHeight2);
    });
};
function getHeight(startingHeight1, startingHeight2){
    let finalHeight = NaN;
    finalHeight = startingHeight1 * 12 + startingHeight2 * 2.54;
    return finalHeight;
}


//Time

window.onload = function(){
    document.getElementById("Conv").addEventListener("click", function(){
        let startingHeight1 = document.getElementById("feet").value;
        let startingHeight2 = document.getElementById("inches").value;
        document.getElementById("DisplayHeight").value = getHeight(startingHeight1, startingHeight2);
    });
};
function getHeight(startingHeight1, startingHeight2){
    let finalHeight = NaN;
    finalHeight = startingHeight1 * 12 + startingHeight2 * 2.54;
    return finalHeight;
}


//Currency Exchange


/*

let ExRate = {};

const dollarBaseAPIurl = 'https://api.exchangeratesapi.io/latest?base=USD';

window.onload = function() {
    fetch(dollarBaseAPIurl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        ExRate = data;
        JPYrate = data.rates.JPY;
        SGDrate = data.rates.SGD;
        AUDrate = data.rates.AUD;
        GBPrate = data.rates.GBP;
        EURrate = data.rates.EUR;
        document.getElementById("CashEx").addEventListener("click", function(){
            let startingCurrency = document.getElementById("USD").value;
            let chosenCountry;
            let operationRadios = document.getElementsByName("country")
            for (let i=0; i < operationRadios.length; i++){
                if (operationRadios[i].checked){
                    chosenOperation = operationRadios[i].value;
                }
            }
        });
        document.getElementById("NewCurrency").value = getCurrency(startingCurrency, chosenCountry);
    })
    .catch( (error) => {
        alert('oh no :(');
        console.log(error);
    });
}

function getCurrency(startingCurrency, chosenCountry){
    let finalCurrency = NaN;
    if (chosenCountry === JPY){
        finalCurrency = startingCurrency * JPYrate;
    } else if (chosenCountry === SGD){
        finalCurrency = startingCurrency * SGDrate;
    } else if (chosenCountry === AUD){
        finalCurrency = startingCurrency * AUDrate;
    } else if (chosenCountry === GBP){
        finalCurrency = startingCurrency * GBPrate;
    } else {
        finalCurrency = startingCurrency * EURrate;
    }
    return finalCurrency;
}






//Temp


*/
