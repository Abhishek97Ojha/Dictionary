const inputBox = document.getElementById("inputBox");
const meaning = document.getElementById("meaning");
const icon = document.getElementById("icon");
const audio = document.getElementById("audio");
function input(){
    if (inputBox.value == ""){
        icon.style.visibility = "hidden";
        inputBox.style.borderRight = "2px solid blue";
    }
    else{
        inputBox.style.borderRight = "none";
        icon.style.visibility = "visible";
    }
}
function clean(){
    console.log("clean");
    inputBox.value = "";
    meaning.innerHTML = "";
    audio.innerHTML = "";
    icon.style.visibility = "hidden";
    inputBox.style.borderRight = "2px solid blue";
}
async function search(){
    console.log(inputBox.value);
    const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inputBox.value}?key=0386bca9-7411-4e24-b36e-18f10f344072`);
    const data = await res.json()
    console.log(data);
    meaning.innerHTML = data[0].shortdef.flat();
    audio.innerHTML = `
    <audio controls autoplay>
          <source src="./tone.mp3">
    </audio>`
}
