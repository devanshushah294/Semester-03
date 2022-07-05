let screen = document.getElementById("screen");

buttons = document.querySelectorAll("button");
let screenValue = "";
for (const item of buttons) {
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        console.log("button text is ",buttonText);
        if(buttonText == '='){
            element = document.getElementById("screen");
            element.innerHTML = eval(screenValue);
        }
        else if(buttonText == 'C'){
            screenValue = "0";
            element = document.getElementById("screen");
            element.innerHTML = screenvalue;
        }
        else{
            if(screenValue == "0"){
                screenvalue = buttonText;
            }else{
                screenValue += buttonText;
             }
            element = document.getElementById("screen");
            element.innerHTML = screenValue;
        }
    })
    
}