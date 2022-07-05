function input(n){
    a = document.getElementById("screen");
    console.log(a);
    a.innerHTML += n.innerHTML;
}

function opration(op){
    a = document.getElementById("screen");
    oldValue=parseDouble(a.innerHTML);
    a.innerHTML="";
    operator=op.innerHTML;
}
function clearScreen(this){
    document.getElementById("screen").innerHTML = "";
}

function outPut(){
    a = document.getElementById("screen");
    newvalue=parseDouble(a.innerHTML);    
    if(operator=='+'){
        answer=newvalue+oldValue;
    }
    else if(operator == '-'){
        answer=oldValue-newvalue;
    }
    else if(operator == '*'){
        answer=oldValue*newvalue;
    }
    else if(operator == '/'){
        answer=oldValue/newvalue;
    }
    a.innerHTML=answer
}
function goBack(){
    a = document.getElementById("screen");
    str=a.innerHTML;
    a.innerHTML=str.substring(0,str.length-1);
}