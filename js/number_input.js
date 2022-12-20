
var input = document.getElementById("number_input");
var input1 = document.getElementById("number_input1");
input.onmouseenter = function() {
    "use strict";
    if(this.placeholder == "Ваш телефон") {
        this.placeholder = '+7 (___) _ -  - __';
    }
};
input.onmouseleave = function() {
    "use strict";
    if(this.placeholder == '+7 (___) _ -  - __') {
        this.placeholder = 'Ваш телефон';
    }
};
input1.onmouseenter = function() {
    "use strict";
    if(this.placeholder == "Ваш телефон") {
        this.placeholder = '+7 (___) _ -  - __';
    }
};
input1.onmouseleave = function() {
    "use strict";
    if(this.placeholder == '+7 (___) _ -  - __') {
        this.placeholder = 'Ваш телефон';
    }
};
