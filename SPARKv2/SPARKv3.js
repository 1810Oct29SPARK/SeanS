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
    let finalFeet = NaN;
    let finalInches = NaN;
    finalFeet = startingHeight1 * 12;
    finalInches = finalFeet + startingHeight2;
    finalHeight = finalInches * 2.54;
    return finalHeight;
}
;
