const inputElement = document.getElementById("input")
const progressElement = document.getElementById("progress")
const inputElement1 = document.getElementById("input1")
const progressElement1 = document.getElementById("progress1")

inputElement.oninput = (event) => {
  str = event.target.value
  str = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); 
  progressElement.value = str;
}
inputElement1.oninput = (event) => { 
  str = event.target.value
  str = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); 
  progressElement1.value = str;
}



