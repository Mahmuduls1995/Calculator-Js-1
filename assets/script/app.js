// setting C to clear LCD 

function clr() {
    document.getElementById('outputScreen').innerText = '';
}

// Del button 
function del() {
    document.getElementById('outputScreen').innerText = document.getElementById('outputScreen').value.slice(0, -1);
}
// Making button works 
function display(n) {
    document.getElementById('outputScreen').innerText += n;
}

// making the calculaton 
function calc(){
    try{
        document.getElementById('outputScreen').innerText = eval(document.getElementById('outputScreen').innerText);
    }
    catch{
        document.getElementById('outputScreen').innerText = 'আমি ক্যালকুলটর হইলেও মানুষ ভাই!';
    }
}