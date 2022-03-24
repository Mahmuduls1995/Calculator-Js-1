// setting C to clear LCD 

function clr() {
    document.getElementById('outputScreen').innerText = '';
}

// Del button 
function del() {
    document.getElementById('outputScreen').innerText = document.getElementById('outputScreen').value.slice(0, -1);
}
