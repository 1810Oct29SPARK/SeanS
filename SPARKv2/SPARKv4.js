//speed

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