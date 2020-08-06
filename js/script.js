let totalMemory = 1000;
let usedMemory = 815;

const $usedGB = document.getElementById('used-memory');
const $usedGBBar = document.getElementById('used-memory-bar');
const $totalGB = document.getElementById('total-memory');
const $availableGB = document.getElementById('available-memory');


function availableMemory (totalGB, usedGB) {
    return totalGB - usedGB;
};

function percentCalculator(totalGB, usedGB){
    return (100 * usedGB) / totalGB;
}

$usedGBBar.style.setProperty('width', `${percentCalculator(totalMemory, usedMemory)}%`);
$usedGB.innerHTML = `${usedMemory}GB`;
$availableGB.innerHTML = `${availableMemory(totalMemory,usedMemory)}`;
$totalGB.innerHTML = `${totalMemory} GB`;