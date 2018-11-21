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