const inputElement = document.getElementById("input")
const progressElement = document.getElementById("progress")
const inputElement1 = document.getElementById("input1")
const progressElement1 = document.getElementById("progress1")

inputElement.oninput = (event) => { 
  progressElement.value = event.target.value
}
inputElement1.oninput = (event) => { 
  progressElement1.value = event.target.value
}
