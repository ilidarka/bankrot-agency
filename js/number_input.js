
var input = document.getElementById("number_input");

input.onfocus = function() {
    "use strict";
    if(this.placeholder == "Ваш телефон") {
        this.value = '+7 (___) _ -  - __';
    }
};
