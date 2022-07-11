    var oldValue;
    var operator;
    function input(n){
        a = document.getElementById("screen");
        if(a.innerHTML =='+'||a.innerHTML =='-'||a.innerHTML =='*'||a.innerHTML =='/'){
            a.innerHTML = "";
        }
        a.innerHTML += n.innerHTML;
    }
    function operation(op){
        a = document.getElementById("screen");
        oldValue=parseFloat(a.innerHTML);
        a.innerHTML=op.innerHTML;
        operator=op.innerHTML;
    }
    function clearScreen(){
        document.getElementById("screen").innerHTML = "";
    }
    function output(){
        a = document.getElementById("screen");
        newvalue=parseFloat(a.innerHTML);    
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
        a.innerHTML=answer;
    }
    function goBack(){
        a = document.getElementById("screen");
        str=a.innerHTML;
        a.innerHTML=str.substring(0,str.length-1);
    }