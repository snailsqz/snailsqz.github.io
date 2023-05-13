let num = document.getElementById('number');
let count = 0;

// function decrease(){
//     count--;
//     num.innerText = count;
// }

function reset(){
    count = 0;
    num.innerText = count;
}

function increase(){
    count++;
    num.innerText = count;
}

document.getElementById("decreasebtn").onclick = function(){
    count--;
    document.getElementById('number').innerHTML = count;
}